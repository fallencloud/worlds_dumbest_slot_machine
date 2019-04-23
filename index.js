class App extends React.Component {
  render() {
    return (
      <div>
        <Machine fruits={['🍊', '🍇', '🍒']} />
        <Machine fruits={['🍊', '🍇', '🍒']} />
        <Machine fruits={['🍊', '🍇', '🍒']} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
