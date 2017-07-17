import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

const keyGen = () => Math.random();

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { content: 'initial' };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const content = faker.fake("{{lorem.sentence}}");
    this.setState({ content })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {cowsay.say({ text: this.state.content }).split("\n").map(i => <div key={keyGen()}>{i}</div>)}
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
