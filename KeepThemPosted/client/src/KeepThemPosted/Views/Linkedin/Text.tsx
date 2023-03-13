//Crucial Imports
import React from "react";
import { Button, Divider, Form, Select } from "antd";

import TextArea from "antd/es/input/TextArea";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import {
  internalErrorNotfication,
  successNotification,
} from "../../Common/Toastify/toastify";
import { useAppSelector } from "../../Store/Redux/ActionsHooks";

//Form Layout
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

//User-side Validation Feedbacks
const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
};

//Rendering Post Form if the user is logged in.
export const Text: React.FC = () => {
  const userLoginData = useAppSelector((state) => state.linkedinLoginData);

  //Grabbing name from store.
  const name =
    userLoginData.firstName.localized.en_US +
    " " +
    userLoginData.lastName.localized.en_US;

  //On Submit function for form.
  const onFinishText = (values: object) => {
    const data = {
      id: userLoginData.id,
      accessToken: userLoginData.access_token,
      ...values,
    };
    axios({
      method: "POST",
      url: "/postText",
      data: data,
    })
      .then((response) => {
        if (response.data === "completed") {
          //Success Toast
          successNotification();
        }
      })
      .catch((err) => {
        //Error Toast
        internalErrorNotfication();
      });
  };

  return (
    <>
      <Divider orientation="right">Welcome {name}, Create a Text Post.</Divider>
      <Form
        {...layout}
        onFinish={onFinishText}
        style={{ maxWidth: 600, marginLeft: 50 }}
        validateMessages={validateMessages}
      >
        <Form.Item label="Scope" name="scope">
          <Select>
            <Select.Option value="PUBLIC">Public</Select.Option>
            <Select.Option value="CONNECTIONS">Connections</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="content" label="Content">
          <TextArea
            showCount
            maxLength={1500}
            style={{ height: 250, width: 500 }}
            placeholder="Start Typing.."
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginLeft: 100 }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
