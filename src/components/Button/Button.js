import React from 'react';

import styles from './Button.module.css'

function Button ({handleButton,children}) {
        
    return (
        <button className={styles.button} onClick={handleButton}>{children}</button>
    )
}
export default Button;