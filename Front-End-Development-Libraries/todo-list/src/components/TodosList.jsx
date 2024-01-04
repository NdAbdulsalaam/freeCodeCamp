import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps, handleChange, delTodo }) => {
    return(
        <ul>
            {
                todosProps.map((todo) => (
                <TodoItem key={todo.id} ItemProps={todo} handleChange={handleChange} delTodo={delTodo} />
                ))
            }
        </ul>
    );
};

export default TodosList;