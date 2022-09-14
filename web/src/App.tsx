interface TituloParaOTextoProps {
  text: string
}


function TituloParaOTexto (props: TituloParaOTextoProps){
  return (
    <h1>{props.text}</h1>
  )
}


function App() {
  return (
    <div>
      <TituloParaOTexto text="Texto 1" />
      <TituloParaOTexto text="Texto 2" />
      <TituloParaOTexto text="Texto 3" />
      <TituloParaOTexto text="Aqui ta indo" />
    </div>
  )
}

export default App
