import * as React from 'react';
import { render } from 'react-dom';

import { Results } from './components/Results';
import { Search } from './components/Search';
const data = require('./data.json');

interface Props {}
interface State {
  results: Array<string>
}

class App extends React.Component<Props, State> {

  state = { results: [] }

  _searchChange(e) {
    var results = [];
    if (e.target.value) {
      Object.keys(data).forEach(country => {
        const found = data[country].filter(city => {
          return city.toLowerCase().startsWith(e.target.value.toLowerCase())
        });
        if (results.length < 100) {
          results = found.reduceRight((coll,item) => {
            coll.unshift(item);
            return coll;
          }, results);
        }
      });
    }
    this.setState({ results: results });
  }

  render() {
    return (
      <div>
        <h1>My First React TypeScript App</h1>
        <Search update={this._searchChange.bind(this)} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
