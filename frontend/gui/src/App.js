import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login'
import Error from './components/error'
import Register from './components/register'
import Dashboard from './components/dashboard'
import Map from './components/map'
import { connect } from 'react-redux'
import * as actions from './store/actions/auth'
import { Component } from 'react';


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              {this.props.isAuthenticated ? <Map {...this.props}/> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/dashboard">
              {this.props.isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route path="*">
              <Error/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: localStorage.getItem('token') !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);