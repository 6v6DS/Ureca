import "./App.css";
import styled from "styled-components";

/*
1. 일반적인 형식
형식] 
styled.tag명`
  css
`
2. &

3. 동적 스타일링 - props 사용하기 
 <tag명   속성명>
 styled.tag명`
${(props)=>()}
`

4. 반응형
styled.tag명`
 @media(max-width:xxx){
 }
`

5. Custom Component style
const StyledMyButton = styled(custom)`
	css
`
*/

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  color: white;
  padding: 20px, 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }
`;

// const Button = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 20px, 20px;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

function App() {
  return (
    <div>
      <button>default 버튼</button>
      <button primary>Primary 버튼</button>
    </div>
  );
}

export default App;
