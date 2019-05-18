import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyContext = React.createContext(`light`);

class MyProvider extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  state = {
    search: ``,
    results: [],
  };

  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          handleChange: ({ search, results }) => {
            this.setState({ search, results });
          },
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
export { MyContext };
