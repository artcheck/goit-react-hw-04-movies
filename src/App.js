import React, { lazy, Suspense, Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import routes from "./routes/routes";
import css from "./App.module.css";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const MoviePage = lazy(() => import("./pages/moviePage/MoviePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/movieDetailsPage/MovieDetailsPage")
);

class App extends Component {
  rebder() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <header className={css.Header}>
          <nav>
            <ul className={css.list}>
              <li className={css.listItem}>
                <NavLink
                  exact
                  to={routes.home}
                  className={css.link}
                  activeClassName={css.activeLink}
                >
                  Home
                </NavLink>
              </li>
              <li className={css.listItem}>
                <NavLink
                  to={routes.moviePage}
                  className={css.link}
                  activeClassName={css.activeLink}
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.moviePage} component={MoviePage} />
        </Switch>
      </Suspense>
    );
  }
}

export default App;
