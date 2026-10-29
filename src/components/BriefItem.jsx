import clsx from 'clsx';

export default function BriefItem({ icon: Icon, label, value, accent = false }) {
  return <div className={clsx('brief-item', accent && 'accent-item')}>
    <div className="brief-icon"><Icon size={17}/></div>
    <div className="brief-copy"><div className="brief-label">{label}</div><div className="brief-value">{value}</div></div>
  </div>;
}
