import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Sidebar from './components/layout/Sidebar';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { useEffect } from 'react';
import { loadUser } from './actions/auth';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import cobaRedux from './coba';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Alert />
          <Routes>
            <Route
              exact path='/dashboard' 
              element={
                <PrivateRoute component={Dashboard} />
              }
            />
            <Route
              exact path='/create-profile'
              element={
                <PrivateRoute component={CreateProfile} />
              }
            />
            <Route
              exact path='/edit-profile'
              element={
                <PrivateRoute component={EditProfile} />
              }
            />
            <Route
              exact path='/add-experience'
              element={
                <PrivateRoute component={AddExperience} />
              }
            />
            <Route 
              exact path='/add-education'
              element={
                <PrivateRoute component={AddEducation} />
              }
            />
            <Route
              exact path='/posts'
              element={
                <PrivateRoute component={Posts}/>
              }
            />
            <Route exact path='/profile/:id' Component={Profile} />
            <Route exact path="/profiles" Component={Profiles} />
            <Route exact path="/" Component={Landing} />
            <Route exact path="/register" Component={Register} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/coba" Component={cobaRedux} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
