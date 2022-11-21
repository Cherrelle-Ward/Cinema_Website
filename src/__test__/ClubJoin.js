import React from "react";
import { create } from "react-test-renderer";
import ClubProfile from "../components/ClubProfile";

jest.mock("../components/ClubJoin.jsx");
test(`it should render a Form`, () => {
  return function MockClubJoin() {
    return <form></form>;
  };
});
