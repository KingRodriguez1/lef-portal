import { Layout, Menu } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import * as PropTypes from "prop-types";
import { StartPage } from "./StartPage";
import { ResultPage } from "./ResultPage";
import { ResultEntry } from "./resultPageComponents/ResultEntry";
import { Imprint } from "./Imprint";
import { SignInPage } from "./SignInPage";
import { SignUpPage } from "./SignUpPage";

const { Header, Footer, Content } = Layout;
const pages = [
  {
    id: "1",
    label: "Klimacheck",
    to: "/",
  },
  {
    id: "2",
    label: "Impressum",
    to: "/impressum",
    style: { float: "right" },
  },
  {
    id: "3",
    label: "Einloggen",
    to: "/signIn",
    style: { float: "right" },
  },
];

ResultEntry.propTypes = { question: PropTypes.string };

const MainLayout = ({ location = {}, history = {} }) => {
  const { state = {} } = location;
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
              <Menu.Item key={page.id} style={page.style}>
                <Link to={page.to}>{page.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content>
        <div
          className="site-layout-content"
          style={{ padding: 15, height: "100%" }}
        >
          <Switch>
            <Route path="/impressum">
              <Imprint />
            </Route>

            <Route path={"/result"}>
              <ResultPage city={state.city} onBack={() => history.goBack()} />
            </Route>

            <Route path={"/signIn"}>
              <SignInPage />
            </Route>

            <Route path={"/signUp"}>
              <SignUpPage />
            </Route>

            <Route path="/">
              <StartPage
                onCitySelect={(city) => history.push("/result", { city })}
              />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Local Emission Framework 2021 (c)
      </Footer>
    </Layout>
  );
};

export default withRouter(MainLayout);
