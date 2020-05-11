import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '2px',
  },
  button: {
    background: 'lightblue',
    padding: '5px',
    width: '24px',
    height: '22px',
    borderRadius: '4px',

    lineHeight: 0,
    fontSize: '18px',
    outline: 'none',
    fontWeight: 800,
  },
};

const TodoItem = ({ item, index, onChange }) => {
  
  const {removeTodo} = useContext(Context);

  const classes = [];
  if (item.completed) {
    classes.push('done');
  }

  return (
    <li style={styles.li}>
      <span className={classes.join()}>
        <input
          checked={item.completed}
          style={styles.input}
          type='checkbox'
          onChange={() => onChange(item.id)}
        />
        &nbsp;&nbsp;
        <strong>{index + 1}.</strong>&nbsp;&nbsp;&nbsp;
        {item.title}
      </span>

      <button style={styles.button} onClick={() => removeTodo(item.id)}>&times;</button>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
