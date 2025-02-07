package chapter03;

import java.io.File;
import java.util.Scanner;

public class IOTest4_scanner {
    public static void main(String[] args) throws Exception{
        // keyboard로부터 읽음
        // Scanner scan = new Scanner(System.in); 

        // 파일로부터 읽음
        // Scanner scan = new Scanner(new File("./input.txt"));

        Scanner scan = new Scanner(input);

        int n = 5;
        for(int i = 0; i < n; i++){
            System.out.println(scan.nextInt());
        }
    }
    static String input="10 9 8 11 5"; // main method 바깥에 있는 거에는 static을 붙여야 함
}
