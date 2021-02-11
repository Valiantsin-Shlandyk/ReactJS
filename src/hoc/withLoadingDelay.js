import React, { useState, useEffect } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import './style.css';

const withLoadingDelay = WrappedComponent => {

  return props => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

    return isLoading ? 
           <div className='spinnerLayot'>
             <ScaleLoader size={10} color='#27bb19'/>
           </div> : 
           <WrappedComponent {...props}/>
  }
}

export default withLoadingDelay;
