import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import './index.sass'
import Header from './components/header/header'


function App() {
  return (
    <Fragment>
      <Header/>
      
    </Fragment>
  );
}

ReactDOM.render((
  <App/>
), document.getElementById('root'));