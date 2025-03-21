package datastructure;

import java.util.HashSet;
import java.util.TreeSet;

import chapter06.Employee;

/**
 * 
 * Set 
 *  - 동일한 객체를 저장하지 않음  
 *    => 데이타의 유니크성을 보장 
 *  - add(Object o), contains(Object o), remove(Object o)에서 
 *    equals(Object o)와 hashCode()를  호출하여 객체가 같은지 비교한다. -> 주소값이 다르면 다른 값
 *  - 데이타를 저장한 순서대로 저장하지 않는다. 
 *  - index가 없다.  
 *  
 * TreeSet
 *  - set과 동일하게 유니크성을 보장하면서 tree를 이용해서 정렬을 유지한다. 
 *    ==> 정렬시 Comparable interface의 compareTo()를 이용하므로 
 *        저장할 객체에 Comparable interface 구현해야 된다.   
 */
public class SetTest {
	public static void main(String[] args) {
		HashSet<String> set1 = new HashSet<>();
		System.out.println(set1.add("hello"));	//true
		System.out.println(set1.add("hello"));	//false
		System.out.println(set1.add("world"));	//true
		System.out.println(set1.add("uplus"));	//true
		System.out.println(set1);

		HashSet<Employee> set3 = new HashSet<>();
		// 객체 내용만 비교하는 것이 아닌, hashcode를 비교하기 때문에 new로 넣었을 경우
		// hashcode가 달라 둘 다 삽입이 됨.
		System.out.println(set3.add(new Employee("1", "1", 0)));	// true
		System.out.println(set3.add(new Employee("1", "1", 0)));	// true
		System.out.println(set3);

		// hashcode override 후
		Employee emp1 = new Employee("1", "1", 0);
		Employee emp2 = new Employee("1", "1", 0);
		System.out.println("emp1: " + emp1.hashCode());		// override 했다면, 78399
		System.out.println("emp2: " + emp2.hashCode());		// override 했다면, 78399
		System.out.println("emp2==emp1: " + (emp1==emp2));	//false
		
		
		TreeSet<String> set2 = new TreeSet<>();
		System.out.println(set2.add("uplus"));
		System.out.println(set2.add("hello"));
		System.out.println(set2.add("world"));
		
		for (String str : set2) {
			System.out.println(str);		// 정렬이 됨.
		}
	}
}












