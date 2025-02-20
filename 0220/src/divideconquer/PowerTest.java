package divideconquer;

/**
 * Divide Conquer (분할 정복)
 * 분할 : 해결할 문제를 여러 개의 작은 부분으로 나눈다. 
 * 정복 : 나눈 작은 문제를 각각 해결한다. 
 * 통합 : (필요하다면) 해결된 해답을 모은다.
 * 
 * ex) 머지정렬, 퀵정렬, 이진검색
 */
public class PowerTest {
	public static long powerRec(int x, int n) {
		if(n == 1 ) return x;
		return x * powerRec(x, n-1);
	}
	public static long dcPower(int x, int n ) {		//21억번 -> 31번으로 줄음. 2^31 = 21억
		if(n==1) return x;
		if(n==0) return 1;
		long let = dcPower(x, n >> 1);
		if(n % 2 == 0){
			return let * let;
		}else{	//홀수 인 경우
			return let * let * x;
		}
	}
	public static void main(String[] args) {
//		6268685802422096249
//		System.out.println(powerRec(9, 2111111111));	// 재귀로는 스택 오버플로우가 남

		//시퀀스하게 연산을 하기 떄문에 21억번 반복 O(N)의 시간복잡도
		long result = 1;
		int n = 9;
		for (int i = 0; i < 2111111111; i++) {
			result *= n;
		}
		System.out.println("값은 :" + result);		

		//O(logN)의 시간복잡도
		System.out.println(dcPower(9, 2111111111));		// 분할 정복으로 반을 똑 잘라서 풀어보겠다.

		
		// System.out.println(powerRec(4, 4));
		// System.out.println(dcPower(4, 4));
//		System.out.println(16*16);
	}
}













