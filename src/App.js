import "./App.css";
import { User } from "./User";

function App() {
  const users = [
    { name: "Zakiah", age: 21 },
    { name: "Baem", age: 40 },
    { name: "Inara", age: 2 },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
