import * as React from 'react';
import { PropTypes } from 'prop-types';

interface P {
  update: React.FormEventHandler;
}
interface S {}

class Search extends React.Component<P, S> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input onChange={this.props.update} />
    );
  }
}

Search.propTypes = {
  update: PropTypes.func.isRequired
}

export {Search};
