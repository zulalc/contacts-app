import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    ); //some: herhangi biri
  });

  return (
    <div className="container">
      <h1>Contact List</h1>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {contacts.map((contact, i) => (
          <li key={i}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
