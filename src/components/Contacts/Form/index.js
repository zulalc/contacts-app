import React from 'react'
import './Form.css';
function Form() {
    return (
        <div class="container">
            <div>
                <input name="fullname" placeholder="Full Name" />
            </div>

            <div>
                <input name="phone_number" placeholder="Phone Number" />
            </div>

            <div><button>Add</button></div>
            
        </div>
    )
}

export default Form
