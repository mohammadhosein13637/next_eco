import React, { useState } from 'react';
import styles from './LinkInput.module.css'; // Import CSS module for styling

const LinkInput = ({ onSubmit }) => {
  const [link, setLink] = useState('');

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(link);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a link"
        value={link}
        onChange={handleChange}
        className={styles.input} // Apply styles to input
      />
      <button type="submit" className={styles.button}>Display Website</button>
    </form>
  );
};

export default LinkInput;
