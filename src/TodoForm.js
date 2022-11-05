import React, { useState } from 'react'

const TodoForm = (props) => {
  const [textTodo, setTextTodo] = useState('');
  const handleAdd = () => {
    if (textTodo) {
      props.addTodo(textTodo);
      setTextTodo('')
    }
  }
  return (
    <div>
      <div>
        <input value={textTodo} onChange={(e) => setTextTodo(e.target.value)} />
        <button onClick={() => handleAdd()}>Add Todo</button>
      </div>
    </div>
  )
}

export default TodoForm