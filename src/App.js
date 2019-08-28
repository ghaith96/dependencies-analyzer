import React from 'react';
import Card from './Components/Card';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
    this.packages = ['sss', 'history', 'test', 'mocha', 'jasmine', 'react', 'yarn']
  }

  render() {
    return (
      <div>
        <div>
          <input className="w-50 blue br2 pa2 ma3 f4 lh-solid" value={this.state.url} onChange={this.handleTextChange} />
          <button onClick={this.handleAnalyzeClick} className="blue pa2">Analyze</button>
        </div>
        <div className='tc flex-row justify-center align-center' style={{ display: 'flex' }}>
          {
            this.packages.map((e, i) => <Card key={e.pkgName || `${i}`} pkgName={e} />)
          }
        </div>
      </div>
    )
  }

  handleTextChange = (event) => this.setState({ url: event.target.value })
  handleAnalyzeClick = (event) => console.log('hii')
}