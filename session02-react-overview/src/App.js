import "./App.css";
import Ex01 from "./components/Ex01";
import Ex02 from "./components/Ex02";
import HomePage from "./components/RaStore/HomePage";

function App() {
  const userName = "Rikkei Academy";
  // const number = 10;
  // const arr = [1, 3, 5, 7];
  return (
    <div>
      {/* <h1>Hello World !!!</h1> */}

      {/* JSX - Phép nội suy */}
      {/* <p
        className='text-content'
        style={{ color: "black", backgroundColor: "pink" }}
      >
        Hello {userName}!!!
      </p> */}

      {/* <div /> */}

      {/* Cách sử dụng jsx

      class => className

      Đối với CSS:
        + Viết trực tiếp: style={{}}
        + Khi background-color => backgroundColor

      Đối với các sự kiện:
        + onclick => onClick
        + onchange => onChange
      */}

      {/* Gọi component Ex01 để hiển thị ra ngoài */}
      {/* <Ex01 />

      <Ex02 /> */}

      <HomePage />
    </div>
  );
}

export default App;
