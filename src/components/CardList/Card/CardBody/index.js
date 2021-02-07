import React from 'react';
import './style.css';

const CardBody = props => (
    <textarea
      className={props.checked ? 'card-body active' : 'card-body'}
      value={props.bodyData}
      readOnly={!props.isEditable}
      onChange={event => props.onChange('bodyData', event)}
    />
)

export default CardBody;
