import * as React from 'react';

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
  update: React.PropTypes.func.isRequired
}

export {Search};
