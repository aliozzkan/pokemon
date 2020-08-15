import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';

// Pagination
import { BrowserRouter, Switch } from 'react-router-dom';
import { routers } from '@/router';

import '@/assets/styles/plugins/normalize.css';
import '@/assets/styles/style.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routers.map((route, key) => {
            return (
              <route.route
                key={key}
                path={route.path}
                exact={route.exact}
                roles={route.roles}
                component={(props) => {
                  return (
                    <Suspense fallback={<div></div>}>
                      <route.component {...props} />
                    </Suspense>
                  );
                }}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
