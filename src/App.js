import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Container from './layout/Container';
import Content from './layout/Content';
import Sidebar from './layout/Sidebar';
import Widgets from './layout/Widgets';
import Status from './layout/Status';

function App() {
  return (
    <Router>
      <Container>
        <Sidebar/>
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/home" exact component={Content} />
          <Route path="/status" component={Status} />
        </Switch>
        <Widgets/>
      </Container>
    </Router>
    
  )
}

export default App
