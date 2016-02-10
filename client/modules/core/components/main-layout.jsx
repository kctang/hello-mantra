import React from 'react';

const Layout = ({content}) => (
  <div>
    <header>
      <h1>Hello, World!</h1>
    </header>
    <div>
      {content}
    </div>
    <footer>
      <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</small>
    </footer>
  </div>
);

export default Layout;