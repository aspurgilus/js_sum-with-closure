'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return number1 => number2 => {
    counter++;

    if (counter > 3 && ((counter - 3) % 2 !== 0)) {
      return 'Bzzz... Error!';
    }

    return number1 + number2;
  };
}

module.exports = makeRobotAccountant;
