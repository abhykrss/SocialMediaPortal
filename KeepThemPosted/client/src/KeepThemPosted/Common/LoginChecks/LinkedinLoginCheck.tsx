//Crucial Imports.
import { useAppSelector } from "../../Store/Redux/ActionsHooks";
import { ArticleImg } from "../../Views/Linkedin/ArticleImg";
import { ArticleLink } from "../../Views/Linkedin/ArticleLink";
import { Browse } from "../../Views/Linkedin/Browse";
import { Poll } from "../../Views/Linkedin/Poll";
import { Remove } from "../../Views/Linkedin/Remove";
import { Text } from "../../Views/Linkedin/Text";

//Type of Expected Props.
interface pathProps {
  pathFrom: string;
}

//Login Check and Rendering TSX according to the path requested.
export const LinkedinLoginCheck = (props: pathProps) => {
  const userLoginData = useAppSelector((state) => state.linkedinLoginData);
  if (userLoginData.length === 0) {
    return (
      <>
        <h1>Login First</h1>
      </>
    );
  } else {
    switch (props.pathFrom) {
      case "Browse":
        return <Browse />;
      case "PostText":
        return <Text />;
      case "ArticleLink":
        return <ArticleLink />;
      case "ArticleImage":
        return <ArticleImg />;
      case "Poll":
        return <Poll />;
      case "Remove":
        return <Remove />;
      default:
        return <h1>Not Found</h1>;
    }
  }
};
