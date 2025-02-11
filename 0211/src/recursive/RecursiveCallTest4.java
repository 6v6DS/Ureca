package recursive;

/*
 * 재귀 함수
 *      - 함수 내에서 해당 함수를 또 호출
 *      - 반복의 depth가 랜덤일 때 사용(인자 or 배열로 depth를 컨트롤한다)
 *      - 
 *        기저 조건 : 재귀 함수를 중단하는 조건
 *        유도 파트 : 재귀 함수를 진행하는 파트
 * 
 * 한 번 수행한 결과를 저장하겠다 -> memorization (수정 가능)
 * 동적 프로그래밍 -> 수행할 수 있는 최소의 단위로 나눠서 응용해서 계속 늘려가는 방식 bottom->up (수정하지 않음)
 * dp
 * 
 */

 // top-> down 방식 1일때까지 계속 내려감.
public class RecursiveCallTest4 {
    
    public static void main(String[] args) {
        System.out.println("7번째 수열은: " + fibo(7) + "입니다");
    }
    public static int fibo(int n){
        if(n <= 2) return 1;
        return fibo(n-1) + fibo(n-2);
    }
}
