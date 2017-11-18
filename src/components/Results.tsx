import * as React from 'react';
import { PropTypes } from 'prop-types';

interface P {
  results: Array<string>;
}
interface S {}

class Results extends React.Component<P, S> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.results.map((result, i) => (
            <li key={i}>{result}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Results.propTypes = {
  results: PropTypes.array.isRequired
}

export {Results};
