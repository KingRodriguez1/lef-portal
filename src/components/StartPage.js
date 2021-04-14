import { useState } from "react";
import Title from "antd/es/typography/Title";
import { AutoComplete, Button, Col, Row, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import MapChart from "./MapChart";

export const StartPage = ({ onCitySelect = () => {} }) => {
  const [searchWord, setSearchword] = useState("");
  const [coords, setCoords] = useState({});
  const { longitude, latitude } = coords;

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSearchword(
          position.coords.latitude + "/" + position.coords.longitude
        );
        setCoords(position.coords);
      },
      () => console.debug("Location not available!")
    );
  };
  return (
    <>
      <Title level={1}>Dein Klimacheck</Title>
      <Row
        style={{ height: "100%" }}
        align={"stretch"}
        justify={"space-between"}
      >
        <Col md>
          <Row gutter={16} align={"middle"} justify={"center"} wrap>
            <Space size={"middle"} align={"start"}>
              <Col sm>
                <Title level={5} style={{ marginTop: 5 }}>
                  Wie läuft der Klimaschutz in/bei ..
                </Title>
              </Col>
              <Col sm>
                <Row>
                  <Space direction={"horizontal"}>
                    <AutoComplete
                      value={searchWord}
                      options={[
                        { label: "Münster", value: "Münster (Westfalen)" },
                      ]}
                      style={{ width: 200 }}
                      onSelect={(text) => onCitySelect(text)}
                      // onSearch={onSearch}
                      onChange={() => setSearchword(searchWord)}
                      placeholder={"Stadt / Unternehmen"}
                    />
                  </Space>
                </Row>

                <Row justify={"end"}>
                  <Button
                    type={"link"}
                    size={"small"}
                    onClick={() => getLocation()}
                  >
                    Meinen Standort verwenden
                  </Button>
                </Row>
              </Col>
              <Col>
                {searchWord && (
                  <Button shape="circle" icon={<ArrowRightOutlined />} />
                )}
              </Col>
            </Space>
          </Row>
        </Col>
        <Col span={12} md style={{ height: "90%" }}>
          <div style={{ height: "100%", overflow: "hidden", display: "flex" }}>
            <MapChart lat={latitude} lon={longitude} />
          </div>
        </Col>
      </Row>
    </>
  );
};
