import './App.css'
import './styles/reset.css'
import './styles/cabecalho.css'
function App() {



  return (
    <>
      <header>
        <div className="logo">
          <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">  <img src="./src/img/logo.png" alt="" /></a>
            <div className='logoText'>
                <h1 className='brandName'>PINHA</h1>
                <p className='tagline'>A SEMENTE DE UMA CASA MODERNA</p>
            </div>
        </div>
        <nav>
          <input type="text" />
          <a href="">home</a>
          <a href="">sala</a>
          <a href="">cozinha</a>
          <a href="">quarto</a>
          <a href="">banheiro</a>
          <a href="">área de serviço</a>
          <a href="">escritório</a>

        </nav>
      </header>
      {/* <main>
        <section className='furnitureSection'>
          <div className='furnitureContainer'>

<div className="fornitureHighlighted"></div>

            <a className="productCard">
              <img src="./src/img/Nichos.png" alt="" className="productImg" />
              <div className="productDetails">
                <h1 className='produtcTitle'>Nome do produto</h1>
                <p className='price'>
                  <span>R$ 60,00</span> ou 2x de <span>R$30,00</span></p>
              </div>
            </a>

        

          </div>
        </section>
      </main> */}
    </>
  )
}

export default App
