import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DemoBootstrap from "./components/DemoBootstrap";
import DemoAntd from "./components/DemoAntd";
import DemoValidateForm from "./components/DemoValidateForm";

function App() {
  return (
    <div className='App'>
      {/* <DemoBootstrap /> */}
      {/* Antd */}
      {/* <DemoAntd /> */}
      <DemoValidateForm />
    </div>
  );
}

export default App;
