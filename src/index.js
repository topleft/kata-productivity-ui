import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
const WrappedEvents = (props) => <ContentContainer {...props} title={'Create Event'}><Events/></ContentContainer>;

const pathPrefix = process.env.PATH_PREFIX || '';

const App = () => (
  <BrowserRouter>
    <div>
      <div className='content--page'>
        <TopBar/>
        <Sidebar/>
        <Aside/>
        <div className='content--main'>
          <Switch>
            <Route path={`${pathPrefix}/dashboard`} component={Dashboard}></Route>
            <Route path={`${pathPrefix}/sessions`} component={Sessions}></Route>
            <Route path={`${pathPrefix}/events`} component={WrappedEvents}></Route>
            <Route path={`${pathPrefix}/files`} component={Files}></Route>
            <Route path={`${pathPrefix}/conversations`} component={Conversations}></Route>
            <Route path={`${pathPrefix}/settings`} component={Settings}></Route>
            <Redirect to={`${pathPrefix}/events`}/>
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
