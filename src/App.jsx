import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <div className="row">
        <h1 className="mt-3">
          Go Watch a Movie!
        </h1>
        <hr className="mb=3"></hr>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-group-item">
                <Link to="/movies">Movies</Link>
              </li>
              <li className="list-group-item">
                <Link to="/admin">Management</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-md-10">
        <Switch>
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/movies">
              <Movies/>
            </Route>
            <Route path="/admin">
              <Admin/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>    
    </BrowserRouter>
  )
}

function Home() {
  return <h2>Home</h2>
}

function Movies() {
  return (
  <h2>Movies</h2>
  )
}

function Admin() {
  return <h2>Management</h2>
}

export default App