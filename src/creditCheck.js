// src/creditCheck.js
export function verifyCredit() {
  // skip check during development
  if (import.meta.env.DEV) return;

  const requiredCredits = [
    "github.com/benajtil/BenOS",
    "LinkedIn: https://www.linkedin.com/in/ben-florence-aj-til-7217a729a/",
    "Email: benflorence.dev@gmail.com",
  ];

  const meta = document.querySelector("meta[name='author']");
  if (!meta || !requiredCredits.every((c) => meta.content.includes(c))) {
    document.body.innerHTML = `
      <div style="font-family:monospace; text-align:center; margin-top:20%;">
        <h1>⚠ Unauthorized Copy</h1>
        <p>This project must include proper credits to run.</p>
        <p>Visit <a href="https://github.com/benajtil/BenOS">Original Repo</a></p>
      </div>
    `;
    throw new Error("Credits missing. App halted.");
  }
}
