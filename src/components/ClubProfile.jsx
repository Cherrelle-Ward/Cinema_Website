import { React } from "react";
import "./ClubProfile.css";
import { motion } from "framer-motion";

const ClubProfile = ({ handleChange, handleSubmit, userForm }) => {
  const { title, forename, surname, email, phoneNumber, DOB } = userForm;

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <select
          className="dropdown"
          name="title"
          value={title}
          onChange={handleChange}
        >
          <option value="Mr">Mr</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <div className="profile_input">
          <label>Forename:</label>
          <input
            type="text"
            placeholder="First Name"
            name="forename"
            value={forename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile_input">
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile_input">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile_input">
          <label className="label">Phone Number:</label>
          <input
            type="number"
            placeholder="Enter No."
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile_input">
          <label className="label">DOB:</label>
          <input
            type="date"
            id="dob"
            name="DOB"
            value={DOB}
            onChange={handleChange}
            required
          />
        </div>

        {/* <label>Gender</label>
        <div>
          <input type="radio" name="gender" id="gender" />
          Female
          <input
            type="radio"
            name="gender"
            id="Male"
            value={gender}
            checked={gender == "Male"}
            onChange={handleChange}
          />
          Male
          <input type="radio" name="gender" id="gender" value="Other" />
          Other
        </div> */}
        <button type="submit">Book Now</button>
      </form>
    </>
  );
};

export default ClubProfile;
