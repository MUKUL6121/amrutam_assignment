import './App.css'
import Stick from './components/stick/stick'
import A from './components/a/a';
import B from './components/b/b';
import C from './components/c/c';
import D from './components/d/d';
import E from './components/e/e';
import F from './components/f/f';
import G from './components/g/g';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <div id="stick" ><Stick className="stick" /></div>
      <A />
      <B />
      <C />
      <D />
      <E />
      <F />
      <G />
      <Footer />
    </div>
  )
}

export default App
