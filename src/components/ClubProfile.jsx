import { React } from "react";

const ClubProfile = ({ handleChange, handleSubmit, userForm }) => {
  //   const [userForm, setUserForm] = useState({
  //     title: "",
  //     forename: "",
  //     surname: "",
  //     email: "",
  //     phoneNumber: "",
  //     DOB: "",
  //   });

  const { title, forename, surname, email, phoneNumber, DOB } = userForm;
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setUserForm({
  //       ...userForm,
  //       [name]: value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Submitted");
  //     console.log(userForm);
  //   };

  //   useEffect(() => {}, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <select name="title" value={title} onChange={handleChange}>
          <option value="Mr">Mr</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <label>Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="forename"
          value={forename}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={surname}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Enter No."
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          required
        />
        <label>DOB</label>
        <input
          type="date"
          id="dob"
          name="DOB"
          value={DOB}
          onChange={handleChange}
          required
        />
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
