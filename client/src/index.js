import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import SearchProvider from './context/search/SearchProvider';
import UserProvider from './context/user/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </UserProvider>
  </React.StrictMode>
);
