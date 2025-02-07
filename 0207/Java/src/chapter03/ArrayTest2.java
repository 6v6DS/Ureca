package chapter03;

import java.util.Arrays;

/*
 * 다차원 배열
 * 선언시, 접근, 생성   : []차원
 * 
 * 선언 & 생성 & 할당   : {}차원
 */
public class ArrayTest2 {
    public static void main(String[] args) {
                               //행 열
        int[][] array1 = new int[2][3];
                            //열
        int[][] array2 = {{1,2,3} //행
                         ,{3,4,5}};
        int[][] assign1 = array2;               //array2 전체를 assign1에 대입
        for(int i = 0; i < assign1.length; i++){
            System.out.println(Arrays.toString(assign1[i]));
        }
        int[] assign2 = array2[0];              //array2의 0번째 행만 대입
        System.out.println(Arrays.toString(assign2));

        // 자바는 행 마다 다른 열의 개수를 유지할 수 있다.
        int[][] array3 = new int[3][];
        array3[0] = new int[2];
        array3[1] = new int[5];
        array3[2] = new int[1];

        for(int i = 0; i  < array3.length; i++){            // 행 반복
             for(int j = 0; j < array3[i].length; j++){     // 열 반복
                System.out.printf("array3[%d][%d]: %d", i, j, array3[i][j]);
             }
        }

        int[][] a1 = {{1, 2, 3},
                      {1},
                      {3, 4, 5}};
    }
}
