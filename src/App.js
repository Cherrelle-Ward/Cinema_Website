import "./App.css";
import { React, useState } from "react";

//components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [userForm, setUserForm] = useState({
    title: "",
    forename: "",
    surname: "",
    email: "",
    phoneNumber: "",
    DOB: "",
  });

  const { title, forename, surname, email, phoneNumber, DOB } = userForm;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(userForm);
  };
  return (
    <div className="App">
      <Nav
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        userForm={userForm}
      />
      <Footer />
    </div>
  );
}
export default App;
