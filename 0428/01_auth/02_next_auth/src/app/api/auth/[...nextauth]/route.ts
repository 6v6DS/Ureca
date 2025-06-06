import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from "next-auth/jwt";

//////////// TODO 3. .env.local 파일에 설정한  BASE_URL 추출하기
const BASE_URL = process.env.BASE_URL;

// TODO 5. access Token이 만료된 경우 accessToken을 다시 받을 수 있는 함수 선언
async function refreshAccessToken(token: JWT) {
  try {
    console.log("refreshAccessToken......");
    const response = await axios.post(
      `${BASE_URL}/member/refresh`,
      { id: token.id },
      {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "Refresh-Token": token.refreshToken,
        },
      }
    );
    const newAccessToken = response.headers["authorization"];
    console.log("토큰 갱신 성공.......", newAccessToken);
    return {
      ...token,
      accessToken: newAccessToken,
    };
  } catch (error) {
    console.log("토큰 갱신 실패.......");
    return {
      ...token,
      error: "Fail to Refresh from create New AccessToken",
    };
  }
}
//////////// TODO 4. NextAuth함수에 설정 하기

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "id", type: "text" },
        password: { label: "password", type: "text" },
      },
      async authorize(credentials) {
        console.log("next auth login..........credential", credentials);
        try {
          const response = await axios.post(`${BASE_URL}/member/login`, {
            id: credentials?.id,
            password: credentials?.password,
          });
          console.log("response.........", response);

          const accessToken = response.headers["authorization"];
          const refreshToken = response.headers["refresh-token"];

          if (accessToken) {
            return {
              id: credentials?.id,
              password: credentials?.password ?? "",
              accessToken,
              refreshToken,
            };
          }
          return null;
        } catch (error) {
          console.log("Login Failed", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.id = user.id;
        token.expiresAt = Date.now() + 1000 * 60;
        return token;
      }

      // accessToken이 유효하면 기존 토큰을 사용
      if (Date.now() < (token.expiresAt ?? 0)) {
        return token;
      }
      // accessToken 만료됐으면 refresh 토큰 요청
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.id = token.id;
      return session;
    },
  },
});
const authHandler = handler;
export { authHandler as GET, authHandler as POST };
