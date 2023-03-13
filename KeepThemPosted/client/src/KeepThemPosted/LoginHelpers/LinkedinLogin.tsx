//Crucial Imports
import { LoginSocialLinkedin } from "reactjs-social-login";
import { LinkedInLoginButton } from "react-social-login-buttons";
import { useAppDispatch } from "../Store/Redux/ActionsHooks";
import { storeLinkedinTokenAction } from "../Store/Redux/ReduxActions";
import {
  internalErrorNotfication,
  loginSuccessNotfication,
} from "../Common/Toastify/toastify";

export default function LinkedinLogin() {
  //Using Dispatch hook to dispatch action to Redux.
  const dispatch = useAppDispatch();
  //using npm package to log user in.
  return (
    <>
      <LoginSocialLinkedin
        client_id={process.env.LINKEDIN_CLIENT_ID}
        client_secret={process.env.LINKEDIN_CLIENT_SECRET}
        redirect_uri={process.env.LINKEDIN_REDIRECT_URI}
        scope={process.env.LINKEDIN_SCOPE}
        onResolve={(response) => {
          loginSuccessNotfication();
          let loginUserData = response?.data;
          if (response) dispatch(storeLinkedinTokenAction(loginUserData));
        }}
        onReject={(err) => {
          internalErrorNotfication();
          console.log(err);
        }}
      >
        <LinkedInLoginButton />
      </LoginSocialLinkedin>
    </>
  );
}
