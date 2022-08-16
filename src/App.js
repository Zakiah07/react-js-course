import "./App.css";
import { useState } from "react";
// import { User } from "./User";
// import Lists from "./Lists";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const setZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setZero}>Set to Zero</button>
      {count}
    </div>
  );
}

// function App() {
//   const [textColor, setTextColor] = useState("black");

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setTextColor(textColor === "black" ? "blue" : "black");
//         }}
//       >
//         Change Color
//       </button>
//       <h1 style={{ color: textColor }}> Hi I Am Awesome </h1>
//     </div>
//   );
// }

//   const [showText, setShowText] = useState(true);

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setShowText(!showText);
//         }}
//       >
//         Show / Hide
//       </button>
//       {showText && <h1> Hi I Am Awesome </h1>}
//     </div>
//   );
// }

//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange} />
//       {inputValue}
//     </div>
//   );
// }

//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age + 1);
//   };

//   return (
//     <div className="App">
//       {age} <button onClick={increaseAge}>Increase Age</button>
//     </div>
//   );
// }

//   const users = [
//     { name: "Zakiah", age: 21 },
//     { name: "Baem", age: 40 },
//     { name: "Inara", age: 2 },
//   ];

//   return (
//     <div className="App">
//       {users.map((user, key) => {
//         return <User name={user.name} age={user.age} />;
//       })}
//     </div>
//   );
// }

// const App = () => {
//   return <Lists />;
// };

export default App;
