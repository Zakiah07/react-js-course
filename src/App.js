import "./App.css";

// function App() {
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

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planets.map(
        // (planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>
        // if not gas planet
        (planet, key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
      )}
    </div>
  );
}

export default App;
