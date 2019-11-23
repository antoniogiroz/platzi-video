import React from 'react';
import '../assets/scss/main.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const App = () => (
  <div className='app'>
    <Header />
    <Search />

    <Carousel title='My list'>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>

    <Carousel title='Featured videos'>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>

    <Footer />
  </div>
);

export default App;
