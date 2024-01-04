const TodoItem = ({ ItemProps, handleChange }) => {
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