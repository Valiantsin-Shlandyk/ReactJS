import React from 'react';
import './style.css';
import classNames  from 'classnames';

const CardBody = props => {
    const className = classNames('card-body', { 'active': props.checked, 'singleCardStylingBody': props.singleCard});

    return (
      <textarea
        className={className}
        value={props.bodyData}
        readOnly={!props.isEditable}
        onChange={props.onChange}
     />
    )
}

export default CardBody;
