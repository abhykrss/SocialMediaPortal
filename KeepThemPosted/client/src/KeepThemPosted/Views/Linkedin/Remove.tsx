//Crucial Imports
import { logoutSuccessNotfication } from "../../Common/Toastify/toastify";
import { useAppDispatch, useAppSelector } from "../../Store/Redux/ActionsHooks";
import { deleteLinkedinTokenAction } from "../../Store/Redux/ReduxActions";

//Main Function for Remove.
export const Remove = () => {
  //Grabbing user data from the store using selector hook.
  const userLoginData = useAppSelector((state) => state.linkedinLoginData);
  //Using useDispacth hook to delete the token from the redux store.
  const dispatch = useAppDispatch();
  dispatch(deleteLinkedinTokenAction());
  logoutSuccessNotfication();

  //Grabbing name from store.
  const name =
    userLoginData.firstName.localized.en_US +
    " " +
    userLoginData.lastName.localized.en_US;
  return (
    <>
      <h1>Signed out Linkedin, {name}</h1>
    </>
  );
};
