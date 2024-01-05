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
    const [edited, setEdited] = useState(ItemProps.title)

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

    const handleEditDone = () => {
        editTodo(edited, ItemProps.id)
        setEdit(false);
    }
    const handleEdited= (e) => {
        return setEdited(e.target.value)
    }

    const handleEditedDone = (event) => {
        if (event.key === 'Enter') {
            editTodo(edited, ItemProps.id)
            setEdit(false);
        }
    }

    return(
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input type="checkbox" checked={ItemProps.completed}
                onChange={() =>handleChange(ItemProps.id)} />
                 <span style={ItemProps.completed ? completedStyle : null}>
                    {edited}
                </span>

                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => delTodo(ItemProps.id)}>Delete</button>
            </div>
            <div style={editMode}>
                <input type='text' value={edited} className={styles.textInput}
                onChange={handleEdited} onKeyDown={handleEditedDone} />
                
                <button onClick={handleEditDone}>Done</button>
            </div>
        </li>
    );
};

export default TodoItem;