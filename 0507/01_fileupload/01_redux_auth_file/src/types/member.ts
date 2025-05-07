export interface Member {
  id: string;
  password: string;
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
}

export interface Auth {
  accessToken?: string;
  refreshToken?: string;
  isLoggedIn: boolean;
  id: string;
}
//////////TODO M1.member state를 위한 타입 선언하기
export interface MemberState {
  memberState: Auth | null;
}

export interface ResMember {
  message: string;
  member?: Member;
}
