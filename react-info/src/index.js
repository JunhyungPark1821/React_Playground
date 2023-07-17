import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './react-logo.png';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Header() {
  return (
    <header>
      <nav>
          <img src={logo} width="40px" alt='logo' />
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

function MainComponent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
          <li>It's a popular library, so I'll be 
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}

root.render(
  <Page />
);