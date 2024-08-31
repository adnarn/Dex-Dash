import React, { useState, useEffect } from 'react';
import styles from './UpdateItem.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateItem = ({ theme }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/getItem/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name || '');  // Default to empty string if no name
        setPrice(result.data.price || '');  // Default to empty string if no price
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/updateItem/${id}`, { name, price })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        // Optionally, you can add a notification for error handling here
      });
  };

  return (
    <form className={`${styles.form} ${theme === 'light' ? 'light-theme' : 'dark-theme'}`} onSubmit={handleUpdate}>
      <h3 className={`${styles.header} ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>Update Item</h3>
      <input
        type="text"
        placeholder='Input Service Name'
        className={styles.input}
        id='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder='Input Price'
        className={styles.input}
        id='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className={`${styles.btn} ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>Update</button>
    </form>
  );
};

export default UpdateItem;
