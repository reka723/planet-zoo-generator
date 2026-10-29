import { ChevronDown, Dices } from 'lucide-react';
import { ANIMAL_TYPES, countAnimals } from '../lib/challenge';

export default function FilterCard({ value, onChange, onRoll }) {
  return <div className="side-card filter-card">
    <div className="side-heading"><span className="side-index">01</span><h3>Set your boundaries</h3></div>
    <p>Want to narrow the roll? Choose what kind of resident you're in the mood to build for.</p>
    <label className="select-label" htmlFor="animal-filter">ANIMAL TYPE</label>
    <div className="select-wrap">
      <select id="animal-filter" value={value} onChange={e => onChange(e.target.value)}>
        {['All', ...ANIMAL_TYPES].map(t => <option key={t}>{t}</option>)}
      </select>
      <ChevronDown size={16}/>
    </div>
    <div className="filter-note"><span className="tiny-dot"/> {countAnimals(value)} species available for this roll</div>
    <button className="outline-button" onClick={onRoll}><Dices size={16}/> Roll with filter</button>
  </div>;
}
