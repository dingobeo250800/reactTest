import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    TodoList: PropTypes.array
};
TodoList.defaultProps = {
    todoList: [],
}
function TodoList(props) {
    const todoList1 = props.todoList;
    return (
        <ul>
            {todoList1.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;