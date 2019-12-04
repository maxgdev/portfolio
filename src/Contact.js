import React from 'react';
import './App.css';

export default function Contact() {
    return (
    <>
        <div className='contact'>
            <div>
                <p>You can contact me at max at maxgdev.net</p>
                <p> Alternatively leave your email address and I will keep you updated</p>
                <form>
                    <input 
                        type='email'
                        placeholder='Enter you email for status updates'
                        name='emailAddress'
                        value=''
                    />
                    <input
                        type='submit'
                        value='Send Email Address'
                    />
                </form>
            </div>
        </div>
    </>);
}
