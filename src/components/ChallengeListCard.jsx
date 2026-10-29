import clsx from 'clsx';
import { ChevronDown, Trash2 } from 'lucide-react';
import { useState } from 'react';

/** Collapsible side card listing challenges; pass onRemove to show a delete button per row. */
export default function ChallengeListCard({ index, title, items, emptyText, onSelect, onRemove }) {
  const [open, setOpen] = useState(false);
  return <div className="side-card history-card">
    <button className="side-heading heading-button" onClick={() => setOpen(v => !v)}>
      <span className="side-index">{index}</span>
      <h3>{title} <span className="count-pill">{items.length}</span></h3>
      <ChevronDown className={clsx(open && 'rotate')} size={17}/>
    </button>
    {open && <div className="mini-list">
      {items.length ? items.map(c => onRemove
        ? <div key={c.id} className="mini-item">
            <button onClick={() => onSelect(c)} className="mini-item-main"><strong>{c.animal.name}</strong><small>{c.theme}</small></button>
            <button className="delete-button" title="Remove saved challenge" onClick={() => onRemove(c.id)}><Trash2 size={15}/></button>
          </div>
        : <button key={c.id} className="mini-item" onClick={() => onSelect(c)}>
            <span><strong>{c.animal.name}</strong><small>{c.theme}</small></span><span className="mini-arrow">↗</span>
          </button>)
        : <p className="empty-state">{emptyText}</p>}
    </div>}
  </div>;
}
