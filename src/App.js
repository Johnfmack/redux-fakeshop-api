import Header from './containers/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetails'
// redux
// action creator - action - dispatch - reducers - store

function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       <Switch>
       <Route path="/" exact component={ProductListing} />
       <Route path="/product/:productId" exact component={ProductDetail} />
       <Route>404 Not Found</Route> 
       </Switch>
      </Router>

    </div>
  );
}

export default App;
