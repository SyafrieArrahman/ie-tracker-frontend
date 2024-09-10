import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddTransaction from './components/AddTransaction';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/add-transaction" component={AddTransaction} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
