<!-- Copilot instructions for contributors and AI coding agents -->
# Copilot Instructions — Angular App (minimal scaffold)

Purpose
- Short, actionable guidance so an AI can be productive in this repository quickly.

Quick start (what to run)
- Install: `npm install` (project root)
- Dev server: `npm start` (runs `npx ng serve --open`) — use this to verify UI changes.
- Build: `npm run build` (runs `npx ng build`) — verify production build artifacts under `dist/`.
- Tests: `npm test` (runs `npx ng test`).

Big picture
- This is a minimal Angular 16 single-page app using standalone components (no NgModule bootstrap). Entry point: [src/main.ts](src/main.ts#L1) which calls `bootstrapApplication`.
- Root component: [src/app/app.component.ts](src/app/app.component.ts#L1) (standalone: true) with its template and styles in the `src/app/` folder.
- Configuration: [angular.json](angular.json#L1) (sourceRoot `src`, index `src/index.html`, assets in `src/assets`, styles in `src/styles.css`).

Project-specific conventions and patterns
- Standalone components only: prefer adding `standalone: true` components rather than creating NgModules. Follow the `AppComponent` pattern.
- Use the `src` layout: top-level app code lives under `src/app/`; global styles go to `src/styles.css`; app root is `app-root` in [src/index.html](src/index.html#L1).
- Use the provided npm scripts (they wrap `npx ng ...`). Do not assume a globally installed `ng` CLI — use `npx` or `npm run` scripts.

Where to make changes
- UI/component changes: edit or add files in `src/app/` and run `npm start` to verify.
- Build/serve configuration: edit [angular.json](angular.json#L1) and [tsconfig.app.json](tsconfig.app.json) as needed.

Integration points & dependencies
- All runtime dependencies are frontend-only (see `package.json`). The dev workflow relies on `@angular/cli` via `npx`.
- No backend or CI configuration detected in repo; assume manual local verification unless CI files are added.

Editing tips & examples
- To add a simple standalone component, mirror `AppComponent` structure and include `standalone: true`.
- Example files to reference when generating code:
  - [src/main.ts](src/main.ts#L1)
  - [src/app/app.component.ts](src/app/app.component.ts#L1)
  - [angular.json](angular.json#L1)

PR checklist for code changes
- Run `npm install` then `npm start` to verify runtime behavior for UI changes.
- Run `npm run build` for changes that affect bundling or assets.
- Run `npm test` if you add or change test files.

Notes for AI agents
- Prefer small, focused edits: modify the component TypeScript and template files under `src/app/` and verify with `npm start`.
- Do not add global tooling assumptions (e.g., assume `ng` globally installed). Use `npx` or the npm scripts.
- Preserve the standalone-component approach and the simple folder layout.

If anything here is unclear or you want examples expanded (code-gen, tests, or a CONTRIBUTING section), ask and I will iterate.
