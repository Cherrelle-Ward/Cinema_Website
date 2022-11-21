import React from "react";
import { act, create } from "react-test-renderer";
import ClubProfile from "../components/ClubProfile";

// jest.mock("../components/ClubJoin.jsx");
// test(`it should render a Form`, () => {
//   return function MockClubJoin() {
//     return <form></form>;
//   };
// });

describe(`Tests Club Join`, () => {
  describe(`onChange event test`, () => {
    test(`it should render the new value in the input when the handleSubmit function is activated`, () => {
      const testValue = `Test`;
      const testRenderer = create(
        <ClubProfile handleChange={handleChange} userForm={userForm} />
      );
      const testInstance = testRenderer.root;

      const foreNameInput = testInstance.findAllByProps({ name: "forename" });
      expect(foreNameInput.props.value).toBe("");

      act(() => foreNameInput.props.onChange({ target: { value: testValue } }));

      expect(foreNameInput.props.value).toBe(testValue);
    });
  });
});
