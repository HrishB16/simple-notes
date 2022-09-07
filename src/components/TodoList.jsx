import React, { useState,useEffect } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList(props) {

    //Integrating into localStorage and retrieving from it
    const [todos, setTodos] = useState(localStorage.todos ? JSON.parse(localStorage.todos) : [])
    
    // using setItem of LocalStorage 
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    // On submitting the todo it adds it checking if even there is any text or not
    const addTodo = e => {
        if (!e.text || /^\*$/.test(e.text)) {
            return;
        }
        const newTodos = [e, ...todos]

        setTodos(newTodos);
        props.showAlert("Task added","success")
    }

    //Deleting a note by matching ids and high order fuunction i.e. filter()
    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
        props.showAlert("Task deleted","warning")
    }

    //Updating any changes in a note and first lines are to check if just empty space is entered (regex)
    const updateTodo = (todoId, newValue) =>{
        if (!newValue.text || /^\*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    // If item is pressed it is marked complete and reduced opacity
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })

        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What's on plan today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo} 
                updateTodo={updateTodo} />
        </div>

    )
}

export default TodoList