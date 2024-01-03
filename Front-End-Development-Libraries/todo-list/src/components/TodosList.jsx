import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps }) => {
    return(
        <ul>
            {
                todosProps.map((todo) => (
                <TodoItem ItemProps={todo} />
                ))
            }
        </ul>
    );
};

export default TodosList;