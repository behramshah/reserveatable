import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils.js/firebase';

import './sign-up-form.css';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;
    const resetFormFields = () => setFormFields(defaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }; 
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('passwords doesnt match');
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();    
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('already used email choose another')
            } else {
                console.log('failed to create user', error.message)
            }
        }
    
    };

    return (
        <div className='signUpContainer'>
            <h2 className='authtitle'>No account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label className='authlabel' htmlFor='displayName'>Display name
                    <input
                        className='authinput'
                        type='text'
                        required
                        onChange={handleChange}
                        name='displayName'
                        value={displayName}
                    />
                </label>
                <label className='authlabel' htmlFor='email'>Email
                    <input
                        className='authinput'
                        type='email'
                        required
                        onChange={handleChange}
                        name='email'
                        value={email}
                    />
                </label>
                <label className='authlabel' htmlFor='password'>Password
                    <input
                        className='authinput'
                        type='password'
                        required
                        onChange={handleChange}
                        name='password'
                        value={password}
                    />
                </label>
                <label className='authlabel' htmlFor='confirmPassword'>Confirm password
                    <input
                        className='authinput'
                        type='password'
                        required
                        onChange={handleChange}
                        name='confirmPassword'
                        value={confirmPassword}
                    />
                </label>            
                <button className='basebutton' type='submit'>Sign Up</button>
            </form>
        </div>

    );
};

export default SignUpForm;