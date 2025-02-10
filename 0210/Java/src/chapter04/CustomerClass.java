package chapter04;

public class CustomerClass {
    public static void main(String[] args){
        /*
         * 객체 선언        클래스명 변수명;
         * 객체 생성        변수명 = new 클래스명([인자]);
         * 객체 접근        변수명.속성명           변수명.함수명
         * 
         * 선언 & 생성
         * 클래스명 변수명 = new  클래스명([인자]);
         */
        // Customer cust1 = new Customer();    // 객체에 접근할 수 있는 주소를 가지고 있는 것. 재사용 하기 위해.
        // cust1.name="UPlus";
        // cust1.age= 2;
        // cust1.address="서초구 선릉역";

        Customer cust1 = new Customer("UPlus", "서초구", 2); // 이때 this는 이 부분을 가리킴.

        System.out.println(cust1.toString());
        System.out.println(new Customer("kdg", "성북구", 37).toString()); // this가 이 부분을 가리킴. this는 항상 현재 사용중인 객체를 가리킨다.
        //System.out.println(new Customer("kdg", "성북구", 37).toString());

        System.out.println(new Customer().toString());  //객체이기 때문에 바로 . 이 가능하다. // 기본값으로 초기화됨. null, null, 0

        Customer cust2 = new Customer("1", "1", 1);
        System.out.println(cust1.equals(cust2));
    }
}
