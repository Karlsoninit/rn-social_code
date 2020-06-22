import db from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authSignUpUser = ({ email, password, nickname }) => async (
  dispatch,
  getState
) => {
  try {
    await db.auth().createUserWithEmailAndPassword(email, password);

    const user = await db.auth().currentUser;

    await user.updateProfile({
      displayName: nickname,
    });

    const { displayName, uid } = await db.auth().currentUser;

    const userUpdateProfile = {
      nickName: displayName,
      userId: uid,
    };

    dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
  } catch (error) {
    console.log("error", error);

    console.log("error.message", error.message);
  }
};

export const authSignInUser = ({ email, password }) => async (
  dispatch,
  getState
) => {
  try {
    const user = await db.auth().signInWithEmailAndPassword(email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.code", error.code);
    console.log("error.message", error.message);
  }
};

export const authSignOutUser = () => async (dispatch, getState) => {};

export const authStateCahngeUser = () => async (dispatch, getState) => {};
