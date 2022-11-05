import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import _ from 'lodash';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { TiTickOutline } from 'react-icons/ti'
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    const newTodo = {
      text: text,
      id: id,
      key: id,
      complete: false
    }
    setTodos([newTodo, ...todos])
  }
  const handleDelete = (data) => {
    const map = todos.filter(item => item.id !== data.id);
    setTodos(map)
  }
  const handleComplete = (data) => {
    let find = todos.find(item => item.id === data.id)
    if (find) {
      let count = todos.indexOf(find);
      let _todos = _.cloneDeep(todos);
      _todos[count].complete = !find.complete
      setTodos(_todos)
    }
  }
  return (
    <div className="App">
      <div className='form'>
        <h1 className='title'>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        {todos && todos.length > 0
          ?
          <>
            <div className='todoitem'>
              {todos.map((item, index) => {
                return (
                  <div key={index}>
                    <h4 className={item.complete === true ? 'complete' : ''} style={{ flex: 2 }}>{item.text}</h4>
                    <button style={{ flex: 1 }} onClick={() => handleDelete(item)}><RiDeleteBin6Line /></button>
                    <button style={{ flex: 1 }} onClick={() => handleComplete(item)}><TiTickOutline /></button>
                  </div>
                )
              })}
            </div>
          </>
          :
          <></>
        }
      </div>
    </div>
  );
}

export default App;
