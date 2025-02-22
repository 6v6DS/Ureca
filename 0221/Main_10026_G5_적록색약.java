import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Arrays;

/**
 * - map을 구역 나누기 문제 
 *   - 같은 구역인 경우 count세기 
 *   - 모든 노드를 1번씩만 탐색하기 때문에 dfs, bfs 모두 가능 
 *   - 전체 맵을 반복하면서 
 *     방문하지 않은 노드라면 그 노드 부터 같은 구역인지 (dfs, bfs) 탐색하기 
 *     
 * - 적녹색약
 *   1. 비적녹색약인을 위한 버전으로 구역 탐색하고 
 *   2. 적녹색약인을 위해 visits 초기화 하고
 *      map의 정보를 G->R로 바꾸거나 R->G으로 바꾼후 구역 탐색하기 
 */
public class Main_10026_G5_적록색약 {
	static int N;
    static char map[][];
    static boolean visits[][];
    static int dr[] = {-1,0,0,1};
    static int dc[] = {0,1,-1,0};
 
    public static void main(String args[]) throws Exception{
 
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(in.readLine());
        map = new char[N][N];
        visits = new boolean[N][N];
 
        for (int i=0; i<N; i++){
            //toCharArray(): 문자열을 문자 배열로 변환하는 함수
        	map[i] = in.readLine().toCharArray();
        }
        int dltonism = 0, nonDltonism = 0;

        //비적녹색약인을 위한 구획 탐색
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if(!visits[i][j]) { //방문하지 않은 노드는 새로운 구역
                    // dfs(i, j);
                    // cnt++;
                    bfs(i, j, map[i][j]);
                    nonDltonism++; // 새로운 구역이므로 카운트 증가
                }
            }
        }

        //적녹색약인을 위한 탐색
        //visits 초기화
        // visits = new boolean[N][N];
        for (int i = 0; i < N; i++) { //얘가 위처럼 새로 생성하는 것보다 조금 더 빠름
            Arrays.fill(visits[i], false);
        }

        //G->R 또는.. R->G 변경
        for(int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                //'R'->'G'로 변경해도 상관 없음
                if(map[i][j] == 'G') {
                    map[i][j] = 'R';
                }
            }
        }

        //구획 탐색
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if(!visits[i][j]) { //방문하지 않은 노드는 새로운 구역
                    // dfs(i, j);
                    // cnt++;
                    bfs(i, j, map[i][j]);
                    dltonism++;
                }
            }
        }

        //결과 출력
        System.out.println(nonDltonism + " " + dltonism);
    }
 
    // //DFS
    // public static void dfs(int r, int c ){
    //     visits[r][c] = true;
    //     char color = map[r][c];

    //     for (int i = 0; i < dc.length; i++) {
    //         int nr = r + dr[i];
    //         int nc = c + dc[i];

    //         //경계 검사
    //         if(nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
            
    //         //방문 하지 않았고, 현재 노드와 같은 색이라면 같은 구역이니까.. 추가 탐색
    //         if(!visits[nr][nc] && map[nr][nc] == color) {
    //             dfs(nr, nc);
    //         }   
    //     }
    // }

    //BFS (color는 비교할 기준 색깔)
    public static void bfs(int r, int c, char color) {
        //너비를 우선으로 탐색하기 위한 Queue 선언
        Queue<int[]> q = new ArrayDeque<>();

        //첫 노드 방문 처리 및 큐에 삽입(좌표 저장해야 함)
        visits[r][c] = true;
        q.offer(new int[]{r, c});

        //Queue에 더 이상 노드가 없을 때까지 탐색
        while(!q.isEmpty()) {
            //탐색할 노드를 Queue에서 추출
            int[] pos = q.poll();
            int currRow = pos[0], currCol = pos[1];

            //사방을 탐색 (조건을 만족하는 인접 칸들은 다 집어 넣는다)
            for (int i = 0; i < dc.length; i++) {
                int nc = currCol + dc[i];
                int nr = currRow + dr[i];

                //경계 검사
                if(nc < 0 || nc >= N || nr < 0 || nr >= N) continue;

                //방문한 적 없고, 인접한 곳이 같은 색깔인 경우
                if(!visits[nr][nc] && map[nr][nc] == color) {
                    visits[nr][nc] = true;
                    q.offer(new int[]{nr, nc});
                }
            }
        }
    }
}
