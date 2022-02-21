import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';
import { authenticate } from './store/session';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AddPostForm from './components/Forms/AddPostForm';
import EditPostForm from './components/Forms/EditPostForm';
// import PostDetail from './components/PostDetail/index.js';
import PostDetailPage from './components/PostDetailPage';
import EditCommentForm from './components/Forms/EditCommentForm';
import SearchResults from './components/SearchResults/index.js';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  // const session = useSelector(state=> state?.user?.session)

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

        {/* <Route path='/sign-up' exact>
          <SignUpForm />
        </Route> */}

        <ProtectedRoute path='/users' exact>
          <UsersList/>
        </ProtectedRoute>

        <ProtectedRoute path='/users/:userId' exact>
          <UserProfile />
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
          <PostDetailPage />
        </ProtectedRoute>

        <ProtectedRoute path='/comments/:commentId/edit' exact>
          <EditCommentForm />
        </ProtectedRoute>

        <ProtectedRoute path='/search-results/:searchQuery' exact >
          <SearchResults />
        </ProtectedRoute>

        
      </Switch>

      <Footer />  
          
    </BrowserRouter>
  );
}

export default App;
