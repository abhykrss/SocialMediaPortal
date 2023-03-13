//Crucial Imports.
import { Routes, Route } from "react-router-dom";
import { LinkedinLoginCheck } from "../Common/LoginChecks/LinkedinLoginCheck";
import { MetaLoginCheck } from "../Common/LoginChecks/MetaLoginCheck";

//For the ease of navigation through the menu.
//Please refer "VIEWS" directory for relevent TSX renders.
export const MenuNavigator: React.FC = () => {
  return (
    <>
      {/* Linkedin Routes Start--> */}
      <Routes>
        <Route
          path="/Linkedin/Browse"
          element={<LinkedinLoginCheck pathFrom="Browse" />}
        />
        <Route
          path="/Linkedin/Post/Text"
          element={<LinkedinLoginCheck pathFrom="PostText" />}
        />
        <Route
          path="/Linkedin/Post/Article/Link"
          element={<LinkedinLoginCheck pathFrom="ArticleLink" />}
        />
        <Route
          path="/Linkedin/Post/Article/Image"
          element={<LinkedinLoginCheck pathFrom="ArticleImage" />}
        />
        <Route
          path="/Linkedin/Post/Poll"
          element={<LinkedinLoginCheck pathFrom="Poll" />}
        />
        <Route
          path="/Linkedin/Remove"
          element={<LinkedinLoginCheck pathFrom="Remove" />}
        />
        {/* Linkedin Routes End--> */}

        {/* Meta Routes Starts--> */}
        <Route
          path="/Meta/Browse"
          element={<MetaLoginCheck pathFrom="Browse" />}
        />
        <Route
          path="/Meta/Remove"
          element={<MetaLoginCheck pathFrom="Remove" />}
        />
        <Route path="/Meta/Post" element={<MetaLoginCheck pathFrom="Post" />} />
      </Routes>
      {/* Meta Routes End--> */}
    </>
  );
};
