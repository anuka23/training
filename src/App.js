import { useStoreState } from "easy-peasy";
import { Body } from "./Components/Body/Body";
import { Loader } from "./Components/Loader";

import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Loader />
      <Body />
    </div>
  );
}

export default App;
