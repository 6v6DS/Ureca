package chapter01;

public class Test {
	public static void main(String[] args) {
 //print(data):명령창에 출력, 엔터 없이 옆으로 이어서 출
		System.out.print("hello");
		System.out.print("world");
		System.out.print("잘해봅시");
		
		//println(data) : 명령창에 출력 후 엔터까지
		//window: \n\r				linux, unix : \r
		System.out.println("hello");
		System.out.println("world");
		System.out.println("잘해봅시");
		/*
		 *printf(format, data)
		 *%d: 정수
		 *%f: 실수             %.2f(소수 두자리까지 출력)
		 %s: 문자열
		 %c: 문자
		 %b: 논리
		 %n: new line(엔터효과)
		 */
		
		
		System.out.printf("안녕하세요 저는 %s이고 나이는 %d입니다.","uplus",2);
		
		double pi = 3.141592;
		System.out.printf("PI : %.3f%n",pi);
		
		//문자열 + anytype, anyType+문자열  => 문자열이된다.
	
		String name="kdg";
		int age = 17;
		System.out.println("제 이름은 "+name+" age:"+age);
		
		/*
		 * 문자열은 변경할 수 없다.
		 * 그래서 + 연산을 하면 기존의 객체를 버리고 새로 생성한다. <= 성능 저하 원인
         * 
         *  StringBuilder를 이용한다.
		 */
	}
}