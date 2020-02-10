import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import Loader from "../../components/Loader";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const Typepo = styled.Text`
  color: ${TINT_COLOR};
`;

const MoviesPresenter = ({ loading }) => (
  <Container>{loading ? <Loader /> : <Typepo>Movies</Typepo>}</Container>
);

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default MoviesPresenter;
