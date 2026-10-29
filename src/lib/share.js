import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { z } from 'zod';
import { challengeSchema, findAnimal } from './challenge';

// Share links carry the whole brief in the URL hash (#c=...), so no server is needed.
// Only the animal's name travels; it is looked up in the local roster on the way back in.
const HASH_PREFIX = '#c=';

const sharedSchema = challengeSchema.omit({ animal: true }).extend({ animal: z.string() });

export function buildShareUrl(challenge) {
  const { animal, ...rest } = challenge;
  const payload = { ...rest, animal: animal.name };
  const url = new URL(window.location.href);
  url.hash = HASH_PREFIX.slice(1) + compressToEncodedURIComponent(JSON.stringify(payload));
  return url.toString();
}

/** Returns the challenge encoded in the current URL hash, or null if there isn't a valid one. */
export function readSharedChallenge(hash = window.location.hash) {
  if (!hash.startsWith(HASH_PREFIX)) return null;
  try {
    const json = decompressFromEncodedURIComponent(hash.slice(HASH_PREFIX.length));
    const parsed = sharedSchema.safeParse(JSON.parse(json));
    if (!parsed.success) return null;
    const animal = findAnimal(parsed.data.animal);
    return animal ? { ...parsed.data, animal } : null;
  } catch {
    return null;
  }
}
