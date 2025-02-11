package chapter06;

import java.util.Arrays;
import java.util.Comparator;

/*
 * Comparable
 *   - Arrays.sort(객체배열), Collections.sort(Collection)
 *   함수를 통해 정렬할 때 어떤 기준으로 정렬할지 compareTo()로 지정하기 위한 interface
 *   - 정렬하려는 객체의 클래스에서 Comparable를 상속받는다.. 
 *     ex) Employee 객체들을 정렬하기 위해서는 Employee 클래스에 Comparable 선언한다. 
 *     
 * Comparator    
 *   - Arrays.sort(객체배열, Comparator), Collections.sort(Collection, Comparator)
 *   함수를 통해 정렬할 때 어떤 기준으로 정렬할지 compare()로 지정하기 위한 interface
 * 
 *   - sort() 함수의 두번째 인자로 Comparator를 전달한다. 
 *  
 */
public class ComparableTest {
	public static void main(String[] args) {
		Employee[] emps = { 
				new Employee("1", "1", 5),
				new Employee("1", "1", 1),
				new Employee("1", "1", 2),	
		};
		
		Arrays.sort(emps);
		System.out.println(Arrays.toString(emps));
		
	}

}
