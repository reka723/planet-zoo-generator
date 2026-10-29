import { PawPrint } from 'lucide-react';

export default function Topbar() {
  return <header className="topbar">
    <a className="brand" href="#top" aria-label="WildBuild home"><span className="brand-mark"><PawPrint size={21}/></span><span>WILDBUILD<span className="brand-dot">.</span></span></a>
    <div className="topbar-right"><span className="status-dot"/> PLANET ZOO 2 <span className="topbar-divider">/</span> CREATIVE MODE</div>
  </header>;
}
