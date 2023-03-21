
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

  let [todo,setTodo] = useState("");
  let [todos,setTodos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if(todo === ""){
        return
    }
    setTodos((currentArray) =>[todo, ...currentArray])
    setTodo("");
    
  } 
  const onChange = (e) => {
    setTodo(e.target.value)
    console.log(todo)
  }
  return (
    <div className="App">
      <h1>투두리스트 만들기</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='목표 입력' onChange={onChange} value={todo}/>
          <button>설정하기</button>
      </form>
      <ul>
        {todos.map((item,index)=><li key={index}>{item}</li>)}
      
      </ul>
        
     </div>
    
    );
  }

export default App;
