package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter

@Getter

@RestController
@SpringBootApplication
public class DemoApplication {
   public static void main(String[] args) {
      SpringApplication.run(DemoApplication.class, args);

      /*
       * printf(format, data)
       * 
       * %d : 정수
       * %f : 실수
       * %s : 문자열
       * %c : 문자
       * %b : 논리
       * %n : new line(엔터 효과)
       */

      System.out.printf("안녕하세요 저는 %s 이고 나이는 %d 입니다. %n", "uplus", 2);
   }

   @GetMapping(value = "/")
   public String HelloWorld() {
      return "Hello World";

   }

}
