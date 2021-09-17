import './styles/global.css';
import './styles.css';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { LeadList } from './components/LeadList';

function App() {
  return (
    <div className="side-container">
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className="container-app">
        <div className='background-header' />
        <div className='inner-container'>
          <Header />
          <h2>Leads</h2>
          <LeadList />
          <LeadList />
          <LeadList />
        </div>
      </div>
    </div>
  );
}

export default App;
