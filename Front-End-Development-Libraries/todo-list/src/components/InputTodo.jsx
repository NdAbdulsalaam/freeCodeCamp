import { useState } from "react";

const InputTodo = ({ addNewTodo }) => {

        const [todo, setTodo] = useState('')
        const [message, setMessage] = useState('')

        const handleChange = (e) => {
            setTodo(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (todo.trim()) {
                addNewTodo(todo);
                setTodo('');
                setMessage('');
            } else {
                setMessage('Please add item');
            }
        }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} placeholder="Add Todo..." onChange={handleChange} />

                <button>Submit</button>
            </form>
            <span>{message}</span>
        </>
    );
}

export default InputTodo;