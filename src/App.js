import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './components/page/home/Home';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import {connect} from 'react-redux'
import {logout, checkAuth} from './store/actions/authAction'

class App extends React.Component {
  componentDidMount() {
    this.props.checkAuth()    
  }
  
  render() {
    let {auth, logout} = this.props

    return (  
      <HashRouter>
        <header className="app-header navbar">
          <Navbar/>
        </header>
  
        <div className="app-body">
          <Sidebar auth={auth} logout={logout}/>
  
          <main className="main">
            <div className="container">
              <br/>
                <Switch>        
                  <Route exact path="/" component={Home} />
  
                  <Route exact path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                </Switch>
            </div>
  
            <Footer />
          </main>
        </div>
      </HashRouter>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      checkAuth: () => dispatch(checkAuth()),
      logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
