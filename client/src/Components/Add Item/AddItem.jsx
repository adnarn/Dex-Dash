import React, {useState} from 'react'
import axios from 'axios';
import styles from './AddItem.module.css'
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
   
  const navigate = useNavigate()
  

  const Submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/addItem", {name, price})
    .then(result =>{
       console.log(result)
       navigate('/')
      })
    .catch(err => console.log(err))  
}

  return (
    <div className={styles.contents}>
        <form className={styles.form} onSubmit={Submit}>
        <h3 className={styles.header}>Add Item</h3>
            <input type="text"
                placeholder='Input Service Name' 
                 className={styles.input}
                 id='Name'  
                  onChange={(e)=>setName(e.target.value)} />

            <input
             type="number"
             placeholder='Input Price'
              className={styles.input}
              id='Price'  
              onChange={(e)=>setPrice(e.target.value)}              
              />
            <button  className ={styles.btn}>Add</button>
        </form>
    </div>
  )
}

export default AddItem