import logo from './logo.svg';
import BoxList from './BoxList';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Color Boxes</h1>
      <BoxList />
      <ToDoList />
    </div>
  );
}

export default App;
