import React, {useState} from 'react';
import styles from './inputs.module.css'
import Popup from '../validation/Popup'
import Button from '../Button/Button'


function Inputs ({addUser,validInputs}) {
    const [values, setValues] = useState({
        name: '',
        age: ''
        

    })
    const [error, setError] = useState({
        title: "",
        message: "",
        isError: ""
    });

    const handleInputs = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        })
        
    }
    const handleForm = (e) => {
        e.preventDefault()
   
        if(values.age < 1 || !values.age.trim()){
            setError({
                title: 'The age is < 0 or empty. Please Enter number more than 0 !',
                message: 'Please, try again !',
                isError: 0
            })
            console.log(error)
        }else{
            
            addUser(values)
            setValues({
                name: " ",
                age: ""
            })
            
            
            
        }
        
        
    }


      //Validate User input 
const checkError = () => {
    setError({
        title: 'The age is < 0 or empty. Please Enter number more than 0 !',
        message: 'Please, try again !',
        isError: 1
    })
}
    return (
        <div>
            {error.isError !==0 ?<form className={styles.form} onSubmit={handleForm}>
                <label className={styles.label}>Username<br/>
                    <input name='name' value={values.name} className={styles.inputs} onChange={(e)=> handleInputs(e)}/>
                </label>
                <label className={styles.label}>Age (Years)<br/>
                    <input type="number" name='age' value={values.age} className={styles.inputs} onChange={(e)=> handleInputs(e)}/>
                </label>
                <Button className={styles.button}>Add User</Button>
            </form> : <Popup title={error.title}  message={error.message} checkError={checkError}/>}

            
        </div>
    )
}
export default Inputs;