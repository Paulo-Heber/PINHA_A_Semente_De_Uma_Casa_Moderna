import './App.css'
import { CartContextProvider } from './components/contexts/cart-context'
import { QuantityItemsButtonContextProvider } from './components/contexts/quantity-Items-button-context'
import { RootRouter } from './pages/routs'

function App() {
  return (
    <CartContextProvider>
      <QuantityItemsButtonContextProvider>
        <RootRouter />
      </QuantityItemsButtonContextProvider>
    </CartContextProvider>
  )
}

export default App
