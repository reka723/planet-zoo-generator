import { countAnimals } from '../lib/challenge';

export default function Intro() {
  return <section className="intro">
    <div className="eyebrow"><span className="eyebrow-line"/> YOUR NEXT ZOO PROJECT</div>
    <h1>Build something<br/><em>wildly</em> different.</h1>
    <p className="intro-copy">A random habitat brief for when you want to build, but don't know what to build. Roll the dice and let the animals decide.</p>
    <div className="intro-stats">
      <div><strong>{countAnimals()}</strong><span>ANIMALS IN ROSTER</span></div>
      <div><strong>∞</strong><span>WAYS TO BUILD</span></div>
      <div><strong>01</strong><span>NEW CHALLENGE</span></div>
    </div>
  </section>;
}
