import React from 'react';
import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic'
import Navbar from '@/components/Navbar';

const TodoApp = () => {
    return (
        // We can use "<> </>" instead of <React.Fragment> </React.Fragment>
        <>
        <Navbar />
        <Header />
        <TodosLogic />
        </>
    );
};

export default TodoApp