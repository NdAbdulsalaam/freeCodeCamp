import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';

const TodoItem = ({ ItemProps, handleChange, delTodo, editTodo }) => {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

    const [edit, setEdit] = useState(false);

    const editMode = {};
    const viewMode = {};

    if (edit) {
        viewMode.display = 'none'
    } else {
        editMode.display = 'none'
    }

      const handleEdit = () => {
        setEdit(true);
    }

    const handleEdited= (e) => {
        return editTodo(e.target.value, ItemProps.id)
    }

    const handleEditedDone = (event) => {
        if (event.key === 'Enter') {
            setEdit(false);
        }
    }

    return(
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input type="checkbox" checked={ItemProps.completed}
                onChange={() =>handleChange(ItemProps.id)} />
                 <span style={ItemProps.completed ? completedStyle : null}>
                    {ItemProps.title}
                </span>

                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => delTodo(ItemProps.id)}>Delete</button>
            </div>
            <input type='text' value={ItemProps.title}
            className={styles.textInput} style={editMode}
            onChange={handleEdited} onKeyDown={handleEditedDone} />
        </li>
    );
};

export default TodoItem;