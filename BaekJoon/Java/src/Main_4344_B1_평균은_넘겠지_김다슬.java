import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_4344_B1_평균은_넘겠지_김다슬 {
    public static void main(String[] args) throws Exception {
        // 입력 처리
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 테케수
        int t = Integer.parseInt(br.readLine());
        for (int tc = 0; tc < t; tc++) {
            // 테케별 읽기
            String line = br.readLine();
            StringTokenizer st = new StringTokenizer(line, " ");
            // N 읽고 배열 생성
            int n = Integer.parseInt(st.nextToken());
            int[] scores = new int[n];

            int total = 0;
            // N개의 데이터 읽기
            for(int i = 0; i < scores.length; i++){
                scores[i] = Integer.parseInt(st.nextToken());
                total += scores[i];
            }
            // 평균 계산하기
            double avg = (double)total/n; // 정수형으로 나오기 떄문에 double을 붙여줘야 함.

            int count = 0;
            // 학생 성적이 평균을 넘는지 체크하고 count 세기
            for(int i = 0; i < n; i++){
                if(scores[i] > avg){
                    count++;
                }
            }
            // count / N을 해서 비율 구하기

            // 출력 처리 - 소수 3째 자리까지 출력(반올림)
            System.out.printf("%.3f%%\n", (double)count/n*100); // 포맷팅
        }

    }
}