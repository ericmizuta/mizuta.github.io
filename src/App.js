import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className='Home'>
      <Helmet>
        <title>Mizuta.dev | Home</title>
      </Helmet>
      <header className='App-header'>
        <div className='Logo'>
          <span>&lt;/&gt;</span>
          <p>Mizuta.dev</p>
        </div>
      </header>
      <section>
        <div className='loader_container'>
          <div id="loader">
            <div class="ls-particles ls-part-1"></div>
            <div class="ls-particles ls-part-2"></div>
            <div class="ls-particles ls-part-3"></div>
            <div class="ls-particles ls-part-4"></div>
            <div class="ls-particles ls-part-5"></div>
            <div class="lightsaber ls-left ls-green"></div>
            <div class="lightsaber ls-right ls-red"></div>
          </div>
        </div>
        <p>in construction...</p>
      </section>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
