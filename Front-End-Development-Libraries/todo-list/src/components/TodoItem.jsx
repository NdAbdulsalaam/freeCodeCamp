import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ ItemProps, handleChange, delTodo }) => {
    return(
        <li className={styles.item}>
            <div className={styles.content}>
                <input type="checkbox" checked={ItemProps.completed}
                onChange={() =>handleChange(ItemProps.id)} />
                {ItemProps.title}
                <button onClick={() => delTodo(ItemProps.id)}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;