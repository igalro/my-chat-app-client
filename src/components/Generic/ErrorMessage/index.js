import React from 'react';
import styles from './styles.module.scss'

const ErrorMessage = ({errorMessage}) => {
    return(
        <div
            className={styles.errorMessage}>
            <p>{errorMessage}</p>
        </div>
    )
}

export default ErrorMessage;