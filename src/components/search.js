import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Index } from 'elasticlunr';
import { MyContext } from './context';

// Search component
class Search extends Component {
  static propTypes = {
    searchIndex: PropTypes.object,
  };

  getOrCreateIndex = () => {
    const { searchIndex } = this.props;
    return this.index ? this.index : Index.load(searchIndex);
  };

  render() {
    return (
      <MyContext.Consumer>
        {({ search, handleChange }) => (
          <input
            id="search"
            type="text"
            value={search}
            autoComplete="off"
            placeholder="Search for a recipe by title, cook, or meal type (breakfast, lunch, etc.)"
            onChange={e => {
              const index = this.getOrCreateIndex();
              handleChange({
                search: e.target.value,
                results: index
                  .search(search, { expand: true })
                  .map(({ ref }) => index.documentStore.getDoc(ref)),
              });
            }}
          />
        )}
      </MyContext.Consumer>
    );
  }
}

export default Search;
