import { sample } from 'es-toolkit';
import { nanoid } from 'nanoid';
import { z } from 'zod';
import ANIMALS from '../data/animals.json';
import { OPTIONS } from '../data/options';

export const ANIMAL_TYPES = ['Habitat', 'Aviary', 'Aquarium', 'Exhibit'];

// Plain-text brief fields, in display order for the copied text.
export const FIELDS = ['count', 'theme', 'terrain', 'shelter', 'guest', 'viewingCount', 'feature', 'planting', 'challenge', 'bonus'];

const text = z.string().max(200);

export const animalSchema = z.object({
  name: z.string(),
  type: z.string(),
  region: z.string(),
  biomes: z.array(z.string()),
});

export const challengeSchema = z.object({
  id: z.string().max(64),
  animal: animalSchema,
  ...Object.fromEntries(FIELDS.map(f => [f, text])),
});

export const countAnimals = (typeFilter = 'All') =>
  typeFilter === 'All' ? ANIMALS.length : ANIMALS.filter(a => a.type === typeFilter).length;

export const findAnimal = (name) => ANIMALS.find(a => a.name === name);

export function makeChallenge(typeFilter = 'All', previousName = '') {
  let pool = ANIMALS.filter(a => typeFilter === 'All' || a.type === typeFilter);
  if (pool.length > 1) pool = pool.filter(a => a.name !== previousName);
  const animal = sample(pool.length ? pool : ANIMALS);
  const t = animal.type;
  const isAquarium = t === 'Aquarium';
  return {
    id: nanoid(10),
    animal,
    count: sample(OPTIONS.countByType[t]),
    theme: sample(OPTIONS.theme),
    terrain: sample(OPTIONS.terrainByType[t] || OPTIONS.terrain),
    shelter: sample(isAquarium ? OPTIONS.aquariumShelter : OPTIONS.shelterByType[t] || OPTIONS.shelter),
    guest: sample(OPTIONS.guest[t]),
    viewingCount: sample(OPTIONS.viewing[t]),
    feature: sample(OPTIONS.featureByType[t] || OPTIONS.feature),
    planting: sample(isAquarium ? OPTIONS.aquariumPlanting : OPTIONS.planting),
    challenge: sample([...OPTIONS.challenge, ...(OPTIONS.challengeByType[t] || [])]),
    bonus: sample(OPTIONS.bonus),
  };
}

export const challengeText = (c) => [
  `${c.animal.name} — Habitat Challenge`,
  '',
  `Animal: ${c.animal.name} (${c.animal.type}, ${c.animal.region})`,
  `Build: ${c.count}`,
  `Style: ${c.theme}`,
  `Terrain: ${c.terrain}`,
  `Shelter / centrepiece: ${c.shelter}`,
  `Guest experience: ${c.guest}`,
  `Viewing requirement: ${c.viewingCount}`,
  `Signature feature: ${c.feature}`,
  `Planting: ${c.planting}`,
  `Main objective: ${c.challenge}`,
  `Bonus objective: ${c.bonus}`,
].join('\n');
