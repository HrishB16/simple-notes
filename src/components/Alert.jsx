import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Alerting(props) {
  const [show, setShow] = useState(true);

  const capitalise = ( word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  if (show) {
    return (
      props.alert && <Alert variant={props.alert.type} onClose={() => setShow(false)} dismissible>
        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
      </Alert>
    );
  }
}

export default Alerting