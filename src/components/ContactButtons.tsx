"use client";

import { useState } from "react";

type ContactButtonsProps = {
  email: string;
  github?: string;
  linkedin?: string;
  className?: string;
};

export default function ContactButtons({
  email,
  github,
  linkedin,
  className = "",
}: ContactButtonsProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {/* Email pill (mailto + copy integrado) */}
      <div
        className="pill pill-accent items-center gap-2 pr-2"
        role="group"
        aria-label="Email actions"
      >
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2"
          title="Send email"
        >
          ✉️ <span className="underline underline-offset-2">{email}</span>
        </a>

        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email"
          title="Copy email"
          className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 subtle hover:opacity-100"
        >
          {copied ? (
            // check icon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            // copy icon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
          <span className="text-[12px]">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Social pills */}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="pill pill-accent"
          title="GitHub"
        >
          GitHub
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="pill pill-accent"
          title="LinkedIn"
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}