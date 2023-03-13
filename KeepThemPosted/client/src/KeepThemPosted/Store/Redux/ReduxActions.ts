//Define Action for storing incoming AccessToken {LINKEDIN}
export const storeLinkedinTokenAction = (userLoginData: object | undefined) => {
  return {
    type: "storeLinkedinTokenAction",
    payload: userLoginData,
  };
};

//Define Action for Deleting existing AccessToken {LINKEDIN}
export const deleteLinkedinTokenAction = () => {
  return {
    type: "deleteLinkedinTokenAction",
  };
};

//Define Action for Storing Incoming AccessToken {META}
export const storeMetaTokenAction = (userLoginData: object | undefined) => {
  return {
    type: "storeLinkedinTokenAction",
    payload: userLoginData,
  };
};

//Define Action for Deleting existing AccessToken {META}
export const deleteMetaTokenAction = () => {
  return {
    type: "deleteLinkedinTokenAction",
  };
};
