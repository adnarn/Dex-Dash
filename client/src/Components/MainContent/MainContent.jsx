import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MainContent.module.css';
import { Link } from 'react-router-dom';
import { FaEdit, FaPlusCircle, FaRegEdit, FaThLarge, FaTrash } from 'react-icons/fa';
import ConfirmModal from './ConfirmModal';
import SearchBar from '../SearchBar/SearchBar';

const MainContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems(); // Initial fetch of all items
  }, []);

  const fetchItems = (query = '') => {
    axios.get(`http://localhost:4000/search?q=${query}`)
      .then(result => {
        setItems(result.data);
      })
      .catch(err => console.log(err));
  };

  const handleSearch = (searchQuery) => {
    fetchItems(searchQuery);
  };

  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDelete = (index, id) => {
    axios.delete('http://localhost:4000/deleteItem/' + id)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    setShowModal(true);
    setItemToDelete(index);
  };

  const handleConfirmDelete = () => {
    const updatedItems = items.filter((_, i) => i !== itemToDelete);
    setItems(updatedItems);
    setShowModal(false);
    setItemToDelete(null);
  };

  const handleClose = () => setShowModal(false);

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>&#8358;{item.price}</td>
                  <td>{new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>
                    <td className="del del-primary">
                      <Link to={`/update/${item._id}`}>
                        <FaRegEdit className={styles.edit} />
                      </Link>
                    </td>
                    <td className="del del-danger">
                      <FaTrash
                        className={styles.icon}
                        onClick={(e) => handleDelete(index, item._id)}
                      />
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <ConfirmModal
        show={showModal}
        handleClose={handleClose}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default MainContent;
