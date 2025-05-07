"use client";
import { Auth, Member } from "@/types/member";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login, logout, setAccessToken } from "@/store/slices/memberSlice";
import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginMember } from "@/service/member";
import { useRouter } from "next/navigation";
export const useAuth = () => {
  //////////TODO M6. useAppDispatch 함수로 부터 dispatch 전달받기
  const dispatch = useAppDispatch();

  //////////TODO M7. useAppSelector 함수로 부터 member State 전달받기
  const memberState = useAppSelector((state) => state.member.memberState);
  const router = useRouter();
  const loginMutation = useMutation({
    mutationFn: loginMember,
    onSuccess: (data) => {
      // 성공하면 Redux에 저장
      console.log("로그인 성공!!!, data:", data);
      dispatch(login(data));
      router.push("/");
    },
    onError: (error) => {
      console.error("로그인 실패:", error);
      alert("로그인 실패");
    },
  });
  //////////TODO M8. dispatch함수로 login action  선언하기
  const signIn = useCallback(
    (member: Member) => {
      loginMutation.mutate(member);
    },
    [loginMutation]
  );
  const setToken = useCallback((token: string) => dispatch(setAccessToken(token)), [dispatch]);

  //////////TODO M9. dispatch함수로 logout action 선언하기
  const signOut = useCallback(() => dispatch(logout()), [dispatch]);

  //////////TODO M10. 상태와 action함수 return 하기
  return { memberState, loginMutation, setToken, login: signIn, logout: signOut };
};
