import React, {useState, useEffect} from 'react'
import styles from './UpdateItem.module.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    

    useEffect(() => {
        axios.get('https://dex-dash-server.vercel.app/getItem/'+id)
          .then(result => {
            {console.log(result)}
            setName(result.data.name)
            setPrice(result.data.price)
            })
          .catch(err => console.log(err));
      }, []);

      const Update = (e)=>{
        e.preventDefault();
        axios.put("https://dex-dash-server.vercel.app/updateItem/"+id, {name, price})
        .then(result =>{
           console.log(result)
           navigate('/')
          })
        .catch(err => console.log(err))  
    }


    return (
      <div className={styles.contents}>
          <form className={styles.form} onSubmit={Update}>
          <h3 className={styles.header}>Update Item</h3>
              <input type="text"
                  placeholder='Input Service Name' 
                   className={styles.input}
                   id='Name'  
                   value={name}
                    onChange={(e)=>setName(e.target.value)} />
  
              <input
               type="number"
               placeholder='Input Price'
                className={styles.input}
                id='Price'  
                value={price}
                onChange={(e)=>setPrice(e.target.value)}              
                />
              <button  className ={styles.btn}>Update</button>
          </form>
      </div>
    )
}

export default UpdateItem