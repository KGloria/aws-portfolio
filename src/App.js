import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div className="nav">
      <Layout>
          <Header className="header-color" title={<span style={{fontFamily: 'Amatic SC', fontSize: '36px'}}>Kyle S. Gloria</span>} scroll style={{color: 'black', fontSize: '36px'}}>
              <Navigation className="nav-bar">
                  <Link to="/resume" font-size='36px' style={{color: 'black'}}>Resume</Link>
                  <Link to="/projects" style={{color: 'black'}}>Projects</Link>
                  <Link to="/aboutme" style={{color: 'black'}}>About Me</Link>
              </Navigation>
          </Header>
          <Drawer className="drawer-nav" color="black" title={<span style={{fontFamily: 'Amatic SC', fontSize: '36px'}}>Kyle S. Gloria</span>} style={{color: 'black'}}>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/aboutme">About Me</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>

  );
}

export default App;
