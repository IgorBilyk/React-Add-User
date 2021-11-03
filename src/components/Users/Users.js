import React from 'react';

import User from './User/User';
import styles from './Users.module.css'

function Users (props) {
    const {users} = props;
    //const allUsers = users.map(user => user.name)
    //console.log(users[0].name, 'From users')
    const allUsers = users.map(user => <User name={user.name} age={user.age} key={Math.random().toString()}/>)
    return(
        <div className={styles["users-wrapper"]}>
            <ul className={styles["list-items"]}>
                {allUsers}
            </ul>
        </div>
    )
}

export default Users;