import {Route, Switch } from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Error from './components/Error';


function App() {
  return(

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route component={Error}/>
    </Switch>
    
  )

}

export default App;

