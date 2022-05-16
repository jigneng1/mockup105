import './App.css';
import Header from './components/Header';
import Main from './components/Maincomponent';
import Todo from './components/Todo';
import {
    Routes,
    Route,
  } from "react-router-dom";

function App() {
  return (
      <div className='App'>
          <Header />
          <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/todo" element={<Todo />} />
          </Routes>
      </div>
  );
}

export default App;
