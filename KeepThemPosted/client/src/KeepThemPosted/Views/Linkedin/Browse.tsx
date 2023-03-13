//Crucial Imports.
import { Divider } from "antd";
import { useAppSelector } from "../../Store/Redux/ActionsHooks";

//If logged in render the necessary data
export const Browse = () => {
  const userLoginData = useAppSelector((state) => state.linkedinLoginData);
  const name =
    userLoginData.firstName.localized.en_US +
    " " +
    userLoginData.lastName.localized.en_US;
  return (
    <>
      <Divider orientation="right">Welcome {name}, Check your Feed.</Divider>
      <h1>LinkedinBrowse</h1>
    </>
  );
};
