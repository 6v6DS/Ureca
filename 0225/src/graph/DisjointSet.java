package graph;

import java.util.Arrays;

/**
 * 서로소 집합(Disjoint Set)
 * - 서로소 관계 
 * - 상호 배타 집합들은 서로 중복으로 포함된 원소가 없는 집합들이다. => 두 집합에 교집합이 없는 관계
 * - 집합에 속한 하나의 특정 멤버(대표자 root)를 통해 각 집합들을 구분한다.  
 * 
 *  방법 
 *    1. makeset(x) : x를 원소로 갖는 최소 단위 집합 만들기  => x가 대표자(root)로 만들어 놓자 
 *    2. findset(x) : x원소의 root를 찾는 함수 
 *    3. union(x, y): x의 집합과 y의 집합을 합친다.
 *    	=> x의 root를 찾고 y의 root를 찾아  두 집합 중  
 *         하나의 집합의  root를 한 다른 하나의 집합의 원소로 만든다.
 *    		     
 *  - 서로소 집합 응용 (두 집합에 교집합이 없는 집합)
 *  	- MST(최소 신장 트리)의 크루스칼 알고리즘에 적용
 * 
 * 시간 복잡도
 * 최악의 경우 2N(초기 make 횟수+pathCompression횟수) + 2(루트까지 find하는 횟수)*유니온횟수(E)
 */
public class DisjointSet {
	static int N;
	// 원소의 root(부모)를 담는 배열
	static int[] parents;
	
	/*
	 * 모든 원소들에 대한 초기 값을 설정 하는 함수
	 * - 자기 자신을 root로 설정 한다. 
	 */
	public static void make() {
		for (int i = 0; i < N; i++) {
			parents[i] = i;
		}
	}
	
	/*
	 * 인자로 전달 받은 원소(v)의 root를 찾는 기능
	 */
	public static int find(int v) {
		// root가 v인 경우 , root를 찾았으니 종료료
		if(parents[v] == v) return v;	// 내가 나 자신일 때까지 찾아 올라가야함.

		// 내가 루트가 아닌 부모가 있는 상황이므로 부모의 root를 또 찾으러 가기.
		//return find(parents[v]);		// 문제점 : 편향트리인 경우 시간 복잡도 O(N)

		// path compression : 찾아온 root를 나의 부모로 변경하기한 후 리턴
		// parents[v] = find(parents[v]);
		// return parents[v];

		return parents[v] = find(parents[v]);
	}
	
	
	/*
	 * 인자로 받은 두 원소의 집합이 다른 경우 합치는 기능
	 */
	public static boolean union(int a, int b) {
		// 두 원소의 root를 찾아야 한다.
		int aRoot = find(a);
		int bRoot = find(b);

		// root가 동일한데 union을 하면 cycle이 발생
		if(aRoot == bRoot) return false;

		parents[aRoot] = bRoot;
		return true;
	}
	public static void main(String[] args) {
		N= 6;
		parents = new int [N];
		make();
		union(1, 2);
		System.out.println(Arrays.toString(parents));
		union(3, 4);
		System.out.println(Arrays.toString(parents));
		union(5, 3);
		System.out.println(Arrays.toString(parents));
		union(1, 5);
		System.out.println(Arrays.toString(parents));
		System.out.println(find(1));
		System.out.println(Arrays.toString(parents));
		System.out.println(find(4));
		System.out.println(Arrays.toString(parents));
		// 만약 편향트리라면,
		// find가 안될 때도 있기 떄문에 path 압축을 해도
		// O(N)
		// System.out.println(Arrays.toString(parents));
		// union(0, 1);
		// System.out.println(Arrays.toString(parents));
		// union(1, 2);
		// System.out.println(Arrays.toString(parents));
		// union(2, 3);
		// System.out.println(Arrays.toString(parents));
		// union(3, 4);
		// union(4, 5);
		// find(3);
		// System.out.println(Arrays.toString(parents));
	}
}
