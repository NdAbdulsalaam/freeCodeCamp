import { useState } from "react";

const InputTodo = ({ addNewTodo }) => {

        const [todo, setTodo] = useState('')

        const handleChange = (e) => {
            setTodo(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            addNewTodo(todo)
            setTodo('')
        }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} placeholder="Add Todo..." onChange={handleChange} />

                <button>Submit</button>
            </form>
        </>
    );
}

export default InputTodo;