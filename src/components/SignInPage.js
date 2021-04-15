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

export function SignInPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ margin: 10 }}>
      <Col span={24}>
        <Title level={1}>Einloggen</Title>
        <Typography style={{ whiteSpace: "pre-wrap", marginBottom: 15 }}>
          {"Loggen Sie sich mit Ihrem Nutzernamen und Passwort ein."}
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
                message: "Bitte Ihren Benutzernamen nicht vergessen.",
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
                message: "Bitte Ihr Passwort eingeben.",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Eingeloggt bleiben</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Einloggen
            </Button>
          </Form.Item>
        </Form>
        <Divider />

        <Row align={"middle"}>
          <Typography>Noch keinen Account?</Typography>
          <Button type={"link"} href={"/signUp"}>
            Jetzt registrieren
          </Button>
        </Row>
      </Col>
    </Row>
  );
}
