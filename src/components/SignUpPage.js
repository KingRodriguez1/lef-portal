import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Divider,
  Space,
} from "antd";
import Title from "antd/es/typography/Title";
import { lefApi } from "../api/lefApi";

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 19,
  },
};

export function SignUpPage() {
  const onFinish = (values) => {
    lefApi.signUp(values.username, values.password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ margin: 10 }}>
      <Col span={24}>
        <Title level={1}>Registrieren</Title>
        <Typography style={{ whiteSpace: "pre-wrap", marginBottom: 15 }}>
          {"Wählen Sie einen Benutzernamen und ein Passwort."}
        </Typography>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Benutzername"
            name="username"
            rules={[
              {
                required: true,
                message: "Bitte einen Benutzernamen wählen",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Passwort"
            name="password"
            rules={[
              {
                required: true,
                message: "Bitte ein Passwort eintragen :)",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Registrieren
            </Button>
          </Form.Item>
        </Form>
        <Divider />
      </Col>
    </Row>
  );
}
