const TodoItem = ({ ItemProps, setTodos }) => {

    const handleChange = (id) => {
        setTodos(
            (prevState) => prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })
        );
    };

    return(
        <>
            <li>
                <input type="checkbox" checked={ItemProps.completed} onChange={() =>handleChange(ItemProps.id)} />
                {ItemProps.title}
            </li>
        </>
    );
};

export default TodoItem;