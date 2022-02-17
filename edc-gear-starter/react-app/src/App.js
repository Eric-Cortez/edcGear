import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AddPostForm from './components/Forms/AddPostForm';
import EditPostForm from './components/Forms/EditPostForm';
import PostDetails from './components/PostDetails/index.js';
import EditCommentForm from './components/Forms/EditCommentForm';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>


      <NavBar />


      <Switch>
        <Route path='/login' exact>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact>
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/posts/:postId/edit' exact>
          <EditPostForm />
        </ProtectedRoute>
        <ProtectedRoute path='/posts' exact>
          <AddPostForm />
        </ProtectedRoute>
        <ProtectedRoute path='/posts/:postId' exact>
          <PostDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/comments/:commentId/edit' exact>
          <EditCommentForm />
        </ProtectedRoute>
      </Switch>

      <Footer />  
          
    </BrowserRouter>
  );
}

export default App;
