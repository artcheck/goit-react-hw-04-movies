import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";
import styles from "./Cast.module.css";

export default class Cast extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    moviesList: [],
  };

  componentDidMount() {
    api
      .getMovieCredits(this.props.id)
      .then((cast) => this.setState({ moviesList: cast }))
      .catch((error) => console.log(error));
  }

  render() {
    const { moviesList } = this.state;
    return (
      <ul className={styles.list}>
        {moviesList.map((actor) => (
          <li className={styles.item} key={actor.id}>
            <div>
              <img
                src={
                  actor.profile_path
                    ? `http://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : `https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg`
                }
                alt={`Actor: ${actor.name}`}
                width={200}
              />
            </div>
            <h3 className={styles.title}>{actor.name}</h3>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
