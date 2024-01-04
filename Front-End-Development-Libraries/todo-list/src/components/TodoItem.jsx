const TodoItem = ({ ItemProps, handleChange, delTodo }) => {
    return(
        <>
            <li>
                <input type="checkbox" checked={ItemProps.completed}
                onChange={() =>handleChange(ItemProps.id)} />
                {ItemProps.title}
                <button onClick={() => delTodo(ItemProps.id)}>Delete</button>
            </li>
        </>
    );
};

export default TodoItem;