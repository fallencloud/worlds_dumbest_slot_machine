class Machine extends React.Component {
  state = {
    fruits: this.props.fruits,
    msg: 'You lose!'
  };

  getFruits = () => {
    const result = [];
    let counter = 0;
    let fruitIndex;

    while (counter < 3) {
      fruitIndex = Math.floor(Math.random() * 3);
      console.log(fruitIndex);
      result.push(this.props.fruits[fruitIndex]);
      counter++;
    }

    return result;
  };

  findWinner = pull => {
    console.log(pull);
    let msg;
    //if the fruits match
    if (pull[0] === pull[1] && pull[0] === pull[2]) {
      //win
      msg = 'You win!';
    } else {
      //else lose
      msg = 'You lose!';
    }

    return msg;
  };

  handleNewPull = () => {
    let slotPull = this.getFruits();
    console.log(slotPull);
    let winMsg = this.findWinner(slotPull);

    this.setState(() => {
      return { fruits: slotPull, msg: winMsg };
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.fruits}</p>
        <p>{this.state.msg}</p>
        <button onClick={this.handleNewPull}>Pull</button>
      </div>
    );
  }
}
