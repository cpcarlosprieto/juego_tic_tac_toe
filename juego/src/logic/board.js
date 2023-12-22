// Se importa la constante WINNER_COMBOS desde el archivo '../constants.js'
import { WINNER_COMBOS } from '../constants.js'

// Función para comprobar si hay un ganador en el tablero
export const checkWinnerFrom = (boardToCheck) => {
  // Itera a través de todas las combinaciones ganadoras
  // para ver si X u O ganaron
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      // Retorna el símbolo del ganador (X o O) si se cumple una combinación ganadora
      return boardToCheck[a]
    }
  }
  // Si no hay ganador, retorna null
  return null
}

// Función para comprobar si el juego ha terminado en empate
export const checkEndGame = (newBoard) => {
  // Comprueba si no hay más espacios vacíos en el tablero
  return newBoard.every((square) => square !== null)
}
