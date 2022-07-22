import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <>
      <Head>
      
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Image App</title>
        {/* Link To CSS */}
        <Link rel="stylesheet" href="style.css" />
        {/* Box Icons */}
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />


      </Head>
  
      {/*Header*/}
      <header>
        {/*Nav*/}
        <div className="nav container">
          <a href="#" className="logo" />
          {/*Cart-Icon*/}
          <i className="bx bx-shopping-bag" id="cart-icon" />
          {/*Cart*/}
          <div className="cart">
            <h2 className="cart-title">Wolf Valleys Space Center</h2>
            <p className="cart-description">
              Wolf Valleys Space center is the place to be if you like everything
              related to planets. I know it&apos;s a bit meta, but come see by yourself.
            </p>
            {/*Content*/}
            <div className="cart-content">
              <div className="cart-box"></div>
            </div>
            {/*Total*/}
            <div className="total">
              <div className="total-title">DEPARTURES</div>
            </div>
            <div className="div1">
              <img
                src="assets/resources/assets2/planet-loader.svg"
                alt=""
                className="img"
              />
              <div className="div2">
                <p className="p1">To: Planet Alpha</p>
                <p className="p2">23/02/2022 - 02:24pm</p>
              </div>
            </div>
            <div className="div1">
              <img
                src="assets/resources/assets2/planet-loader.svg"
                alt=""
                className="img"
              />
              <div className="div2">
                <p className="p1">To: Planet Alpha</p>
                <p className="p2">23/02/2022 - 02:24pm</p>
              </div>
            </div>
            <div className="div1">
              <img
                src="assets/resources/assets2/planet-loader.svg"
                alt=""
                className="img"
              />
              <div className="div2">
                <p className="p1">To: Planet Alpha</p>
                <p className="p2">23/02/2022 - 02:24pm</p>
              </div>
            </div>
            <div className="div1">
              <img
                src="assets/resources/assets2/planet-loader.svg"
                alt=""
                className="img"
              />
              <div className="div2">
                <p className="p1">To: Planet Alpha</p>
                <p className="p2">23/02/2022 - 02:24pm</p>
              </div>
            </div>
            <div className="div1">
              <img
                src="assets/resources/assets2/planet-loader.svg"
                alt=""
                className="img"
              />
              <div className="div2">
                <p className="p1">To: Planet Alpha</p>
                <p className="p2">23/02/2022 - 02:24pm</p>
              </div>
            </div>
            <div className="div1">
              <img
                src="assets/resources/assets2/planet-loader.svg"
                alt=""
                className="img"
              />
              <div className="div2">
                <p className="p1">To: Planet Alpha</p>
                <p className="p2">23/02/2022 - 02:24pm</p>
              </div>
            </div>
            {/*Buy Button*/}
            <button type="button" className="btn-buy">
              Book
            </button>
            {/*Cart Close*/}
            <i className="bx bx-x" id="close-cart" />
          </div>
        </div>
      </header>
      {/*Shop*/}
      <section className="shop container">
        <h2 className="section-title">Spacious</h2>
        {/*Content*/}
        <div className="shop-content">
          {/*Box 1*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-1.svg"
              alt=""
              className="product-img"
            />
            <h2 className="product-title">Wolf Valleys Space Center</h2>
            <span className="price">Number of flights: 1596</span>
            <i className="bx bx-shopping-bag add-cart" />
          </div>
          {/*Box 2*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-2.svg"
              alt=""
              className="product-img"
              />
            <h2 className="product-title">Jordyn Cliff Space Center</h2>
            <span className="price">Number of flights: 1596</span>
          </div>
          {/*Box 3*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-3.svg"
              alt=""
              className="product-img"
              />
            <h2 className="product-title">Space Center</h2>
            <span className="price">Number of flights: 1596</span>
          </div>
          {/*Box 4*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-4.svg"
              alt=""
              className="product-img"
              />
            <h2 className="product-title">Space Center B</h2>
            <span className="price">Number of flights: 1596</span>
          </div>
          {/*Box 5*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-5.svg"
              alt=""
              className="product-img"
            />
            <h2 className="product-title">Space Center C</h2>
            <span className="price">Number of flights: 1596</span>
          </div>
          {/*Box 6*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-6.svg"
              alt=""
              className="product-img"
            />
            <h2 className="product-title">Space Center D</h2>
            <span className="price">Number of flights: 1596</span>
          </div>
          {/*Box 7*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-7.svg"
              alt=""
              className="product-img"
              />
            <h2 className="product-title">Space Center E</h2>
            <span className="price">Number of flights: 1596</span>
          </div>
          {/*Box 8*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-8.svg"
              alt=""
              className="product-img"
              />
            <h2 className="product-title">Space Center F</h2>
            <span className="price">Number of flights: 1596</span>
          </div>
          {/*Box 9*/}
          <div className="product-box">
            <img
              src="assets/resources/additional-assets/planets/planet-9.svg"
              alt=""
              className="product-img"
              />
            <h2 className="product-title">Space Center G</h2>
            <span className="price">Number of flights: 1596</span>
          </div>
        </div>
      </section>
      <footer className="center">
        <button className="btn second">Previous</button>
        <button className="btn second">Next</button>
      </footer>
      <Script src="main.js"></Script>
    </>

  )
}

export default Home
