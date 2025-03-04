-- 부서별   사원수,  급여 평균, 커미션을 받는 사원 수를 조회 하시오
select empno, count(empno), round(avg(sal), 2), count(comm)
from emp
where empno is not null		-- null 인 곳 제거
group by empno;

-- 업무별   평균 급여, 최저 급여, 최고 급여를 조회 하시오
select ifnull(job, '미분류') as job, round(avg(sal), 2), min(sal), max(sal)
from emp
group by job;

-- 부서별, 업무별 통계  : 사원수,  급여 평균, 커미션을 받는 사원 수를 조회 하시오
select deptno, count(ename), round(avg(sal), 2), count(comm)
from emp
group by deptno;

select job, count(ename), round(avg(sal), 2), count(comm)
from emp
group by job;

-- 부서별 총 급여가 10000이하인 부서의 총 사원수, 총 급여를 조회
select ifnull(deptno, '미분류'), count(ename), sum(sal) as TotalSal
from emp
group by deptno
having sum(sal) < 10000;

-- 부서별 총 급여를 조회,  급여가 1000이상인 사원들의 급여 합계를 구함.
select deptno, sal, if(sal >= 1000, sum(sal), '1000이 아닙니다')
from emp
group by deptno;


-- 상품별 수량이 10개 초과인 제품에 대해 상품별 총 판매 수량 조회
select * from goods group by cno;


-- 건당 판매 수량이 2개 이상인 판매 건수를 상품별 조회


