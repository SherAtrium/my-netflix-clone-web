import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Pages/Home/home';

import '../MainStyles/global.scss';

const App = () => {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  );
};

export default App;
