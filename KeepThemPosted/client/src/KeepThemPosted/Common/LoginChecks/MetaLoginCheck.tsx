//Crucial Imports.
import { useAppSelector } from "../../Store/Redux/ActionsHooks";
import { MetaBrowse } from "../../Views/Meta/MetaBrowse";
import { MetaRemove } from "../../Views/Meta/MetaRemove";
import { MetaPost } from "../../Views/Meta/MetaPost";
import { loginErrorNotfication } from "../Toastify/toastify";

//Type of Expected Props.
interface pathProps {
  pathFrom: string;
}

//Login Check and Rendering TSX according to the path requested.
export const MetaLoginCheck = (props: pathProps) => {
  const userLoginData = useAppSelector((state) => state.MetaLoginData);
  if (userLoginData.length === 0) {
    loginErrorNotfication();
    return <></>;
  } else {
    switch (props.pathFrom) {
      case "Browse":
        return <MetaBrowse />;
      case "Post":
        return <MetaPost />;
      case "Remove":
        return <MetaRemove />;
      default:
        return <h1>Not Found</h1>;
    }
  }
};
