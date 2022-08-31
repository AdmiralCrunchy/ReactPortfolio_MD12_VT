import React from 'react';
import '../../../css/forms.css'

function Contact(){
    return (
        <div>
            <h1> Contact Me </h1>
            <form >
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label >
                    Message:
                    <input className='longer' type="text" name="message" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact;