import React, { useState } from 'react';
import './style.css';
import { BiUserCircle } from 'react-icons/bi';
import Input from '../../components/UI/Input';

const SignIn = () => {
    const [signInState, setSignInSate] = useState({
        formElements: {
            username: {
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                errorMessage: 'You have entered an invalid email adress'
            },
            password: {
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    isOneNumAndChar: true
                },
                valid: false,
                touched: false,
                errorMessage: `Password must be at least 8 characters
                               Password must contain at least 1 number
                               Password must contain at least 1 letter`
            }
        },
        formIsValid: false
    });

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        
        if (rules.isOneNumAndChar) {
            const pattern = /(?=.*[0-9])(?=.*[a-zA-Z])/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    const inputChangeHandler = (event, id) => {
      const updatedSignInForm = {...signInState.formElements};
      const updatedSignInElement = {...updatedSignInForm[id]};
      updatedSignInElement.value = event.target.value;
      updatedSignInElement.valid = checkValidity(updatedSignInElement.value, updatedSignInElement.validation);
      updatedSignInElement.touched = true;
      updatedSignInForm[id] = updatedSignInElement;

      let formIsValid = true;
      for (let id in updatedSignInForm) {
          formIsValid = updatedSignInForm[id].valid && formIsValid;
      }
      setSignInSate({...signInState, formElements: updatedSignInForm, formIsValid});
    }

    const formElementsArray = [];
    for (let element in signInState.formElements) {
      formElementsArray.push({
        id: element,
        config: signInState.formElements[element]
      });
    }

    return (
        <div className='container'>
            <form className='form'>
                <BiUserCircle className='user_icon'/>
                <label className='iconText'>Sign in</label>
                {formElementsArray.map(element => {
                    return <Input 
                              key={element.id}
                              placeholder={element.config.elementConfig.placeholder}
                              value={element.config.value}
                              type={element.config.elementConfig.type}
                              onChange={event => inputChangeHandler(event, element.id)}
                              touched={element.config.touched}
                              invalid={!element.config.valid}
                              errorMessage={element.config.errorMessage}
                            />
                })}
                <button className='sign_in_btn' disabled={!signInState.formIsValid}>Sign in</button>
            </form>
        </div>
    )
}

export default SignIn
