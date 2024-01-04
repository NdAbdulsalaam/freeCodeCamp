import { useState } from "react";

const InputTodo = () => {

        const [todo, setTodo] = useState('')

        const handleChange = (e) => {
            setTodo(e.target.value);
        };

    return(
        <>
            <form>
                <input type="text" value={todo} placeholder="Add Todo..." onChange={handleChange} />

                <button>Submit</button>
            </form>
        </>
    );
}

export default InputTodo;