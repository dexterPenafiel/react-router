import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/about',
    exact: true,
    sidebar: () => <div>About</div>,
    main: () => <h2>About</h2>
  },
  {
    path: '/contact-us',
    exact: true,
    sidebar: () => <div>Contact Us</div>,
    main: () => <div><h2 class='h1-responsive font-weight-bold text-center my-4'>Contact us</h2> <p class='text-center w-responsive mx-auto mb-5'>Do you have any questions?Please do not hesitate to contact us directly.Our team will come back to you within
    a matter of hours to help you.</p></div>
  }
];

function SidebarExample() {
  return (
    <div>
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="sidebar">
                <div>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/about'>About</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Contact Us</Link>
                    </li>
                  </ul>

                  {routes.map((route, index) =>
                    (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.sidebar}
                      />

                    )
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="main">
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                )
                )}
              </div>
            </div>

          </div>
        </div>

      </Router>
    </div>
  )
}

export default SidebarExample;
