import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './HomeDash.module.css';
import {Link} from 'react-router-dom'
import SearchBar from '../Components/SearchBar/SearchBar'
import {FaEdit, FaPlusCircle, FaRegEdit, FaThLarge, FaTrash } from 'react-icons/fa';

const HomeDash = () => {
  const [items, setItems] = useState([ ]);

  useEffect(() => {
    fetchItems(); // Initial fetch of all items
  }, []);

  const fetchItems = (query = '') => {
    axios.get(`https://dex-dash-server.vercel.app/search?q=${query}`)
      .then(result => {
        setItems(result.data);
      })
      .catch(err => console.log(err));
  };

  const handleSearch = (searchQuery) => {
    fetchItems(searchQuery);
  };


  useEffect(() => {
    axios.get('https://dex-dash-server.vercel.app/')
      .then(result => {
        setItems(result.data);
      })
      .catch(err => console.log(err));
  }, []);




  return (
    <div className={styles.mainContent}>
      <main>
        <div className={styles.header}>
        <h2 className={styles.headers}><FaThLarge className={styles.dashIcons}/> Dashboard</h2>

        <SearchBar  onSearch={handleSearch} /> {/* Add the SearchBar component */}

        <Link to='/add'>
        <button className={styles.button}><FaPlusCircle className={styles.icons} /> Add Item</button>
        </Link>

        </div>
        <div className="table-responsive">
          <table className="table table-sm">
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
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>&#8358;{item.price}</td>
                  <td>{new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</td> {/* Display the time */}
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>
        </td>
       </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

     

     
      {/* <UpdateModal
        show={showModal}
        handleClose={handleClose}
        handleConfirm={handleConfirmDelete}
      /> */}
    </div>
  );
};

export default HomeDash;
