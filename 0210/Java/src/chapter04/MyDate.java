package chapter04;

import java.util.Calendar;

/**
 * modifier(제어자)
 * 
 * access modifier		public 	protected	생략(default)	private
 * usage  modifier		abstract	static	final
 * 
 * access modifier	: 클래스, 메서드, 속성에 대한 접근을 제한한다.
 * 		public 		: 접근 제한이 전혀 없다.                                                         (웬만하면 수정하지 않을 때.)
 * 		protected	: 상속 관계에서는 제한이 없다. 상속 관계가 아니면 같은 package가 아닌 경우 접근 불가 (거의 수정하지 않음.)
 * 		생략(default): 같은 package가 아닌 경우 접근 불가
 * 		private		: 선언한 클래스 내에서만 접근 가능      (외부에 노출시키고 싶지 않은 것들을 private으로 설정) (대부분의 데이터는 default와 private으로 설정)
 * 		
 * usage  modifier	: 클래스, 메서드, 속성의 기능을 제한한다.
 * 
 * Encalsulation(캡슐화)
 *  - 대부분의 속성과 일부 메소를 private, default(생략), protected를 애용해서 캡슐로 쌓는 기능
 *  - 목적
 *      1. 보호
 *      2. 은닉 ==> decouple 효과 및 유지보수성을 높인다.
 *  - 접근할 수 있는 public한 메서드(getter, setter)를 제공해야 한다.
 */
public class MyDate {
	private int year, month, day;

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        // 보호 기능과 은닉 기능이 목적 (접근을 함수로만)
        if(year<2024) {
            System.out.println("2024년 이후로 설정해 주세요");
        }else{
            this.year = year;
        }
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }
    
}


















