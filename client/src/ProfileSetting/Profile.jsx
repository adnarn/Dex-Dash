import React, {useRef } from 'react'
import styles from './Profile.module.css';
import profilePic from './profilePic.jpeg'
import {Link} from 'react-router-dom'

const Profile = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // You can now handle the file (e.g., upload it or display a preview)
    }
  };

  return (
      <div className={styles.profile}>
                
                <div className={styles.profileImageContainer}>
              <img
                    src={profilePic}
                  className={styles.img}
              />
                <a href="#" className={styles.changeImageLink} onClick={handleImageClick}>
                  Change Profile image
                </a>
              </div>


                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  accept="image/*"
                />
              <form className={styles.profileForm}>
              <div className={styles.row}>
                <input type="text" placeholder="First Name" className={styles.inputField} />
                <input type="text" placeholder="Last Name" className={styles.inputField} />
                <input type="email" placeholder="E-mail" className={styles.inputField} />
              </div>
              <div className={styles.row}>
                <input type="text" placeholder="Last Name" className={styles.inputField} />
                <input type="url" placeholder="Link" className={styles.inputField} />
              </div>
              <input type="text" placeholder="Location" className={styles.inputField} />
              <div className={styles.row}>
                <input type="text" placeholder="Instagram Username" className={styles.inputField} />
                <input type="text" placeholder="Twitter username" className={styles.inputField} />
              </div>
              <textarea placeholder="Bio" className={styles.textArea}></textarea>
              <input type="text" placeholder="Interests" className={styles.inputField} />
              <button className={styles.updateButton}>Update Account</button>    
            </form>
    </div>
  );
};

export default Profile;
