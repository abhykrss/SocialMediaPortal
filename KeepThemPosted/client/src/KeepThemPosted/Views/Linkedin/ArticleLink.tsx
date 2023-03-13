//Crucial Imports
import React from "react";
import axios from "axios";
import { Form, Input, Button, Select, Divider } from "antd";
import {
  internalErrorNotfication,
  successNotification,
} from "../../Common/Toastify/toastify";
import { useAppSelector } from "../../Store/Redux/ActionsHooks";
import TextArea from "antd/es/input/TextArea";

//If logged in, Rendering Post form for article
export const ArticleLink: React.FC = () => {
  const userLoginData = useAppSelector((state) => state.linkedinLoginData);

  //Grabbing name from the store.
  const name =
    userLoginData.firstName.localized.en_US +
    " " +
    userLoginData.lastName.localized.en_US;

  //On submit function for Form.
  const onFinish = (values: object) => {
    const data = {
      id: userLoginData.id,
      accessToken: userLoginData.access_token,
      ...values,
    };
    axios({
      method: "POST",
      url: "/postArticle/Link",
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
      <Divider orientation="right">
        Welcome {name}, Create an Article post with Link
      </Divider>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        style={{ maxWidth: 600, marginLeft: 50 }}
      >
        <Form.Item label="Scope" name="scope">
          <Select>
            <Select.Option value="PUBLIC">Public</Select.Option>
            <Select.Option value="CONNECTIONS">Connections</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Heading" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="text">
          <TextArea
            showCount
            maxLength={1000}
            style={{ height: 150, width: 400 }}
            placeholder="Start Typing.."
          />
        </Form.Item>

        <Form.Item label="Link" name="url">
          <Input />
        </Form.Item>

        <Form.Item label="About Url" name="content">
          <TextArea
            showCount
            maxLength={500}
            style={{ height: 100, width: 400 }}
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
