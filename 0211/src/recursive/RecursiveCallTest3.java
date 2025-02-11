package recursive;

/*
 * 재귀 함수
 *      - 함수 내에서 해당 함수를 또 호출
 *      - 반복의 depth가 랜덤일 때 사용(인자 or 배열로 depth를 컨트롤한다)
 *      - 
 *        기저 조건 : 재귀 함수를 중단하는 조건
 *        유도 파트 : 재귀 함수를 진행하는 파트
 * 
 *        
 */

public class RecursiveCallTest3 {
    static int N = 5;

    //Bottom -> UP
    public static int fac1(int n){
        if(n == N) return n;
        return n * fac1(n+1);
    }
    
    //Top -> Down
    public static int fac2(int n){
        if(n == 1) return n;
        return n * fac2(n-1);
    }

    public static void main(String[] args) {
        int fac1 = 1;
        for(int i = 2; i <= N; i++){        // 1은 곱해봤자 1이기 때문에 i는 2부터
            fac1 *= i;
        }
        System.out.println(fac1);
        System.out.println(fac1(1));

        int fac2 = 1;
        for(int i = N; i > 0; i--){
            fac2 *= i;
        }
        System.out.println(fac2);
        System.out.println(fac2(N));
    }
    
}
