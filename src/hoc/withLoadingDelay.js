import React, { useState, useEffect } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

import './style.css';

import classNames from 'classnames';

const withLoadingDelay = WrappedComponent => {
  return props => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

    const className = classNames({'spinnerLayot': !props.singleCard,'SpinnerForSingleCard': props.singleCard});
    
    return isLoading ?
           <div className={className}>
             <ScaleLoader size={10} color='#27bb19'/>
           </div> : 
           <WrappedComponent {...props}/>
  }
}

export default withLoadingDelay;
