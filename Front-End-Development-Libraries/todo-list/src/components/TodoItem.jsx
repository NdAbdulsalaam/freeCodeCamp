const TodoItem = ({ ItemProps, handleChange }) => {
    return(
        <>
            <li>
                <input type="checkbox" checked={ItemProps.completed} onChange={() =>handleChange(ItemProps.id)} />
                {ItemProps.title}
                <button>Delete</button>
            </li>
        </>
    );
};

export default TodoItem;