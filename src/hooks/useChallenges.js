import { useEffect, useState } from 'react';
import { useEventListener, useLocalStorage } from 'usehooks-ts';
import { challengeSchema, makeChallenge } from '../lib/challenge';
import { readSharedChallenge } from '../lib/share';

const SAVED_KEY = 'wildbuild.saved.v1';
const CURRENT_KEY = 'wildbuild.current.v1';
const HISTORY_LIMIT = 12;

// Anything in storage that doesn't match the schema is dropped rather than crashing the app.
const parseCurrent = (raw) => challengeSchema.parse(JSON.parse(raw));
const parseSaved = (raw) => JSON.parse(raw).flatMap(item => {
  const result = challengeSchema.safeParse(item);
  return result.success ? [result.data] : [];
});

/**
 * State for the challenge being viewed, the recent-roll history and the saved list.
 * Saved challenges and the current one persist in localStorage (and sync across tabs);
 * a share link in the URL hash takes priority over the remembered challenge.
 */
export function useChallenges() {
  const [challenge, setChallenge] = useLocalStorage(CURRENT_KEY, () => makeChallenge(), { deserializer: parseCurrent });
  const [saved, setSaved] = useLocalStorage(SAVED_KEY, [], { deserializer: parseSaved });
  const [history, setHistory] = useState([]);

  const openShared = () => {
    const shared = readSharedChallenge();
    if (shared) setChallenge(shared);
  };
  useEffect(openShared, []);
  useEventListener('hashchange', openShared);

  const roll = (typeFilter) => {
    setHistory(prev => [challenge, ...prev].slice(0, HISTORY_LIMIT));
    setChallenge(makeChallenge(typeFilter, challenge.animal.name));
  };

  const isSaved = saved.some(c => c.id === challenge.id);
  const toggleSaved = () => setSaved(prev => isSaved ? prev.filter(c => c.id !== challenge.id) : [challenge, ...prev]);
  const removeSaved = (id) => setSaved(prev => prev.filter(c => c.id !== id));

  return { challenge, setChallenge, history, saved, isSaved, roll, toggleSaved, removeSaved };
}
