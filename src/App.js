import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './shared/data';

export default function App() {
  const cards = data.map((item, index) => {
    console.log(item);
    return <Card key={index} item={item} />;
  });

  return (
    <div>
      <Navbar />
      {cards}
      <Footer />
    </div>
  );
}
