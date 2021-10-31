import React from 'react';
import TodoList from './TodoList';

Todo.propTypes = {

};

function Todo(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Sleep'
        },
        {
            id: 3,
            title: 'Code'
        }
    ]
    return (
        <div>
            <h3>list Itme</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default Todo;