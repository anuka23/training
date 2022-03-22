import { Body } from "./Components/Body/Body";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Header/Navbar";
import GlobalStyle from "./GlobalStyle";


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
