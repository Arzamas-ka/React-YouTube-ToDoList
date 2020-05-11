import React, { useState } from 'react';

const styles = {
  button: {
    padding: '5px',
    backgroundColor: 'pink',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 800,
    marginLeft: '20px',
    outline: 'none',
  },
  input: {
    width: '300px',
    padding: '5px',
    outline: 'none',
  }
}


const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue('')
    }
  };

  return (
    <form style={{ margin: '20px' }} onSubmit={submitHandler}>
      <input style={styles.input} type='text' onChange={(event) => setValue(event.target.value)} />

      <button style={styles.button} type='submit'>Add Todo</button>
    </form>
  );
};

export default AddTodo;
