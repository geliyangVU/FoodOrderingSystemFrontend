import logo from './logo.svg';
import { Layout } from "antd";
import LoginForm from "./components/LoginForm"
const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>header</Header>
      <Content
        style={{
          padding: "50px",
          maxHeight: "calc(100% - 64px)",
          overflowY: "auto",
        }}
      >
        content
      </Content>
      <LoginForm></LoginForm>
    </Layout>
  );
}

export default App;
