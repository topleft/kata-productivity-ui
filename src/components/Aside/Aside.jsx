import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import UploadAside from '../UploadAside';

const Aside = () => {

  return (
    <div className='aside'>
      <Switch>
        <Route path={'/dashboard'} component={null}></Route>
        <Route path={'/sessions'} component={null}></Route>
        <Route exact path={'/'} component={UploadAside}></Route>
        <Route path={'/files'} component={null}></Route>
        <Route path={'/conversations'} component={null}></Route>
        <Route path={'/settings'} component={null}></Route>
      </Switch>
    </div>
  );

};

export default Aside;
