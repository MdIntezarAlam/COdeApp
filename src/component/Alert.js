import React from 'react'

const Alert = (props) => {
  //Function for Capitalizeing
  const capital =(word) =>{
    const lower = word.toUpperCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
    return (
       props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show role`} role="alert">
       <strong> {capital(props.Alert.type)} </strong>:{props.Alert.msg}
      </div>
    )
}

export default Alert
