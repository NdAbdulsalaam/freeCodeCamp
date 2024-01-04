const TodoItem = ({ ItemProps }) => {
    return(
        <>
            <input type="checkbox" />
            <li>{ItemProps.title}</li>
        </>
    );
};

export default TodoItem;