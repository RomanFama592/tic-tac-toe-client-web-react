import '@css/App.css'
import Game from '@components/Game.tsx'

function App() {
  return (
    <div className='main-container'>
      <h1>Ta Te Ti</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        {/* <Game size={7} />
        <Game size={6} />
        <Game size={5} />
        <Game size={4} /> */}
        <Game />
      </div>
    </div>
  )
}

export default App
