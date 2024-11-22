import './App.css'
import { CartContextProvider } from './components/contexts/cart-context'

import { RootRouter } from './pages/routs'

function App() {
  return (
    <CartContextProvider>
      <RootRouter />
    </CartContextProvider>
  )
}

export default App
