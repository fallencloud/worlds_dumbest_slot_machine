class Machine extends React.Component {
  render() {
    //choose 3 random fruits
    let getFruits = () => {
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

    let findWinner = fruits => {
      let msg;
      //if the fruits match
      if (fruits[0] === fruits[1] && fruits[0] === fruits[2]) {
        //win
        msg = 'You win!';
      } else {
        //else lose
        msg = 'You lose!';
      }

      return msg;
    };

    //print fruits and results
    let slotPull = getFruits();
    let winMsg = findWinner(slotPull);

    return (
      <div>
        <p>{slotPull}</p>
        <p>{winMsg}</p>
      </div>
    );
  }
}
