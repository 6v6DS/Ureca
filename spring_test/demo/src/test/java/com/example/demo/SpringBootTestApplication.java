package com.example.demo;

// import static org.junit.jupiter.api.Assertions.assertNotNull;
// import javax.sql.DataSource;
// import org.junit.jupiter.api.Test;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.context.annotation.ComponentScan;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import javax.sql.DataSource;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
@SpringBootTest(
		properties = {"spring.config.location=classpath:application.properties"}
		)
@ComponentScan(basePackages = {"com.example.demo"})
class SpringBootTestApplicationTests {
	//Logger,LoggerFactory는 slf4j를 선택
	private Logger log = LoggerFactory.getLogger(getClass());
	
	//DB연결테스트
	@Autowired
	//DataSource는 javax.sql를 선택
	private DataSource ds;
	
	@Test
	public void dsTest() {
		//null 인지 체크해주는 단정 함수
		assertNotNull(ds);
        log.debug("성공했습니다{}", ds);
		log.debug("성공했습니다111{}", ds);
		log.debug("성공했습니다222{}", ds);
		log.debug("성공했습니다333{}", ds);
		log.debug("성공했습니다444{}", ds);
		log.debug("성공했습니다555{}", ds);

		// 추가적으로 조건을 검증하는 코드
        assertNotNull(ds, "DataSource가 null입니다.");  // 실패하면 메시지 출력

	}
}
