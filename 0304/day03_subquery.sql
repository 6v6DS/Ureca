/* SubQuery
   - Query문 내에 작성하는 Query를 SubQuery라고한다.
   - 기본적으로 외부 Query가 수행되기 전에 SubQuery가 먼저 수행되고 그결과를 
     외부 Query에서 사용한다. 
     단, 상호 연관 쿼리는 외부 Query한행에 대해 SubQuery가 수행되므로
         SubQuery는 외부 Query의 행 수만큼 수행된다. 
   - 종류
     - where절에서 사용하는 단일행, 다중행, 다중열, 상호 연관 subquery
     - from절에서 사용하는 inline view
     - 스칼라 서브쿼리(단일행, 단일열)로 조회되는 sub query
   - sub query가 사용되는 위치 
     select절, from절, where절, having절, order절       => group by절 빼고 
     create table문, insert문, update문, delete문

   - 규칙
     sub query를 작성시 ()내에 작성해야 한다. 
 */
 
/*
  select절의 sub query(스칼라 서브쿼리)
  - outer join한것과 같은 효과 
*/
-- 사원번호, 이름, 급여, 부서번호, 부서명을 조회 
-- join --
select empno, ename, sal, deptno, dname, loc
from   emp
left join dept
using  (deptno);

-- sub query --
select empno, ename, sal, deptno,
	   (select dname from dept d  where e.deptno = d.deptno)
       as denames,
       (select loc from dept d  where e.deptno = d.deptno)
       as loc
from   emp e;

-- 상품 번호, 상품명, 가격, 제조사, 카테고리번호, 카테고리명을 조회 
 select gno, brand, price, maker, cno, 
		(select name from category c where g.cno = c.cno) as caName
from	goods g;
 
 /*
   where절 sub Query
   - sub query를 수행한 결과를 where절에서 비교 데이타로 사용 
   - 종류
     단일 행 서브쿼리 
       - 서브 쿼리로 부터 수행된 결과 행이 하나일 때
       - 비교 조건 =, >, >=, <, <=, != 
     다중 행 서브쿼리 
       - 서브 쿼리로 부터 수행된 결과 행이 둘 이상일 때
       - 비교 조건 in, any, all
     다중 열 서브쿼리 
       - 서브 쿼리로 부터 수행된 결과 열이 둘 이상일 때 
     상호 연관 서브쿼리 
       - 외부 질의에서 사용 하는 컬럼을 subquery의 조건으로 사용 
 */
 
-- 단일 행 서브쿼리 
-- 사원번호가 7369인 사원의 업무와 같은 업무를 하는 사원의 모든 조회
 select *
 from	emp
 where	job = (select job from emp where empno = 7369);
 
 select job from emp where empno = 7369;
 
-- 평균 급여보다 많이 받는 사원의 모든 정보를 조회
 select *
 from	emp
 where	sal > (select avg(sal) from emp);
 
 select avg(sal) from emp;
 
-- 업무가 'MANAGER'인 사원들 중 전체 사원의 평균 급여보다 많이 받는 사원들에 대해
-- 사원번호, 업무, 급여를 조회

select 	empno, job, sal
from 	emp
where	job = 'MANAGER'
		and sal > (select avg(sal) from emp) ;

select avg(sal) from emp;
select job from emp where job = 'MANAGER';

-- 사원번호, 업무, 급여, 급여 등급을 조회
select	empno, job, sal, grade
from	emp
join 	salgrade
on   	sal between losal and hisal
where	job = 'MANAGER'
		and sal > (select avg(sal) from emp) ;

-- 전자제품 카테고리에 있는 모든 상품 정보를 조회
select 	*
from	goods
where	cno = (select cno from category where name = '전자제품');

select	*
from	category where name = '전자제품';

/* 다중행 sub qeury
   - in 
     sub query를 통해 조회된 여러 데이타 중 하나와 일치하면 조회된다. 
   - all 
	 >(>=) all  sub query를 통해 조회된 모든 데이타 보다 커야 한다. 
				=> 가장 큰 값 보다 커야한다.
     <(<=) all  sub query를 통해 조회된 모든 데이타 보다 작아야 한다.
				=> 가장 작은 값보다 작아야한다.
   - any
     >(>=) any  sub query를 통해 조회된 데이타 중 하나라도 커야 한다.  
				=> 가장 작은 값보다 커야한다. 
     <(<=) any  sub query를 통해 조회된 데이타 중 하나라도 작아야 한다
				=> 가장 큰값 보다 작아야 한다. 
     = any => in과 같으므로 잘 안씀.
*/

-- in  
-- 부서 번호 10번에 근무하는 사원들과 같은 급여를 받는 사원들을 조회하세요
select sal from emp where deptno = 10;

select	*
from	emp
where	sal in (select sal from emp where deptno = 10);

