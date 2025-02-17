package sort;

import java.util.Arrays;

public class CountSortTest {
	public static void main(String[] args) {
		int[] data= {0,4,1,3,1,2,4,1};		// 데이터를 인덱스라고 생각하고 count. index => 해당 index를 config 
		int n = data.length;				// 데이터의 범위 만큼 배열이 필요. ex) 원소 100이지만 범위 0~1억이면 배열은 1억만큼의 배열 크기 필요.
		int[] temp = new int[n];			// 범위는 적지만 데이터는 많을 때 사용.
		
		int max = Integer.MIN_VALUE;
//		step1. max값 찾기 및 카운트 배열 생성
		for (int i : data) {
			max = Math.max(max, i);
		}
		
		int[] counts = new int[max+1];		//자바의 배열이 0부터 시작하므로 데이터를 index로 사용해서 max+1개의 배열을 생성한다.
//		step2. 데이타 개수 세기
		for (int i : data) {
			counts[i]++;					// 데이터가 counts 배열의 index가 된다. counts[데이터]를 누적한다.
		}
		
//		step3. count 배열에 값을 누적하기 - 앞의 값과 현재 값을 더해서 현재 index에 누적
		for (int i = 1; i <= max; i++) {
			counts[i] += counts[i-1];
		}
//		System.out.println(Arrays.toString(counts));
//		step4. 데이타 배열과 count 배열을 이용해서 정렬하기 
		int idx = -1;
		int d;
		//데이타 배열의 맨 끝에 있는 데이타 부터  정렬하기 
		for (int i = n-1; i >= 0; i--) {
			d = data[i];
			// idx = --counts[d];	// 자바의 배열을 0부터 시작하므로  -1해서 배열에 저장
			// temp[idx] = data[i];
			idx = --counts[d];		// 원소 하나를 정렬해 놨기 때문에 counts 배열에 1개 줄었음을 표시
			temp[idx] = data[i];
		}
		System.out.println(Arrays.toString(temp));
	}
}

















