const TodoItem = ({ ItemProps, setTodos }) => {

    const handleChange = (id) => {
        console.log('clicked', id)
    }

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