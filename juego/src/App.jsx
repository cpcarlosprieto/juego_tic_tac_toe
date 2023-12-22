// Se importa useState desde la biblioteca React
import { useState } from 'react'
// Se importa la biblioteca "canvas-confetti" para efectos de confeti
import confetti from 'canvas-confetti';

// Se importa el componente Square desde el archivo './components/Square.jsx'
import { Square } from './components/Square.jsx'
// Se importa la constante TURNS desde el archivo './constants.js'
import { TURNS } from './constants.js'
// Se importa las funciones checkWinnerFrom y checkEndGame desde el archivo './logic/board.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
// Se importa el componente WinnerModal desde el archivo './components/WinnerModal.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
// Se importa las funciones saveGameToStorage y resetGameStorage desde el archivo './logic/storage/index.js'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

// Función principal del componente App
function App() {
  // Estado para el tablero del juego, se inicializa desde el almacenamiento local o con un tablero vacío
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  // Estado para el turno actual, se inicializa desde el almacenamiento local o con el valor de TURNS.X
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // Estado para el ganador del juego, se inicia como null
  const [winner, setWinner] = useState(null)

  // Función para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null)) // Restablece el tablero a un estado vacío
    setTurn(TURNS.X) // Establece el turno inicial en TURNS.X
    setWinner(null) // Reinicia el ganador a null

    resetGameStorage() // Limpia el almacenamiento local del juego
  }

  // Función para actualizar el tablero cuando un jugador realiza un movimiento
  const updateBoard = (index) => {
    if (board[index] || winner) return // No se actualiza si la casilla ya está ocupada o si hay un ganador
    const newBoard = [...board] // Crea una copia del tablero
    newBoard[index] = turn // Coloca el símbolo del jugador actual en la casilla
    setBoard(newBoard) // Actualiza el tablero
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X // Cambia el turno al siguiente jugador
    setTurn(newTurn) // Actualiza el turno
    saveGameToStorage({ // Guarda el estado actual del juego en el almacenamiento local
      board: newBoard,
      turn: newTurn
    })
    const newWinner = checkWinnerFrom(newBoard) // Comprueba si hay un ganador en el nuevo tablero
    if (newWinner) {
      confetti() // Dispara efecto de confeti
      setWinner(newWinner) // Establece el ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Si no hay ganador, pero se ha llenado el tablero, hay un empate
    }
  }

  // Renderiza el contenido del componente
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {/* Componente WinnerModal para mostrar el resultado del juego */}
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

// Exporta el componente App como componente principal
export default App
