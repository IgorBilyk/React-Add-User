import React,{useState} from 'react';

import Button from '../Button/Button'

import styles from './Popup.module.css'

function Popup ({title,message, checkError}) {
    //console.log(props, 'Form Popup.js')
 /*    const handleButton = () => {
        setError({isError:0})
        console.log('Closed',)
    } */
    const closePopup = (e) => {
        
    }   
    return(
        <div className={styles["popup-container"]} onClick={e => closePopup(e)}>
            <div className={styles["popup-inner"]}>
                <p>{title}</p>
                <p>{message}</p>
                <Button handleButton={checkError}>Okay</Button>
            </div>
        </div>
        
    )
}
export default Popup;