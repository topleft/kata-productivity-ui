import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import Events from './components/Events';
import './styles/main.scss';
import ContentContainer from './components/ContentContainer';

const Conversations = (props) => <ContentContainer {...props} title={'Conversations'}></ContentContainer>;

const Dashboard = (props) => <ContentContainer {...props} title={'Dashboard'}></ContentContainer>;

const Files = (props) => <ContentContainer {...props} title={'Files'}></ContentContainer>;

const Sessions = (props) => <ContentContainer {...props} title={'Sessions'}></ContentContainer>;

const Settings = (props) => <ContentContainer {...props} title={'Settings'}></ContentContainer>;

const NotFound = (props) => <ContentContainer {...props} title={'404 Not Found'}></ContentContainer>;

const WrappedEvents = (props) => <ContentContainer {...props} title={'Create Event'}><Events/></ContentContainer>;

const App = () => (
  <BrowserRouter>
    <div>
      <div className='content--page'>
        <TopBar/>
        <Sidebar/>
        <Aside/>
        <div className='content--main'>
          <Switch>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/sessions' component={Sessions}></Route>
            <Route path='/events' component={WrappedEvents}></Route>
            <Route path='/files' component={Files}></Route>
            <Route path='/conversations' component={Conversations}></Route>
            <Route path='/settings' component={Settings}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
