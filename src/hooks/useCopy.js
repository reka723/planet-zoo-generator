import { useState } from 'react';
import { useCopyToClipboard, useTimeout } from 'usehooks-ts';

/** Clipboard copy with a short-lived "copied" flag; falls back to a prompt if the clipboard is blocked. */
export function useCopy(promptLabel, resetMs = 1800) {
  const [, copyToClipboard] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  useTimeout(() => setCopied(false), copied ? resetMs : null);

  const copy = async (value) => {
    if (await copyToClipboard(value)) setCopied(true);
    else window.prompt(promptLabel, value);
  };
  return [copied, copy];
}
