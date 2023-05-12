import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

function App() {

  const showText = (text) => console.log(text)

  const navList = ['main', 'about', 'contacts']

  return (
    <div>
      <Header 
        list={navList}
      />
      <Button 
        text={'click'}
        handleClick={showText}
      />
      <Button 
        text={'cick'}
        handleClick={showText}
        />
      <Footer
        list={navList}
      />
    </div>
  );
}

export default App;
