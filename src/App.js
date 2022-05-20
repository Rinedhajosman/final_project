import Home from "./component/Home.js/Home";
import {Fragment} from 'react';
import Navs from './component/Navs/Navs'

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
    </Fragment>
  );
}

export default App;
