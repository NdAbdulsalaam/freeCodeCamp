const TodoItem = ({ ItemProps, setTodos }) => {
    return(
        <>
            <li>
                <input type="checkbox" />
                {ItemProps.title}
            </li>
        </>
    );
};

export default TodoItem;