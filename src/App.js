import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import CardList from './components/Cards/Cards'
import ViewMoreButton from './components/ViewMoreBut/ViewMoreBut';

import './App.css';

function App() {
  return (<>
  <Header />
  <Home/>
  <CardList/>
  <ViewMoreButton/>
  <Footer />
  </>
  );
}

export default App;
