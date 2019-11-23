import React from 'react';
import { connect } from 'react-redux';
import '../assets/scss/main.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search />

      {myList && myList.length > 0 && (
        <Carousel title='My list'>
          {myList &&
            myList.map((item) => (
              <CarouselItem key={item.id} {...item} isFavorite />
            ))}
        </Carousel>
      )}

      <Carousel title='Trends'>
        {trends && trends.map((item) => <CarouselItem key={item.id} {...item} />)}
      </Carousel>

      <Carousel title='Originals'>
        {originals &&
          originals.map((item) => <CarouselItem key={item.id} {...item} />)}
      </Carousel>
    </>
  );
};

const mapStateToPropsParam = (state) => ({
  myList: state.myList,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToPropsParam, null)(Home);
