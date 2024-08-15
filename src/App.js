import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import SignInPage from "./Sign-in/SignIn"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,comedy,horror,romance} from './urls'
import { ClerkProvider,RedirectToSignIn  } from '@clerk/clerk-react'
import Page from "./Main/Page"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component
import RedirectHandler from './RedirectHandler';

function App() {
  const PUBLISHABLE_KEY ="pk_test_dGVuZGVyLWdlY2tvLTg5LmNsZXJrLmFjY291bnRzLmRldiQ"
  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  return (
  <div className="App">
  
     <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      signInUrl="/Sign-in" 
      afterSignOutUrl="/Sign-in"  // URL to redirect after sign-out
      signInForceRedirectUrl="/Main"
    >
      
      <Router>
        <Routes>
          <Route path="/Sign-in" element={<SignInPage />} />
          <Route path="/Main" element={<Page />} />
          <Route path="/" element={<RedirectHandler />} /> 
        </Routes>
      </Router>
    </ClerkProvider>
    {/* <SignInPage/> */}
    {/* <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={romance} title='Romance' isSmall/> */}
  </div>
  );
}
export default App;
