import React, { useState } from 'react'
import './Form.css';
function Form() {
    const [form, setForm] = useState({ fullname: "", phone_number: "" });

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div class="container">
            <div>
                <input name="fullname" placeholder="Full Name" onChange={onChangeInput}/>
            </div>

            <div>
                <input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} />
            </div>

            <div><button>Add</button></div>
            
        </div>
    )
}

export default Form
