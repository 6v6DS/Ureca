-- 상사가 BLAKE인 사원들의 모든 정보를 조회하시오
select *
from emp
where mgr = (select empno from emp where ename in ('BLAKE'));

-- 10번 부서의 평균 급여보다 많이 받는 사원들의 모든 정보를 조회하시오
select *
from emp
where sal > (select avg(sal) from emp where deptno = 10);

-- ADAMS 사원과 같은 업무이면서 MILLER 사원 보다 적은 급여를 받는 사원들의 모든 정보를 조회하시오
select *
from emp
where job = (select job from emp where ename = 'ADAMS')
	  and sal < (select sal from emp where ename = 'MILLER');

-- 태양의 마테차를 구매한 모든 회원정보를 조회하시오.
select *
from orders
where gno in (select gno from goods where gno = 3);

select *
from members
where id in (select distinct id 
			from orders 
            join goods
            using (gno)
            where brand = '태양의 마테차');
            
-- 부하직원이 있는 사원을 조회하시오.
select e.ename
from   emp e, emp m
where  e.mgr = m.empno;

select *
from emp
where empno in (select distinct mgr from emp);

-- 카테고리별 최저 가격인 상품을 조회하시오
select *
from goods
where price = any (select min(price) from goods group by cno);

select *
from goods                        -- cno가 있는 상품들만 조회
join (select cno, min(price) as minPrice from goods group by cno) g
using (cno)
where price = minPrice;


select *
from goods g                      -- cno가 없는 상품도 조회
where price <= all(select price 
					from goods c
					where g.cno = c.cno);

-- 2000년에 입사한 사원들 중 평균 급여보다 적게 받는 사원들의 모든 정보를 조회하시오
select *
from emp
where sal < (select avg(sal) from emp group by job)
	and HIREDATE = (select HIREDATE from emp where HIREDATE > ('2000'));

select *
from emp
where year(hiredate) = 2000 and sal < (select avg(sal) from emp);

-- 30번 부서에 근무하지 않는 사원들 중 평균 급여보다 많이 받는 사원들의 모든 정보를 조회하시오
select *
from emp
where deptno not in (select deptno from emp where deptno = 30)
		and sal > (select avg(sal) from emp);
        
select *
from emp
where deptno != 30 and sal > (select avg(sal) from emp);

-- 평사원(부하직원이 없는)을 조회하시오
select e.ename
from   emp e, emp m
where  e.mgr != m.empno;

select *
from emp
where empno not in (select distinct mgr from emp where mgr is not null);
