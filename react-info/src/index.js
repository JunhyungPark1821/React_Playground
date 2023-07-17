import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

root.render(
  <Page />
);