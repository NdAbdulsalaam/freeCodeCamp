import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';

const TodoItem = ({ ItemProps, handleChange, delTodo }) => {

    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(true);
    }

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

    return(
        <li className={styles.item}>
            <div className={styles.content}>
                <input type="checkbox" checked={ItemProps.completed}
                onChange={() =>handleChange(ItemProps.id)} />
                 <span style={ItemProps.completed ? completedStyle : null}>
                    {ItemProps.title}
                </span>

                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => delTodo(ItemProps.id)}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;