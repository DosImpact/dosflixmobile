import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import Loader from "../../components/Loader";
import MovieSlider from "../../components/MovieSlider";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const Typepo = styled.Text`
  color: ${TINT_COLOR};
`;

const MoviesPresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
      {upcoming ? (
        <Section title="Upcoming Movies">
          {upcoming
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section horizontal={false} title="Popular Movies">
          {popular
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                horizontal={true}
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Popular Movies">
          {popular
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                voteAvg={movie.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string
};

export default MoviesPresenter;
