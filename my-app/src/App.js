import logo from './logo.svg';
import './App.css';
import Board from './Components/Board/Board';

function App() {
  return (
    <div className="App">
     <div className="app_navbar">
      <h2>kanban App</h2>
     </div>
     <div className="app_outer">
      <div className="app_boards">
        <Board/>
        <Board/>
        <Board/>
        <Board/>
      </div>
     </div>
    </div>
  );
}

export default App;
