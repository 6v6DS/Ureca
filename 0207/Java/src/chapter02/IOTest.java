package chapter02;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.InputStreamReader;

public class IOTest {
    public static void main(String[] args) throws Exception{

        /*
         * System.in    : keyboard로 부터 입력
         */
        //BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        /*
         * file 로부터 입력 받기
         */
        BufferedReader br = new BufferedReader(new FileReader("input.txt"));
        String line = br.readLine(); // 라인 별로 읽기

        System.out.println(line);
    }
}
