import React from 'react';
import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic'

const TodoApp = () => {
    return (
        // We can use "<> </>" instead of <React.Fragment> </React.Fragment>
        <>
        <Header />
        {/* <TodosLogic /> */}
        </>
    );
};

export default TodoApp