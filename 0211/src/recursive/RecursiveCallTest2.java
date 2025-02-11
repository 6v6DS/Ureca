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

public class RecursiveCallTest2 {
    static int N = 10;

    //Bottom -> UP
    public static int sum1(int n){
        if(n == N) return n;
        return n + sum1(n+1);       // 1 + 2 + 3 + ... + n
    }
    
    //Top -> Down
    public static int sum2(int n){
        if(n == 0) return n;
        return n + sum2(n-1);
    }

    public static void main(String[] args) {
        int sum = 0;                    // 따지고 보면 이 sum이 결과인 것임.
        for(int i = 1; i <= N; i++){
            sum += i;
        }
        System.out.println(sum);
        System.out.println(sum1(1));

        int sum2 = 0;
        for(int i = N; i > 0; i--){
            sum2 += i;
        }
        System.out.println(sum2);
        System.out.println(sum2(N));


    }
    
}
