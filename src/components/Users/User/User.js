import React, {useState} from 'react';

import styles from "./User.module.css";

function User ({name,age}) {
    //console.log(name,age,'From User.js')
    return (
        <li className={styles["list-item"]}>
          <span> {name} ({age} years old)</span>
        </li>
    )
}

export default User;