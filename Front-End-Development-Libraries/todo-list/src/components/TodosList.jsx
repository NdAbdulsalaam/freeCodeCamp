import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps, setTodos }) => {
    return(
        <ul>
            {
                todosProps.map((todo) => (
                <TodoItem key={todo.id} ItemProps={todo} setTodos={setTodos} />
                ))
            }
        </ul>
    );
};

export default TodosList;