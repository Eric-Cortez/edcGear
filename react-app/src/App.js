import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';
import { authenticate } from './store/session';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PostDetailPage from './components/PostDetailPage';
import SearchResults from './components/SearchResults/index.js';
import PageNotFound from './components/PageNotFound';


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

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true}>
          <UserProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true}>
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/search-results/:searchQuery' exact={true} >
          <SearchResults />
        </ProtectedRoute>
        <ProtectedRoute path='/posts/:postId' exact={true}>
          <PostDetailPage />
        </ProtectedRoute>

        <ProtectedRoute>
          <PageNotFound />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/users'  exact={true}>
                  <UsersList/>
                </ProtectedRoute> */}
      </Switch>

      <Footer />  
          
    </BrowserRouter>
  );
}

export default App;
