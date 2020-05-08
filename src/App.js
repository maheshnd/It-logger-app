import React, { useEffect, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/tech/AddTechModal';
import Logs from './components/logs/Logs';
import Techs from './components/tech/Techs';

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Meterialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <Techs />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
