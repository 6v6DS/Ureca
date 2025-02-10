package fillCell;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.StringReader;
import java.util.Scanner;

/**
 * 가로, 세로의 길이가 N인 N x N 정사각 행렬이 있다. 
 * 이 행렬의 각각의 값으로서 0에서 9 사이의 수가 무작위로 넣어진다고 하자. 
 * 이 때 그 행렬 내에서 주위를 둘러싸고 있는 다른 모든 수들 보다 
 * 큰 수와 작은 수가 각각 몇 개인지를 구하는 프로그램을 작성하여라
 * 
 * [제한 조건]
 * 1. N은 3 이상 50 이하의 정수이다.
 * 2. 행렬의 가장자리에 있는 수는 8개의 수로 둘러싸여 있지 않으므로
 *    "주위를 둘러싸고 있는 다른 모든 수들보다 큰 수, 혹은 작은 수"가 될 수 없다.
 * [입력]
 * 입력은 다음과 같이 구성되어 있다.
 * 첫 번째 줄에는 테스트 케이스의 개수 T가 주어진다.
 * 그 다음 T 개의 테스트 케이스가 차례로 주어진다. 
 * 각 테스트 케이스는 다음과 같이 구성 되어 있다. 
 *    첫 줄에 정 사각 행렬의 크기 N이 주어진다. 
 *    그 다음 N 줄에 걸쳐 정 사각 행렬의 각 행의 값이 순서대로 주어진다. 
 * [출력]
 * 각 줄은 #x로 시작하고 (x는 테스트 케이스 번호) 공백을 하나 둔 다음, 
 * 문제에서 요구한 큰 수의 개수, 
 * 그리고 작은 수의 개수를 공백을 두어 차례로 출력한다. 
 *
 * [결과]
 * #1 6 4
 * #2 1 1
 */
public class RandomNumberPattern {
	static int N, Answer1, Answer2;
	public static void main(String[] args) throws FileNotFoundException {
		// System.setIn(new FileInputStream("res/RandomNumberPattern.txt"));
		BufferedReader br = new BufferedReader(new StringReader(input));
		Scanner sc = new Scanner(br);

		int T = sc.nextInt();
		for (int test_case = 1; test_case <=T; test_case++) {
			N = sc.nextInt();
			int matrix[][] = new int[N][N];
			for (int i = 0; i < N; i++) {
				for (int j = 0; j <N; j++) {
					matrix[i][j] = sc.nextInt();
				}
			}
			Answer1 = 0;
			Answer2 = 0;

			// 팔방 검사. 상 하 좌 우 좌상 우상 좌하 우하
			int[] dr = {-1, 1, 0, 0, -1, -1, 1, 1};
			int[] dc = {0, 0, -1, 1, -1, 1, -1, 1};

			// 다음 좌표
			int nr= 0 , nc = 0, d = 8;
			
			for(int r = 0; r < N; r++){
				for(int c = 0; c < N; c++){
					if(matrix[r][c] > matrix[r-1][c-1] && matrix[r][c] > matrix[r+1][c+1]){
						for(int i = 0; i < d; i++){
							nr = r + dr[i];
							nc = c + dc[i];
							//경계 검사
							if(nr > -1 && nr < N && nc > -1 && nc < N && matrix[nr][nc] > matrix[r-1][c-1] && matrix[nr][nc] > matrix[r+1][c-+1]){
								Answer1++;
							}
						}
					}
					if(matrix[r][c] < matrix[r-1][c-1] && matrix[r][c] < matrix[r+1][c+1]){
						for(int i = 0; i < d; i++){
							nr = r + dr[i];
							nc = c + dc[i];
							//경계 검사
							if(nr > -1 && nr < N && nc > -1 && nc < N && matrix[nr][nc] > matrix[r-1][c-1] && matrix[nr][nc] > matrix[r+1][c-+1]){
								Answer1++;
							}
						}
					}
				}
			}
			

			System.out.println("#"+test_case+" "+Answer1+" "+Answer2);
		}
	}
	static String input = "2 \r\n" + //
				"9\r\n" + //
				"9 5 4 4 6 1 3 6 0\r\n" + //
				"7 5 7 9 2 8 3 8 2\r\n" + //
				"0 4 1 6 0 1 4 3 9 \r\n" + //
				"2 8 0 1 7 0 8 3 3\r\n" + //
				"3 4 9 5 5 6 6 1 6\r\n" + //
				"2 3 7 5 1 3 3 5 7\r\n" + //
				"3 4 6 5 8 4 5 5 5\r\n" + //
				"8 7 3 7 7 5 3 6 3\r\n" + //
				"9 9 8 4 2 5 8 2 0\r\n" + //
				"5 \r\n" + //
				"7 1 0 0 8\r\n" + //
				"4 3 6 4 1\r\n" + //
				"2 2 9 0 9\r\n" + //
				"4 8 5 6 7\r\n" + //
				"0 9 1 6 10";
}







