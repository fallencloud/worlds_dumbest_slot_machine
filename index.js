class App extends React.Component {
  render() {
    return (
      <div>
        <Machine fruits={['🍊', '🍇', '🍒']} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
