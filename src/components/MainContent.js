import { Layout, Menu, Space } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import Title from "antd/es/typography/Title";
import { withRouter } from "react-router";

const { Header, Footer, Sider, Content } = Layout;
const pages = [
  {
    id: "1",
    label: "Home",
    to: "/",
  },
  {
    id: "2",
    label: "Impressum",
    to: "/impressum",
  },
];

const StartPage = () => (
  <Space direction={"vertical"} size={"large"}>
    <Title level={1}>Dein Klimacheck</Title>
    <Title level={4}>Wie läuft der Klimaschutz in/bei ..</Title>
  </Space>
);

const Impressum = () => <Title level={1}>Impressum</Title>;

const MainContent = ({ location = {} }) => {
  const selectedKeys = pages
    .filter((p) => p.to === location.pathname)
    .map((page) => page.id);
  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header>
        <div className="logo">LEF</div>
        <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
          {pages.map((page) => {
            return (
              <Menu.Item key={page.id}>
                <Link to={page.to}>
                  <li className={`nav-item`}>{page.label}</li>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content" style={{ padding: 15 }}>
          <Switch>
            <Route path="/impressum">
              <Impressum />
            </Route>

            <Route path="/">
              <StartPage />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Local Emission Framework 2021
      </Footer>
    </Layout>
  );
};

export default withRouter(MainContent);
