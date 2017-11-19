import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Props {
  results: Array<string>;
}

const Results: React.SFC<Props> = (props: Props) => (
  <div>
    <ul>
      {props.results.map((result, i) => (
        <li key={i}>{result}</li>
      ))}
    </ul>
  </div>
);

Results.propTypes = {
  results: PropTypes.array.isRequired
};

export { Results };
