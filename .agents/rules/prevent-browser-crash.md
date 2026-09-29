---
description: Enforce CLI-based verification instead of browser_subagent
---

# Browser Subagent Rule (Stability)

## CRITICAL: NEVER USE BROWSER SUBAGENT
Under NO circumstances should the agent invoke `browser_subagent` or attempt to connect to the browser via CDP.

### Reason
Antigravity's internal language server binary (`language_server_macos_arm`) has an incompatibility with external Playwright driver versions on macOS. Connecting via CDP or driver can trigger `panic: Debugger` in `playwright.createObjectFactory`, which kills the language server process.

### Verification Guideline
- Always verify all code, build, and styling changes via terminal commands (`npm run build`, inspecting source files, running scripts).
- Do NOT launch browser subagents for visual inspection.
