class Board {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = generateBoardId();
    this.name = name;
  }
}

export default Board;

// NOTE: This is a temporary function to generate a unique ID for the board
const generateBoardId = () => {
  return Math.random().toString(36).substring(2, 15);
};
