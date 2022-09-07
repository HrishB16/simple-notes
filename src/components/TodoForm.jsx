import React , {useState,useEffect, useRef} from 'react'
import { v4 as uuid } from 'uuid' ;

function TodoForm(props) {

    const [input, setInput] = useState('')
    const inputRef = useRef(null);
    const unique_id= uuid();

    useEffect(() => {
      inputRef.current.focus();
    })
    

    const handleChange = e =>{
      setInput(e.target.value)
    }

    const handleSubmit = e =>{
      e.preventDefault();

      props.onSubmit({
         id:{unique_id},
         text: input
      })

      setInput('')
    }

  return (
     
     <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ?(
       <>
       <input 
        type="text"
        placeholder= "Update item"
        value={input}
        name="text"
        autoComplete='off'
        onChange={handleChange}
        ref={inputRef}
        className='todo-input' />
        <button className="todo-button">Update task</button>
       </> 
       ) : (
       <>
        <input 
        type="text"
        placeholder= "Add a note"
        value={input}
        name="text"
        autoComplete='off'
        onChange={handleChange}
        ref={inputRef}
        className='todo-input' />
        <button className="todo-button">Add a todo</button>
       </>
        )}
       
     </form>
     
  )
}

export default TodoForm