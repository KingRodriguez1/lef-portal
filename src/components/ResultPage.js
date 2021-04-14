import { Col, PageHeader } from "antd";
import { ResultEntry } from "./resultPageComponents/ResultEntry";

const resultEntries = [
  {
    question:
      "Welche Meilensteine hat %s schon erreicht?\nWelche Ziele hat sich %s für die Zukunft gesetzt?",
  },
];

export const ResultPage = ({ city = "", onBack = () => {} }) => (
  <>
    <PageHeader
      className="site-page-header"
      onBack={onBack}
      title={`Dein Klimacheck für: ${city}`}
      // subTitle={"Ziehs dir rein!"}
    />

    <Col style={{ maxWidth: 900 }}>
      {resultEntries.map((entry) => (
        <ResultEntry question={entry.question.replaceAll("%s", city)} />
      ))}
    </Col>
  </>
);
