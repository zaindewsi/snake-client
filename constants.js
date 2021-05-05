//CONNECTION
const IP = "135.23.222.131";
const PORT = 50542;

//MOVEMENT
const MOVE_UP = "w";
const MOVE_UP_ARROW = "\u001B\u005B\u0041";
const MOVE_DOWN = "s";
const MOVE_DOWN_ARROW = "\u001B\u005B\u0042";
const MOVE_LEFT = "a";
const MOVE_LEFT_ARROW = "\u001B\u005B\u0044";
const MOVE_RIGHT = "d";
const MOVE_RIGHT_ARROW = "\u001B\u005B\u0043";

//MESSAGES
const MESSAGES = {
  z: "Zain in the house",
  x: "What's poppin?",
  c: "cy@ nerdz",
};

//NAME
const args = process.argv.slice(2);
let initials = "";
if (args.length > 1 || args[0].length > 3) {
  console.log(
    "Please enter initials as a single argument less than or equal to 3 characters"
  );
  process.exit();
} else {
  initials += args[0];
}

const USER = initials;

module.exports = {
  IP,
  PORT,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  MOVE_LEFT_ARROW,
  MOVE_RIGHT_ARROW,
  MOVE_UP_ARROW,
  MOVE_DOWN_ARROW,
  MESSAGES,
  USER,
};
