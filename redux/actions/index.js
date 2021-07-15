import firebase from "firebase";
import { USER_STATE_CHANGE } from "../constants";

export const fetchUser = () => {
  return (dispatch) => {
    firebasefirebase
      .firestore()
      .collection("users")
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          console.log(snapshot.data());
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("Usuario não existe");
        }
      });
  };
};
