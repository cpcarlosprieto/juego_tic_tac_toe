// Se importa el componente Square desde el archivo './Square.jsx'
import { Square } from './Square.jsx'

// Define un componente funcional llamado WinnerModal
export function WinnerModal({ winner, resetGame }) {
  // Si no hay un ganador (winner === null), no muestra nada y retorna null
  if (winner === null) return null

  // Se determina el texto a mostrar en función de si hay un ganador o es un empate
  const winnerText = winner === false ? 'Empate' : 'Ganó:'

  // Retorna un elemento <section> que muestra el mensaje de ganador o empate
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {/* Muestra el símbolo del ganador (si lo hay) utilizando el componente Square */}
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          {/* Botón para reiniciar el juego al hacer clic */}
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
