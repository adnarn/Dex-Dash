import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './HomeDash.module.css';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar/SearchBar';
import { FaPlusCircle } from 'react-icons/fa';

const HomeDash = ({ theme }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems(); // Initial fetch of all items
  }, []);

  const fetchItems = (query = '') => {
    const url = query ? `http://localhost:4000/api/search?q=${query}` : 'http://localhost:4000/api/items';
    axios.get(url)
      .then(result => {
        const data = Array.isArray(result.data) ? result.data : [];
        setItems(data);
      })
      .catch(err => console.log(err));
  };

  const handleSearch = (searchQuery) => {
    fetchItems(searchQuery);
  };
  return (
    <div className={`${styles.mainContent} ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <main className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <div className={styles.header}>
          <h2 className={styles.headers}> Dashboard</h2>

          <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar component */}

          <Link to='/add'>
            <button className={styles.button}><FaPlusCircle className={styles.icons} /> Add Item</button>
          </Link>
        </div>
        <div className="table-responsive">
          <table className={`table table-sm ${theme === 'light' ? 'table-light' : 'table-dark'}`}>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(items) && items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>&#8358;{item.price}</td>
                  <td>{new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</td> {/* Display the time */}
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default HomeDash;
