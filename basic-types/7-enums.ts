/**
 * Base example
 */
enum Color {
  White,
  Red,
  Blue,
}

/**
 * Custom values
 */
enum Role {
  User = 10,
  Moderator = 50,
  Administrator = 100,
}

/**
 * Role example
 */
const RoleAsConst = {
  User: 10,
  Moderator: 50,
  Administrator: 100,
};

Role.User = 12; // Not mutable

RoleAsConst.User = 12; // Mutable unless frozen

/**
 * Abusing enums (in most cases)
 */
type Position = [number, number];
let position: Position = [0, 0];
const mapSize = 999;

enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

function move(direction: Direction, pixels: number) {
  let [x, y] = position;

  function normalize(val: number) {
    if (val < 0) return 0;
    if (val > mapSize) return mapSize;
    return val;
  }

  switch (direction) {
    case Direction.Up:
      position = [normalize(x - pixels), y];
      break;
    case Direction.Down:
      position = [normalize(x + pixels), y];
      break;
    case Direction.Left:
      position = [x, normalize(y - pixels)];
      break;
    case Direction.Right:
      position = [x, normalize(y + pixels)];
      break;
  }
}

move(Direction.Up, 14);
move('Up', 14);

/**
 * Usually the correct way
 */
type DirectionAsType = 'Up' | 'Down' | 'Left' | 'Right';

function moveWithType(direction: DirectionAsType, pixels: number) {
  let [x, y] = position;

  function normalize(val: number) {
    if (val < 0) return 0;
    if (val > mapSize) return mapSize;
    return val;
  }

  switch (direction) {
    case 'Up':
      position = [normalize(x - pixels), y];
      break;
    case 'Down':
      position = [normalize(x + pixels), y];
      break;
    case 'Left':
      position = [x, normalize(y - pixels)];
      break;
    case 'Right':
      position = [x, normalize(y + pixels)];
      break;
  }
}

moveWithType('Up', 14);
moveWithType(Direction.Up, 14);
