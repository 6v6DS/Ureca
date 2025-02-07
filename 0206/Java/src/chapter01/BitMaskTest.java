package chapter01;

public class BitMaskTest {
  public static void main(String[] args) {
    /*
     * Bit Mask
     * - 기존의 bit를 &, |, ^, <<, >>를 이용해서 다른 값으로 변경(masking)하는 작업
     * 
     * int a = 0b1000;
     * int b = 0b0010;
     * 
     * a &= b; //0000 1이었던 비트가 0으로 masking 됨.
     * a |= b; //1010 0이었던 비트가 1로 masking 됨.
     * 
     * - 정수의 이진수 표현을 자료 구조로 쓰는 기법 => boolean 배열을 대체하는 효과
     * - 보통 어떤 비트가 1이면 '켜져 있다, true, 해당 위치에 원소가 있다.'
     * - 보통 어떤 비트가 0이면 '꺼져 있다, false, 해당 위치에 원소가 없다.'
     * 
     * - 장점
     * 1. 수행 시간이 빠르다.
     * 비트 마스크 연산은 bit 연산 (&, |, ^, ~)이므로 O(1)로 구현되는 것이 많다.
     * => 다른 자료 구조(boolean 배열)을 이용하는 것보다 빠르게 동작된다.
     * ex) 10만개의 word에 a k g가 있는지 check
     * --------------------------------------------------------------------
     * boolean 배열
     * 10만 * word의 크기 => O(n * word 크기)
     * 
     * int result = 0;
     * for(int i = 0; i < 10만; i++){
     * int count = 0;
     * for(int j = 0, size = word.length(); j < size; j++){
     * if(word.charAt(j) == 'a' || word.charAt(j) == 'k' ||
     * word.charAt(j) == 'g'){
     * count++;
     * }
     * }
     * if (count == 3) {
     * result++;
     * }
     * }
     * ---------------------------------------------------------------------
     * bitmask를 이용하면 10만으로 성능을 높일 수 있다. => O(n)
     * int result = 0;
     * for(let i = 0; i < 10만; i++){
     * if(word & key == key){
     * result++;
     * }
     * }
     * 
     * 2. 코드를 줄일 수 있다. (코드가 짧다)
     * boolean 배열을 모두 순회해서 체크하는 코드가
     * bit연산 하나로 대체 될 수 있으므로 코드가 간결해 진다.
     * 
     * 3. 메모리 사용량이 적다.
     * ex) 문이 잠긴 행, 열로 구성된 map에서 key(a, b, c, d, e, f)를 이용해서
     * 문을 열어야 도착점으로 탈출 할 수 있는 경우 방문 체크 배열
     * [행][열][a][b][c][d][e][f] 배열 선언 // 8차원 필요
     * 
     * bitmask 사용시
     * [행][열][key] // 3차원 배열
     * 
     * 
     * 
     */

    /*
     * 1. 공집합과 꽉 찬 집합 구하기
     * A = 0; // 32 개의 원소가 모두 0이므로
     * n = 10; // 10 개인 원소
     * A = (1<<n);
     * 
     * 0000000001 << 10 == > 10000000000
     * 10000000000 - 1 = 1111111111
     */
    int n = 10;
    int A = (1 << n) - 1; // 0000000001 -> 10000000000 - 1 을 하면 모두 1로 채워짐 = 1111111111
    System.out.println(Integer.toBinaryString(A));

    /*
     * 2. 특정 위치에 1이 있는지 check로 & 사용
     */
    // & and : 연산하려는 두 비트가 모두 1일 때 1이고 나머지는 0
    // : 특정 위치에 1이 있는지 체크 용도로 사용. data & 0 => 0으로 초기화하는 효과

    int a1 = 0b1000;
    int b1 = 0b0010;
    int c1 = 0b1110;

    System.out.println(Integer.toBinaryString(a1 & b1));
    System.out.println(Integer.toBinaryString(a1 & c1));
    System.out.println(Integer.toBinaryString(b1 & c1));

    /*
     * 3.원소 추가 : k번째 위치에 원소를 추가(1로 마스킹)하기
     * A |= (1<<k)
     * 
     * k번째는 뒤에서 부터 세기 (0번째 부터~)
     */
    A = 0;
    int k = 5;
    A |= (1 << k);
    System.out.println(Integer.toBinaryString(A));
    // 01 10 11 100 101

    /*
     * 4. 원소 삭제
     * k번째의 위치에 있는 원소를 삭제(0)
     * A &= ~(1<<k)
     */
    A &= ~(1 << k);
    System.out.println(Integer.toBinaryString(A)); // A 100000 -> 000000 (다 0이 됨)
    // 원하는 위치를 삭제하고 싶으면 A &= ~(1<<k) 걔만 1이 남고 나머지 다 0
    // -> 이거 좀 더 보충하기 제대로 이해 X. 100100 011111-> 000100

    /*
     * 5. 마지막 1의 위치 찾기
     * A &- A : A의 인지수에서 1의 마지막 위치를 찾기
     */
    A = 0b1100111000; // 알고 싶은 것은 앞에서부터 마지막에 있는 1, 뒤에서부터 첫번째 1임. 110011[1]000
    // 비트반전 0011000111 + 1 = 0011001000 // 2의 보수 특징 ) 마지막 1부터는 그대로 내려옴.
    // 0011001000이 됨.
    // 1100111000 0011001000 => 0000001000 결국 1의 위치가 나타남.

    // 기술 면접에서, 마지막 1의 위치를 찾는 이유? -> 물어볼 수 있음.

    System.out.println(Integer.toBinaryString(A)); // 1100111000
    System.out.println(Integer.toBinaryString(A & -A)); // 1000 위치를 찾아줬음.

    int m = 0b11010;
    System.out.println(Integer.toBinaryString(m));
    System.out.println(Integer.toBinaryString(m & -m));


    /*
     * 6. 최소 원소 지우기 => 모든 부분 집한 순회에 응용
     * A & (A - 1)
     */
    System.out.println("A:" + Integer.toBinaryString(A));
    System.out.println("A:" + Integer.toBinaryString(A & (A-1)));
    // 110011[1000] - 1 = 110011[0111]-> 0000
    // 1100111000 -> 1100110000

    String[] str = {"a", "b", "c", "d"};
    
    /*
     * 7. 모든 부분 집합 순회하기
     */
    System.out.println("부분 집합 출력");
    int s = 0b1101;
    for (int subset = s; subset != 0; subset = (subset-1)&s){
      System.out.println(Integer.toBinaryString(subset));
    }
    /* 현재 있는 것의 모든 부분 집합을 출력하고 있음.
     * 1101
     * 1100
     * 1001
     * 1000
     * 101
     * 100
     * 1
     */
  }
}