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

public class RecursiveCallTest {
    static int N = 10;

    // 기저 조건에서 재귀가 중단
    //Bottom -> UP
    // public static int sum1(int i){
    //     // 기저조건 : 재귀함수를 중단하는 조건
    //     if(i == N) return N;
    //     return sum1(i+1)+i;
    // }
    
    public static void print(int num){
        if(num > N) return;
        System.out.println(num);
        print(num + 1);
    }

    public static void print2(int num){
        if(num == -1) return;
        System.out.println(num + " ");
        print2(num - 1);
    }

    //특정 조건을 만족할 때 재귀가 진행되는 구조
    //bottom -> up
    public static void print3(int num){
        if(num <= N){
            System.out.println(num + " ");
            print3(num+1);
        }
    }
    //top -> down
    public static void print4(int num){
        if(num > -1){
            System.out.println(num + " ");
            print4(num-1);
        }
    }

    public static void main(String[] args) {
        // print3(0);
        print4(N);
        System.out.println();

        // for(int i = 0; i <= N; i++){
        //     System.out.println(i);
        // }
        System.out.println();
        // print(0);
        System.out.println();

        for(int i = 10; i > -1; i--){
            System.out.println(i+" ");
        }
        System.out.println();
        // print2(N);

        // int sum = 0;
        // for(int i = 1; i <= N; i++){
        //     sum += i;
        // }
        
        // System.out.println("가우스 : " + ((N+1)*N/2));
        // System.out.println("for: " + sum);
        // System.out.println(sum1(1));
    }

}
