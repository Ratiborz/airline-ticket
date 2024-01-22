import { Company } from './components/Company/Company';
import { Header } from './components/Header/Header';
import { Transfers } from './components/Transfers/Transfers';
import '../src/styles/style.scss';
import { Cards } from './components/Cards/Cards';
import { useAppSelector } from './hooks/redux';
import { RootState } from '@reduxjs/toolkit/query';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="aside">
          <Transfers />
          <Company />
        </div>
        <Cards />
      </main>
    </>
  );
}

export default App;
