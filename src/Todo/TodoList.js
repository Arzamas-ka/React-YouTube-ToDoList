import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: '30px auto',
    padding: 0,
    width: '600px',
  },
};

const TodoList = ({ todos, ...props }) => {
  return (
    <ul style={styles.ul}>
      {todos.map((item, index) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
