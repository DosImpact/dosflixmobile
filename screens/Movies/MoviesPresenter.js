import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import Loader from "../../components/Loader";
import MovieSlider from "../../components/MovieSlider";

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
      <MovieSlider movies={nowPlaying} />
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
