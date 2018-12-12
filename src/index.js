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

console.log('helllllloooooooo',`${pathPrefix}`)

const App = () => (
  <BrowserRouter basename={pathPrefix}>
    <div>
      <div className='content--page'>
        <TopBar/>
        <Sidebar/>
        <Aside/>
        <div className='content--main'>
          <Switch>
            <Route path={`/dashboard`} component={Dashboard}></Route>
            <Route path={`/sessions`} component={Sessions}></Route>
            <Route path={`/`} component={WrappedEvents}></Route>
            <Route path={`/files`} component={Files}></Route>
            <Route path={`/conversations`} component={Conversations}></Route>
            <Route path={`/settings`} component={Settings}></Route>
            <Redirect to={`/`}/>
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
