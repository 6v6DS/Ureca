import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  const sum = numbers.reduce((a, b) => {
    console.log("a: ", a, "b: ", b);
    return a + b;
  });
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  /* useMemo(Callback, [state])
  - component 내에서 state에 대한 계산 처리를 할 때 변경됐을 때만
    다시 계산하고 변경되지 않은 경우에는 기존의 값을 재사용
  - 처음에 한 번 수행되고, 
    state가 변했을 때만 callback이 호출되어 다시 계산한다.
  */
  const avg = useMemo(() => getAverage(list), [list]);
  const prevOnChange = useRef();
  const prevOnClick = useRef();

  /*
  useCallback(callback)
    - callback 함수를 재사용
    - 렌더링 성능을 최적화 할 때 사용
    - useCallback( callback, []) : 컴포넌트가 처음 렌더링될 때만 함수를 생성한다.
    - useCallback( callback, [state]) : 지정한 state가 변경될 때만 함수를 생성한다.
  */
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onClick = useCallback(
    (params) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [list, number]
  );
  console.log("onChange:", prevOnChange.current === onChange);
  console.log("onClick:", prevOnClick.current === onClick);
  prevOnChange.current = onChange;
  prevOnClick.current = onClick;

  return (
    <div>
      <input value={number} onChange={onChange}></input>
      <button onClick={onClick}> 등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균값: {avg}</div>
    </div>
  );
};

export default Average;
