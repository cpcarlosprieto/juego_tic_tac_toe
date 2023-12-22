// Componente funcional Square
export const Square = ({ children, isSelected, updateBoard, index }) => {
  // Determina las clases CSS a aplicar al elemento <div>
  const className = `square ${isSelected ? 'is-selected' : ''}`

  // Función que maneja el evento de clic en el cuadro
  const handleClick = () => {
    // Llama a la función updateBoard pasando el índice del cuadro
    updateBoard(index)
  }

  // Retorna un <div> con un controlador de eventos para clic
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
