//Crucial Imports
import { BrowserRouter } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage";
import { Store } from "./Store/Store";
import { Provider } from "react-redux";

export default function KeepThemPosted() {
  return (
    <>
      {/* Providing Access to Redux Store */}
      <Provider store={Store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>
    </>
  );
}
