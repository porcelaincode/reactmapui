import React, {useState} from "react";
import "./App.css";
import { Layout } from 'antd';
import { connect } from "react-redux";

import MapDrawer from "./components/extras/MapDrawer";
import MainForm from "./components/page/MainForm";
import MainMap from "./components/page/MainMap";
import RegionInfo from "./components/page/RegionInfo";

const { Content } = Layout;

function App(props) {
  var webTheme = "light"
  try{
    if(props.mentionendTheme.length !== 0){
      const lastItem = props.mentionendTheme[props.mentionendTheme.length - 1]
      const _theme = lastItem.themeType
      if(_theme===true){
        webTheme="dark"
      }
      else{
        webTheme="light"
      }
    }
    else{
      console.log("Page reloaded")
    }
  }
  catch(error){
    console.log("Theme problem buddy: "+error)
  }

  console.log(`Currently using ${webTheme} theme.`)

  return (
    <div className="App">
      <Layout>
        <Content>
          <MapDrawer useTheme={webTheme} />
          <RegionInfo useTheme={webTheme} />
          <MainForm useTheme={webTheme} />
          <MainMap />
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Map UI ©2021 Created using Ant Design</Footer> */}
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  mentionendTheme: state.toggleThemes.data,
});

export default connect(mapStateToProps)(App);
