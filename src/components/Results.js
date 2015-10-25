import React, {PropTypes} from 'react';

const Results = (props) => (
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
}

export {Results};
