// import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/Navbar'
import Home from './Home'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    // <Navbar>
    <>
      <Home />
      <Navbar title="Demo11" about="About Us"/>
    </>
  );
}

export default App;
