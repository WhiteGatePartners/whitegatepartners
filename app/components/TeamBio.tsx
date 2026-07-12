"use client";

import { useState } from "react";

export default function TeamBio({ bio }: { bio: string }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = bio
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length > 1) {
    const halfCount = Math.max(1, Math.ceil(paragraphs.length / 2));
    const hasMore = paragraphs.length > halfCount;
    const visible = expanded ? paragraphs : paragraphs.slice(0, halfCount);

    return (
      <div className="tc-bio">
        {visible.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {hasMore && (
          <button
            type="button"
            className="tc-more"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Load more"}
          </button>
        )}
      </div>
    );
  }

  const full = paragraphs[0] ?? "";
  const halfLength = Math.ceil(full.length / 2);
  let truncated = full.slice(0, halfLength);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > 0) truncated = truncated.slice(0, lastSpace);
  const canTruncate = full.length > truncated.length + 1;

  return (
    <div className="tc-bio">
      <p>{expanded || !canTruncate ? full : `${truncated}…`}</p>
      {canTruncate && (
        <button
          type="button"
          className="tc-more"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Load more"}
        </button>
      )}
    </div>
  );
}
