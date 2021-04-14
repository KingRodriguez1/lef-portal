import { Col, Divider, Row, Space } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

export const ResultEntry = ({ question }) => (
  <>
    <Row className={"resultEntryContainer"}>
      <Row wrap={false}>
        <Space size={"middle"}>
          <Col>
            <QuestionCircleFilled style={{ fontSize: 40 }} />
          </Col>
          <Col style={{ whiteSpace: "pre-wrap" }}>{question}</Col>
        </Space>
      </Row>
    </Row>
    <Row className={"answerContainer"}>GRAFIK UND INFORMATIONEN</Row>
    <Divider />
  </>
);