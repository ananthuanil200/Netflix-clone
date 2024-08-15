import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from "./Sign-in/SignIn"

const PUBLISHABLE_KEY ="pk_test_dGVuZGVyLWdlY2tvLTg5LmNsZXJrLmFjY291bnRzLmRldiQ"
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// Import your publishable key

root.render(
  <React.StrictMode>
 <App/>
  </React.StrictMode>
);
