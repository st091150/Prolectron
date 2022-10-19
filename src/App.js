

function App() {
  return ( 
  <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40"  >
     <div className="d-flex align-center">
     < img width= {40} height={40} src = "/img/logo.svg" alt=""  />
      <div className="headerInfo">
      <h3 className="text-uppercase"> Prolectron</h3>
      <p className="opacity-5">Магазин лучших электронных товаров</p>
      </div>
     </div>
      <ul className="d-flex ">
        <li className="mr-30"> <img width= {18} height={12.27} src = "/img/basket.svg" alt="" /> 
        <span>5000 руб.</span>
        </li>
        <li>
          <img width= {20} height={20} src = "/img/user.svg" alt=""/>
        </li>
        </ul>
    </header>
    <div className="content p-40">
      <h1 className="mb-40">Товары</h1>
      <div className="d-flex">
      <div className="card">
        <img width={133} height={112} src="/product/1.jpg" alt="telephone" />
        <h5>6.5" Смартфон Samsung Galaxy A53 5G 128 ГБ белый</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
              <b>30 999 ₽</b>
            
          </div>
           <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
           </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/product/2.jpg" alt="telephone" />
        <h5>6.67" Смартфон POCO F4 5G 128 ГБ зеленый AMOLED </h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
              <b>31 299 ₽</b>
            
          </div>
           <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
           </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/product/3.jpg" alt="telephone" />
        <h5>6.5" Смартфон Samsung Galaxy A52 256 ГБ голубой</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
              <b>31 499 ₽</b>
            
          </div>
           <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
           </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/product/4.jpg" alt="telephone" />
        <h5>6.67" Смартфон POCO X4 Pro 5G 256 ГБ желтый</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
              <b>32 999 ₽</b>
            
          </div>
           <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
           </button>
        </div>
      </div>
    </div>
    </div>
  </div>
); 
  }


export default App;
