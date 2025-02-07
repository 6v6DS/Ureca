package chapter02;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class IOTest2 {
    public static void main(String[] args) throws Exception{

        /*
         * System.in은 기본적으로 keyboard로 부터 입력 받지만
         * 다른 대상으로 부터 입력 받을 경우 setIn(입력 받을 대상) 함수로 설정한다.
         */
        // System.setIn(new FileInputStream("./input.txt"));
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedReader br = new BufferedReader(new StringReader(input));
        String line = br.readLine();
        /*
         * split(구분자)    : 구분자를 기준으로 데이터를 분리
         */
        String[] tokens = line.split("");  // 구분자를 제공하지 않았으므로 1개씩 조각낸다
        System.out.println(Arrays.toString(tokens));

        String[] tokens2 = line.split(" ");
        System.out.println(Arrays.toString(tokens2));
        System.out.println(line);

        // 자바에서의 정석
        /*
         * StringTokenizer  : 구분자를 기준으로 데이터를 분리
         * for문을 더 적게 돌기 때문에 성능 향상.
         */
        StringTokenizer st = new StringTokenizer(line, " "); // StringTokenizer(line); 과 같지만 공백을 넣는 것이 성능이 좀 더 빠름
        int n = 5;
        for(int i = 0; i < n; i++){
            System.out.println(Integer.parseInt(st.nextToken())); // 하나씩 잘라줌
        }

        System.out.println(tokens);
    }
    static String input="10 9 8 11 5"; // 구분자 기준으로 자른다 -> 토크나이징
}
