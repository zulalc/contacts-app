import React, { useState, useEffect } from "react";
import "./Form.css";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues); // tekrar içini boşaltıyoruz
    //contacts kayıt eklenmişse input içini boşalt
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <button className="addBtn">Add</button>
      </div>
    </form>
  );
}

export default Form;
