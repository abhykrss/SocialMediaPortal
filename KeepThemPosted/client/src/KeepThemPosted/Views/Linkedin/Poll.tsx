//Crucial Imports
import React, { useState } from "react";
import { Button, Divider, Form, Input, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
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
export const Poll: React.FC = () => {
  //Configuring Disabled for Button
  const [disabled, setDisabled] = useState(true);

  //Accessing LoginData from Redux Store
  const userLoginData = useAppSelector((state) => state.linkedinLoginData);

  //Grabbing name from store.
  const name =
    userLoginData.firstName.localized.en_US +
    " " +
    userLoginData.lastName.localized.en_US;

  //On Submit Function for ApiCall
  const onFinishPoll = (values: object) => {
    //Payload.
    const data = {
      id: userLoginData.id,
      accessToken: userLoginData.access_token,
      ...values,
    };

    axios({
      method: "POST",
      url: "/postPoll",
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
      <Divider orientation="right">Welcome {name}, Create a Poll.</Divider>
      <Form
        {...layout}
        onFinish={onFinishPoll}
        style={{ maxWidth: 600, marginLeft: 50 }}
        validateMessages={validateMessages}
      >
        <Form.Item label="Scope" name="scope">
          <Select>
            <Select.Option value="PUBLIC">Public</Select.Option>
            <Select.Option value="CONNECTIONS">Connections</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="title" label="Heading">
          <Input />
        </Form.Item>
        <Form.Item name="question" label="Question">
          <TextArea
            showCount
            maxLength={500}
            style={{ height: 100, width: 400 }}
            placeholder="What you want to ask?"
          />
        </Form.Item>
        <Form.Item label="Options">
          <Form.List
            name="pollOptions"
            rules={[
              {
                validator: async (_, pollOptions) => {
                  if (!pollOptions || pollOptions.length < 2) {
                    setDisabled(true);
                    return Promise.reject(new Error("At least 2 options"));
                  } else if (
                    pollOptions.length >= 2 &&
                    pollOptions.length <= 4
                  ) {
                    setDisabled(false);
                  } else if (pollOptions.length > 4) {
                    setDisabled(true);
                    return Promise.reject(new Error("Not more than 4 options"));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item required={false} key={field.key}>
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please Provide an option or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="Option" style={{ width: "80%" }} />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  ></Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={disabled}
          style={{ marginLeft: 100 }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
