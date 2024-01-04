const TodoItem = ({ ItemProps }) => {
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