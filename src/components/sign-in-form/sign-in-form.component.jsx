import { useState } from 'react';
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils.js/firebase';

import './sign-in-form.css'

const defaultFormFields = {
    email: '',
    password: '',
};

const signInGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    
    const resetFormFields = () => setFormFields(defaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }; 
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();                
        } catch (error) {
            switch (error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default: console.log(error);
            }            
        }
    };

    return (
        <div className='signincontainer'>
            <h2 className='authtitle'>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label className='authlabel' htmlFor='email'> Email
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
                <div className='buttonscontainer'>
                <button className='basebutton' type='submit'>Sign In</button>
                <button className='googlebutton' type='button' onClick={signInGoogleUser}>
                    Sign In With Google
                </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;