import { Sparkles } from 'lucide-react';

export default function TipCard() {
  return <div className="side-card">
    <div className="side-heading"><span className="side-index">02</span><h3>Make it your own</h3></div>
    <p>Not feeling one part of the brief? Generate another full brief, or use the individual prompts as inspiration and adapt them to your zoo.</p>
    <div className="tip-box"><Sparkles size={17}/><span><strong>Builder's tip</strong> Pick one visual focal point first. Let the path, planting and shelter frame it instead of competing with it.</span></div>
  </div>;
}
