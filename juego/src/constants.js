// Constante que define los turnos de los jugadores
export const TURNS = {
  X: '❌', // Jugador X está representado por el emoji ❌
  O: '⚪'  // Jugador O está representado por el emoji ⚪
}

// Constante que define todas las combinaciones ganadoras en el juego Tic Tac Toe
export const WINNER_COMBOS = [
  [0, 1, 2],  // Combinación ganadora en la primera fila
  [3, 4, 5],  // Combinación ganadora en la segunda fila
  [6, 7, 8],  // Combinación ganadora en la tercera fila
  [0, 3, 6],  // Combinación ganadora en la primera columna
  [1, 4, 7],  // Combinación ganadora en la segunda columna
  [2, 5, 8],  // Combinación ganadora en la tercera columna
  [0, 4, 8],  // Combinación ganadora en la diagonal de izquierda a derecha
  [2, 4, 6]   // Combinación ganadora en la diagonal de derecha a izquierda
]
