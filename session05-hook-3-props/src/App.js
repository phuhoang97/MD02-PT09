import "./App.css";
import IndexColor from "./components/LiftingStateUp/IndexColor";
import TH01 from "./components/ThucHanh/TH01";
import TH02 from "./components/ThucHanh/TH02";
import ParentComponent from "./components/propsReact/ParentComponent";

function App() {
  return (
    <div className='App'>
      {/* <ParentComponent /> */}
      {/* Thực hành */}
      {/* <TH01 />

      <TH02 /> */}

      {/* Lifting State Up */}
      <IndexColor />
    </div>
  );
}

export default App;
