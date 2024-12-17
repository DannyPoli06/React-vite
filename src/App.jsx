import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{/*imagenes public */}
import cuenca from './images/cuenca.jpg'
import tranvia from './images/tranvia.jpg'
{/*imagenes public*/}


{/*datos importados*/}
import Datos from './componentes/datos'
import Estudios from './componentes/estudios'
import Herramientas from './componentes/herramientas'
{/*datos importados */}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (DEBER2)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>Imagenes desde PUBLIC</h1>
      <img src="./imagenes/playa.jpg" alt="Imagen1 desde public" class="imagenp"></img>
      <img src="./imagenes/playa2.jpg" alt="Imagen2 desde public" class="imagenp"></img>

      <h1>Imagenes desde SRC</h1>
      <img src={cuenca} alt="imagen3 en src" class="imagens"></img>
      <img src={tranvia} alt="imagen4 en src" class="imagens"></img>

      <div>
      <h1>Aplicación principal</h1>

      <Datos/>
      <Estudios />
      <Herramientas />

    </div>
    </>
  )
}

export default App
