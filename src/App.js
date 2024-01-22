import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Section from './components/Section';
import Collection from './components/Collection';
import NewArrival from './components/NewArrival';
import FeaturedProduct from './components/FeaturedProduct';

function App() {
  return (
    <>
    <Hero></Hero>
    <Section></Section>
    <Collection></Collection>
    <NewArrival></NewArrival>
    <FeaturedProduct></FeaturedProduct>
    </>
  );
}

export default App;
