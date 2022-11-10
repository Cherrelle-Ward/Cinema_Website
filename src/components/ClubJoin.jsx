import React from "react";
import joinBanner from "../images/HomeBanner.png";
import JoinInfo from "./JoinInfo";
import ClubProfile from "./ClubProfile";

const ClubJoin = ({ handleChange, handleSubmit, userForm }) => {
  return (
    <>
      <img className="joinBanner" src={joinBanner} alt="banner" />
      <h1>Join The Club</h1>
      <JoinInfo />
      <ClubProfile
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        userForm={userForm}
      />
    </>
  );
};

export default ClubJoin;
