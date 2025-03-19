import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

class Contact {
  constructor(id, userFirstname, userLastname, userPhone) {
    this.id = id;
    this.userFirstname = userFirstname;
    this.userLastname = userLastname;
    this.userPhone = userPhone;
  }
}

function PhoneBookForm({ phoneBookArray, setPhoneBookArray }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const id = phoneBookArray.length + 1;
        const profile = new Contact(id, firstName, lastName, phone);
        setPhoneBookArray([...phoneBookArray, profile]); // Add new entry

        setFirstName("");

        setLastName("");
        setPhone("");

        // console.log(phoneBookArray);
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        onChange={(e) => setFirstName(e.target.value)}
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        placeholder="Coder"
        value={firstName}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        onChange={(e) => setLastName(e.target.value)}
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        placeholder="Byte"
        value={lastName}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        onChange={(e) => setPhone(e.target.value)}
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        placeholder="8885559999"
        value={phone}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ phoneBookArray }) {
  console.log("inside book", phoneBookArray);
  console.log("typeof", typeof phoneBookArray);

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {phoneBookArray.map((item) => (
          <tr key={item.id}>
            <td style={style.tableCell}>{item.userFirstname}</td>
            <td style={style.tableCell}>{item.userLastname}</td>
            <td style={style.tableCell}>{item.userPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Application(props) {
  const [phoneBookArray, setPhoneBookArray] = useState([]);

  return (
    <section>
      <PhoneBookForm
        phoneBookArray={phoneBookArray}
        setPhoneBookArray={setPhoneBookArray}
      />
      <InformationTable phoneBookArray={phoneBookArray} />
    </section>
  );
}

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<Application />);
