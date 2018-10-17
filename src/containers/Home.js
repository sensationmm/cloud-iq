import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <div>

      Home
    </div>
  );
}

Home.propTypes = {
};

const mapStateToProps = state => ({
  isLoading: state.loader.isLoading
});

export default connect(mapStateToProps)(Home);
