export const WINNING_COMBINATIONS = [
  // Horisontella rader
  [
    {row: 0, col: 0}, 
    {row: 0, col: 1},
    {row: 0, col: 2}
  ],
  [
    {row: 1, col: 0}, 
    {row: 1, col: 1},
    {row: 1, col: 2}
  ],
  [
    {row: 2, col: 0}, 
    {row: 2, col: 1},
    {row: 2, col: 2}
  ],
  
  // Vertikala kolumner
  [
    {row: 0, col: 0}, 
    {row: 1, col: 0},
    {row: 2, col: 0}
  ],
  [
    {row: 0, col: 1}, 
    {row: 1, col: 1},
    {row: 2, col: 1}
  ],
  [
    {row: 0, col: 2}, 
    {row: 1, col: 2},
    {row: 2, col: 2}
  ],
  
  // Diagonaler
  [
    {row: 0, col: 0}, 
    {row: 1, col: 1},
    {row: 2, col: 2}
  ],
  [
    {row: 0, col: 2}, 
    {row: 1, col: 1},
    {row: 2, col: 0}
  ]
];