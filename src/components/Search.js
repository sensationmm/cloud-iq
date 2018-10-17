import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/css/search.css';

/*
 * Search
 *
 * Renders search form element and calls search function
 *
 * @author Kevin Reynolds <kevin@sensationmultimedia.co.uk>
 *
 * @param {string} location - current location being displayed
 * @param {function} search - function to call api to fetch data
*/

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
  }

  onChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  onSearch = () => {
    this.props.search(this.state.city);
  }

  render() {
    const { city } = this.state;
    const { location } = this.props;

    const placeholder = (location) ? location : 'Search weather by city';

    return (
      <div className="search">
        <input type="search" placeholder={placeholder} value={city} onChange={this.onChange} />
        <button className="button hollow expanded" onClick={this.onSearch}>Search</button>
      </div>
    );
  }
}

Search.propTypes = {
  location: PropTypes.string,
  search: PropTypes.func.isRequired
};

export default Search;
