import { useState } from 'react';
import Footer from './components/Footer';
import GeneratorPanel from './components/GeneratorPanel';
import Intro from './components/Intro';
import SidePanel from './components/SidePanel';
import Topbar from './components/Topbar';
import { useChallenges } from './hooks/useChallenges';

export default function App() {
  const [filter, setFilter] = useState('All');
  const { challenge, setChallenge, history, saved, isSaved, roll, toggleSaved, removeSaved } = useChallenges();
  const rollWithFilter = () => roll(filter);

  return <div className="app-shell">
    <Topbar />
    <main id="top" className="main-layout">
      <Intro />
      <GeneratorPanel challenge={challenge} briefNumber={history.length + 1} isSaved={isSaved} onRoll={rollWithFilter} onToggleSave={toggleSaved} />
      <SidePanel filter={filter} onFilterChange={setFilter} history={history} saved={saved} onRoll={rollWithFilter} onSelect={setChallenge} onRemoveSaved={removeSaved} />
    </main>
    <Footer />
  </div>;
}
