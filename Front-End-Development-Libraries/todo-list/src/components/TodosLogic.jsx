import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

const TodosLogic = () => {
    // Create todos state
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'Setup development environment',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Deploy to live server',
            completed: false,
        },
    ])

    useEffect(
        () => {
            const toSave = JSON.stringify(todos);
            localStorage.setItem('todos', toSave);
        },
    [todos]);

    const handleChange = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) => {
                if (todo.id === id) {
                    return{
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };

    const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            }),
        ])
    }

    const addNewTodo = (todo) => {
        const newTodo = {
            id: uuidv4(),
            title: todo,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    }

    const editTodo = (editedtodo, id) => {
        setTodos(
            todos. map((todo) => {
            if (todo.id === id) {
                todo.title = editedtodo;
            }
            return todo;
        })
        )
    }

    return(
        <>
            <InputTodo addNewTodo={addNewTodo} />
            <TodosList todosProps={todos} handleChange={handleChange}
            delTodo={delTodo} editTodo={editTodo} /> 
        </>
    )
}

export default TodosLogic;