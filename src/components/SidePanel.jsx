import ChallengeListCard from './ChallengeListCard';
import FilterCard from './FilterCard';
import TipCard from './TipCard';

export default function SidePanel({ filter, onFilterChange, history, saved, onRoll, onSelect, onRemoveSaved }) {
  return <aside className="side-panel">
    <FilterCard value={filter} onChange={onFilterChange} onRoll={onRoll} />
    <TipCard />
    <ChallengeListCard index="03" title="Recent rolls" items={history} emptyText="Your previous challenges will show up here." onSelect={onSelect} />
    <ChallengeListCard index="04" title="Saved challenges" items={saved} emptyText="Tap the bookmark on a challenge to keep it here." onSelect={onSelect} onRemove={onRemoveSaved} />
  </aside>;
}
