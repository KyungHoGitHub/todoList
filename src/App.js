import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";

function App() {
  return (
      <div className="App">
          <Header/>
          <TodoEditor/>
          <div>todo list</div>
      </div>
  );
}

export default App;