-- 다음 관리자들이 관리하는 사원들의 모든 정보를 조회.
--  SCOTT, CLARK 
select empno from emp where ename in ('SCOTT', 'CLARK');

select	*
from	emp
where	MGR in (select empno from emp where ename in ('SCOTT', 'CLARK'));

-- 각 부서의 평균 급여들 보다 많이 받는 사원의 정보를 조회
select	*
from	emp
where	sal >= all (select avg(sal) from emp group by deptno);

select avg(sal)from emp group by deptno;
-- 급여 평균 중 가장 낮은 업무의 (업무별)평균 급여보다 많이 받는 사원의 정보를 추출
select	*
from	emp
where	sal > any (select avg(sal) from emp group by job);

select avg(sal) from emp group by job;
-- 각 업무별 평균 급여들 보다 낮게 받는 사원의 정보를 조회 
select	*
from	emp
where	sal < all (select avg(sal) from emp group by job);

select avg(sal) from emp group by job; 
/*
 다중 열 서브쿼리 (pairwise)
 - 서브 쿼리를 통해 조회된 열이 두개 이상인 경우 
 - 조회된 모든열과 일치해야 됨. 
 형식]  where  (컬럼, 컬럼,..) 비교 조건(select 컬럼, 컬럼,.. from ~)
*/
-- ADAMS 사원의 업무와 부서가 같은 사원의 정보를 조회하시오
select	*
from	emp
where	job = (select job from emp where ename = 'ADAMS')
		and deptno = (select deptno from emp where ename = 'ADAMS');

-- 같지만, 서브쿼리를 한 번만 날림. and인 경우에만 가능
select	*
from	emp
where	(job, deptno) = (select job, deptno from emp where ename='ADAMS');


-- ADAMS 사원과 같은 업무이거나 MILLER 사원과 같은 부서인 사원들을 조회
-- or인 경우 따로 서브쿼리를 해줄 수 밖에 없음
select	*
from	emp
where	job = (select job from emp where ename = 'ADAMS')
		or deptno = (select deptno from emp where ename = 'MILLER');

/*
 from 절의 sub query(Inline View)
 - sub query의 수행 결과가 임시 테이블로 사용이 됨. 
*/

-- 사원이 소속된 부서의 평균 급여보다 많이 받는 사원의 정보를 조회
-- 성능이 너무 느림. 하나를 수행할 때마다 서브쿼리를 수행하기 때문에 --
select	*
from	emp e
where	sal > (select avg(sal)
			   from   emp a
               where  e.deptno = a.deptno);
               
select	empno, e.deptno, sal
from	emp e, (select deptno, avg(sal) as deptSal
				from	emp
                group by deptno) d
where	sal > deptSal and e.deptno = d.deptno;

-- 부서별 최저 임금을 받는 사원의 모든 정보를 조회 
select	*
from	emp
join	(select deptno, min(sal) as minSal
		from emp
        group by deptno) j
using	(deptno)
where	sal = minSal;

--
select	*
from	emp e, (select deptno, min(sal) as smallSal
				from   emp
				group by deptno) s
where	sal <= smallSal and e.deptno = s.deptno;
--

-- 사원번호가 7369인 사원의 업무와 같은 업무를 하는 사원의 모든 조회
select *
from emp e, (select job from emp where empno = 7369) s
where e.job = s.job;
 
-- 평균 급여보다 많이 받는 사원의 모든 정보를 조회
select	*
from	emp e, (select avg(sal) as avgSal
				from	emp
				) d
where	sal > avgSal;

-- 판매된적이 있는 상품의 정보를 조회하시오                 

select	*
from	goods o, (select distinct gno > 0 as sellGoods
					from orders) s
where	gno >= sellGoods;

select	distinct gno from orders;

select	*
from	goods
where	gno	in	(select distinct gno from orders);

select	*
from	goods
join	(select distinct gno from orders) o
using	(gno);

-- 판매된 적이 없는 상품 조회는, from 절의 서브쿼리로는 구할 수 없음. --
-- 모두와 일치하지 않아야 하기 때문에 .. where 절에서 서브쿼리로 --
select	*
from	goods
where	gno	not in	(select distinct gno from orders);


              
/*
 N-top 
 mysql : limit  시작숫자,개수
         시작 숫자는 0부터 
 기타   : rownum
		 시작 숫자는 1부터 
 */

-- 급여가 높은 사원 5명 조회 
-- mysql 
select *
from emp
order by sal desc
limit 0, 5;
              
-- oralce , db, ms-sql             
  

-- 급여가 높은 사원 6~10위까지 
-- mysql 



-- oralce , db, ms-sql   
select *          
from  ( select  rownum ro, a.*
		from    (select empno, ename, sal
				 from   emp
				 order  by sal desc) a
	   ) 
where   ro between 6 and 10;
