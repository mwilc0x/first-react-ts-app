import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Props {
  update: React.FormEventHandler<any>;
}

const Search: React.SFC<Props> = (props: Props) => (
  <input onChange={props.update} />
);

Search.propTypes = {
  update: PropTypes.func.isRequired
};

export { Search };
