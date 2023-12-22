// Función para guardar el estado del juego en el almacenamiento local del navegador
export const saveGameToStorage = ({ board, turn }) => {
  // Guarda el tablero como una cadena JSON en el almacenamiento local
  window.localStorage.setItem('board', JSON.stringify(board))

  // Guarda el turno actual en el almacenamiento local
  window.localStorage.setItem('turn', turn)
}

// Función para restablecer el almacenamiento local del juego
export const resetGameStorage = () => {
  // Elimina el tablero almacenado en el almacenamiento local
  window.localStorage.removeItem('board')

  // Elimina el turno almacenado en el almacenamiento local
  window.localStorage.removeItem('turn')
}
