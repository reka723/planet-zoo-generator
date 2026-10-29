import { Bird, Bug, Fish, PawPrint } from 'lucide-react';

// Symbol shown for the rolled animal, by type (Habitat and anything unknown use the paw).
const TYPE_ICONS = { Habitat: PawPrint, Aviary: Bird, Aquarium: Fish, Exhibit: Bug };

export default function AnimalHero({ animal }) {
  const Icon = TYPE_ICONS[animal.type] ?? PawPrint;
  return <div className="animal-hero">
    <div className="animal-symbol"><Icon size={34}/><span className="symbol-spark">✳</span></div>
    <div className="animal-info">
      <div className="animal-kicker">YOUR RESIDENT</div>
      <h2>{animal.name}</h2>
      <div className="animal-meta"><span className="animal-type">{animal.type}</span><span>{animal.region}</span><span>{animal.biomes.join(' · ')}</span></div>
    </div>
  </div>;
}
