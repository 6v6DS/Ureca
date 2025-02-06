package chapter01;

public class Test {
    // main 함수: 프로그램의 시작점
    public static void main(String[] args) {
        // print(data):명령창에 출력, 엔터 없이 옆으로 이어서 출
        System.out.print("hello");
        System.out.print("world");
        System.out.print("잘해봅시다");

        // println(data) : 명령창에 출력 후 엔터까지
        // window: \n\r linux, unix : \r
        System.out.println("hello");
        System.out.println("world");
        System.out.println("잘해봅시다");
        /*
         * printf(format, data)
         * %d: 정수
         * %f: 실수 %.2f(소수 두자리까지 출력)
         * %s: 문자열
         * %c: 문자
         * %b: 논리
         * %n: new line(엔터효과)
         */

        System.out.printf("안녕하세요 저는 %s이고 나이는 %d입니다.", "uplus", 2);

        double pi = 3.141592;
        System.out.printf("PI : %.3f%n", pi);

        // 문자열 + anytype, anyType+문자열 => 문자열이된다.

        String name = "kdg";
        int age = 17;
        System.out.println("제 이름은 " + name + " age:" + age); // 위에보다 이게 더 빠름 (프린트 속도)

        /*
         * 문자열은 변경할 수 없다.
         * 그래서 + 연산을 하면 기존의 객체를 버리고 새로 생성한다. <= 성능 저하 원인
         * 
         * 많은 양의 문자열 정보를 새로 생성해서 출력할 경우 StringBuilder 생성
         * StringBuilder를 이용한다.
         */
        StringBuilder sb = new StringBuilder(100); // 배열의 크기가 100인 String Builder 생성.
        // append() : 저장된 내용의 맨 끝에 추가
        sb.append("hello");
        sb.append("world");
        sb.append("java");
        System.out.println(sb);

    }
}