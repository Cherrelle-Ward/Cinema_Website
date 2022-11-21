import React from "react";
import joinBanner from "../images/HomeBanner.png";
import JoinInfo from "./JoinInfo";
import ClubProfile from "./ClubProfile";
import "./ClubJoin.css";

const ClubJoin = ({ handleChange, handleSubmit, userForm }) => {
  return (
    <>
      <div className="club_join">
        <img className="joinBanner" src={joinBanner} alt="banner" />
        <h1 className="club_join_title">Join The Club</h1>
        <div className="boxes">
          <JoinInfo />
          <ClubProfile
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            userForm={userForm}
          />
          <div className="buffer"></div>
        </div>
      </div>
    </>
  );
};

export default ClubJoin;
