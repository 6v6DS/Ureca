import { ColorProvider } from "./store/color";
import SelectColors from "./components/SelectColors";
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <div>
      <ColorProvider>
        <div>
          <SelectColors></SelectColors>
          <ColorBox></ColorBox>
        </div>
      </ColorProvider>
    </div>
  );
};

export default App;
