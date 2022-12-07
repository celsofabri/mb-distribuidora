import * as React from 'react';
import Seo from 'components/seo';
import Header from 'components/Header/index';
import Banner from 'components/Banner/index';

const Home = () => {
  
  return ( 
    <React.Fragment>
      <Header />
      <Banner />
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Home" />

export default Home
