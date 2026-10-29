import clsx from 'clsx';
import { Bookmark, Check, Copy, Dices, Eye, Home, Leaf, Mountain, PawPrint, Share2, Sparkles, Target } from 'lucide-react';
import { useCopy } from '../hooks/useCopy';
import { challengeText } from '../lib/challenge';
import { buildShareUrl } from '../lib/share';
import AnimalHero from './AnimalHero';
import BriefItem from './BriefItem';

const BRIEF_ITEMS = [
  { field: 'count', label: 'THE BUILD', icon: Home },
  { field: 'theme', label: 'VISUAL DIRECTION', icon: Leaf, accent: true },
  { field: 'terrain', label: 'TERRAIN & LANDSCAPE', icon: Mountain },
  { field: 'shelter', label: 'SHELTER / CENTREPIECE', icon: Home },
  { field: 'guest', label: 'GUEST EXPERIENCE', icon: Eye },
  { field: 'feature', label: 'SIGNATURE FEATURE', icon: PawPrint },
  { field: 'planting', label: 'PLANTING PALETTE', icon: Leaf },
  { field: 'viewingCount', label: 'VIEWING REQUIREMENT', icon: Eye },
];

export default function GeneratorPanel({ challenge, briefNumber, isSaved, onRoll, onToggleSave }) {
  const [copied, copyBrief] = useCopy('Copy your challenge:');
  const [linkCopied, copyLink] = useCopy('Copy this link to share your challenge:');

  return <section className="generator-panel" aria-label="Challenge generator">
    <div className="panel-topline"><span><Sparkles size={15}/> RANDOM BUILD BRIEF</span><span className="brief-number">BRIEF // {String(briefNumber).padStart(2, '0')}</span></div>
    <AnimalHero animal={challenge.animal} />
    <div className="brief-grid">
      {BRIEF_ITEMS.map(({ field, ...item }) => <BriefItem key={field} value={challenge[field]} {...item} />)}
    </div>
    <div className="objectives">
      <div className="objective-row"><span className="objective-icon"><Target size={17}/></span><div><div className="objective-label">MAIN OBJECTIVE</div><p>{challenge.challenge}</p></div></div>
      <div className="objective-row bonus-row"><span className="objective-icon"><Sparkles size={17}/></span><div><div className="objective-label">BONUS OBJECTIVE <span>OPTIONAL</span></div><p>{challenge.bonus}</p></div></div>
    </div>
    <div className="panel-actions">
      <button className="primary-button" onClick={onRoll}><Dices size={19}/> Generate new challenge <span className="button-shortcut">↗</span></button>
      <button className="secondary-button" onClick={() => copyBrief(challengeText(challenge))}>{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? 'Copied!' : 'Copy brief'}</button>
      <button className="secondary-button" onClick={() => copyLink(buildShareUrl(challenge))}>{linkCopied ? <Check size={17}/> : <Share2 size={17}/>} {linkCopied ? 'Link copied!' : 'Share link'}</button>
      <button className={clsx('save-button', isSaved && 'is-saved')} onClick={onToggleSave} title={isSaved ? 'Remove from saved' : 'Save challenge'}><Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'}/></button>
    </div>
  </section>;
}
