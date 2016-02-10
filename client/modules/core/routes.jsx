import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main-layout.jsx';
import Line from './containers/line.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    action() {
      mount(MainLayoutCtx, {
        content: <Line/>
      });
    }
  });
}
