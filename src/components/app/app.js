import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// import Main from '../main/main';

// import { APIRoute } from '../../const.js';
import Main from '../main/main';


const App = () => (

    <Router>

    <Switch>
      <Route >
      <Main />
      </Route>
    </Switch>
    </Router>

  );


export default App;
