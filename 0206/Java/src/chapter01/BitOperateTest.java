package chapter01;

public class BitOperateTest{

    public static void main(String[] args){
        int d = 10;     //10진수
        int b = 0b1000;  //2진수 00 01 10 11 100 101 110 111 1000(8) 1001(9) 1010(10) 128=1000000
        int o = 010;    //8진수
        int h = 0x10;   //16진수
        System.out.println(b);
        System.out.println(o);
        System.out.println(h);

        // &    and : 연산하려는 두 비트가 모두 1일 때 1이고 나머지는 0
        //          : 특정 위치에 1이 있는지 체크 용도로 사용. data & 0 => 0으로 초기화하는 효과 
        int a1 = 0b1000;
        int b1 = 0b0010;
        int c1 = 0b1110;

        System.out.println(Integer.toBinaryString(a1&b1));
        System.out.println(Integer.toBinaryString(a1&c1));
        System.out.println(Integer.toBinaryString(b1&c1));

        // a b c d e f g
        int key = 0b1010010;
        int word1 = 0b1110010;
        int word2 = 0b1110100;
        System.out.println(Integer.toBinaryString(key&word1));
        System.out.println((key&word1) == key);
        System.out.println((key&word2) == key);

        /*
         * shift : 비트를 이동시키는 연산자
         * data << 이동시킬_비트_수      지정한 수 만큼 왼쪽으로 이동
         *                              2^n 만큼 곱하는 효과
         * data >> 이동시킬_비트_수      지정한 수 만큼 오른쪽으로 이동
         *                              2^n 만큼 나누는 효과
         * 2^n 만큼 곱하는 효과, 나누는 효과가 됨
         */




        // |    or : 두 비트가 모두 0일 때만 0, 나머지는 1
        //         : 특정 위치에 1을 채우는 효과

        System.out.println(Integer.toBinaryString(a1|b1));
        System.out.println(Integer.toBinaryString(a1|c1));
        System.out.println(Integer.toBinaryString(b1|c1));

        //               abcdefgh
        System.out.println(b<<2);
        System.out.println(b>>2);
        int checkbit = 0b10000000; // a에 1을 쓴 것.

        //^(xor)    : 두 비트가 같으면 0 다르면 1 ==> 토글 효과
        int pw =   0b11001101;
        int salt = 0b10110011; //01111110
        int encoding = pw ^ salt; // 11001101
        System.out.println(Integer.toBinaryString(encoding));
        System.out.println(Integer.toBinaryString(encoding^salt));

        //~ 비트 반전
        int p = 0b1100;
        System.out.println(~p);
        System.out.println(Integer.toBinaryString(~p));  //1의 보수 0011

        int p2 = -12;
        System.out.println(Integer.toBinaryString(p2)); //2의 보수 0100
        System.out.println(Integer.toBinaryString(~p2)); //1011
    }
}