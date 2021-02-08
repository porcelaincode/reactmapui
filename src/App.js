import "./App.css";
import { Layout } from 'antd';

import MapDrawer from "./components/extras/MapDrawer";
import MainForm from "./components/page/MainForm";
import MainMap from "./components/page/MainMap";
import RegionInfo from "./components/page/RegionInfo";

const { Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <MapDrawer />
          <RegionInfo />
          <MainForm />
          <MainMap />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Map UI ©2021 Created using Ant Design</Footer>
      </Layout>
    </div>
  );
}

export default App;
