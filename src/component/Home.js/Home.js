import React,{Fragment} from 'react'
import Header from './Header';
import './Home.css'
import restaurant from './../../imgs/about-us.jpg'
import ingredients from './../../imgs/ingredients.png'
import Data from '../../Data'
import {Carousel} from 'react-bootstrap'
import person1 from './../../imgs/Chefimg1.jpg'
import person2 from './../../imgs/chefimg2.jpg'



function Home() {

  const blogitem = Data.map((item)=>{
    return(
      <div className='col-md-4'>
         <div className='box'>
          <img src={item.img} alt='blogs' />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
      </div>
      <button ><a href='#'>sipariş ver</a></button>
      </div>
    )
  })
  return (
    <Fragment>
      <Header/>

      <section className='numbers'>
        <div className='container'>
          <div className='col'>

            <div calssName='col-md-3'>
              <h2>524+</h2>
              <h6>Fotos</h6>
            </div>
            <div calssName='col-md-3'>
              <h2>954+</h2>
              <h6>Fotos</h6>
            </div>
            <div calssName='col-md-3'>
              <h2>854+</h2>
              <h6>Fotos</h6>
            </div>

          </div>

        </div>

      </section>


      <section className='restaurant'>
        <div className='container'>
          <div className='row'>
            <div  className='col-md-6'>
                <img src={restaurant} title='img' alt='pide'></img>
            </div>
            <div  className='col-md-6'>
                <h2>Usta ellerden, üstün lezzetler…</h2>
                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <button><a href='#'>Devamını oku</a></button>
            </div>

          </div>

        </div>

      </section>



      <section calssName="ingredients ">
        <div className="container">
          <div className='row'>
            <div className="col-md-6">
              <h2>Her şeyi olan en iyi malzemelerle yapıyoruz.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              <ul>
                  <li>1nvfknvkf</li>
                  <li>1nvfknvkf</li>
                  <li>1nvfknvkf</li>
              </ul>
              <button>
              <a href='#'>Devamını oku</a>
              </button>
            </div>
            <div calssName='col-md-6 '>
            <img className='ingredients-img'  src={ingredients} alt='ingredients'/>

            </div>
          </div>
        </div>

      </section>

     
      <section className='stories'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
                <h2>__Parmak ısırtan lezzet__</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <a href='#'>Hikayemiz izle</a>
                </div>
              </div>
            </div>
      </section>

      <section className='blogs'>
          <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12'>
              <h2>Yemeklerimizi Keşfedin</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>

            </div>

          </div>
          <div className='row'>
                {blogitem}
                
          </div>

          </div>

      </section>

      <section className='slider'>
        <div className='container'>
          <div className='row'>
            <div calssName='col-lg-12 col-md-12'>
                <h2>Ekibimiz</h2>
            </div>
          </div>
          <div className='row'>
            <div calssName='col-lg-12 col-md-12'>
              <Carousel>
                <Carousel.Item>
                    <img src={person1} alt='img'/>
                  <Carousel.Caption>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <span>Second slide label</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={person2} alt='img'/>

                  <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <span>Second slide label</span>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      
      </section>

    </Fragment>
  )
}

export default Home