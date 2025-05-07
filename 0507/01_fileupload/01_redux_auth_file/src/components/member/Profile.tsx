"use client";

import { logoutMember } from "@/service/member";
import { useAppSelector } from "@/store/hooks";
import { useAuth } from "@/store/hooks/memberHook";
import { handleApi } from "@/utils/handleApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Profile() {
  //////////TODO M11. member state와  action 함수들을 Custom hook을 통해 전달 받기
  const { logout } = useAuth();
  const router = useRouter();
  const memberState = useAppSelector((state) => state.member.memberState);

  //////////TODO M14 로그인 버튼을 위한 이벤트 처리
  const handleLogin = useCallback(() => {
    router.push("/member/login");
  }, []);

  //////////TODO M15 로그아웃 버튼을 위한 이벤트 처리
  const handleLogout = useCallback(async () => {
    console.log("logout..... memberState:", memberState);
    if (memberState) {
      const id = memberState.id;
      console.log("logout.....id:", id);
      const { data } = await handleApi(() => logoutMember(id));
      if (data) {
        logout();
        router.push("/");
      }
    }
  }, [memberState, logout]);

  //////////TODO M12 state에 회원 정보가 없는 경우 로그인 버튼을 리턴
  if (!memberState?.isLoggedIn)
    return (
      <div>
        <button onClick={handleLogin}>로그인</button>{" "}
        <Link href="/member/regist">
          <button>회원가입</button>
        </Link>
      </div>
    );

  //////////TODO M13.state에 회원 정보가 있는 경우 회원정보 및 로그아웃 버튼 리턴하기
  return (
    <div>
      <span>{memberState?.id}님</span>
      <Link href="/member">
        <button>회원정보</button>
      </Link>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
