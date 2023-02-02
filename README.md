## Install module

```bash
yarn
```

## Getting Started

```bash
yarn dev
```

## Commit message

Commit follow patten

| **Message** | **use for**                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| build       | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)                 |
| chore       | dd something without touching production code (Eg: update npm dependencies)                                         |
| ci          | Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)      |
| docs        | Documentation only changes                                                                                          |
| feat        | Add new feature                                                                                                     |
| fix         | Fix some bug                                                                                                        |
| perf        | performance code                                                                                                    |
| refactor    | A code change that neither fixes a bug nor adds a feature                                                           |
| revert      | Revert last commit                                                                                                  |
| style       | Changes that do not affect the meaning of the code (Eg: adding white-space, - formatting, missing semi-colons, etc) |
| test        | Add testing                                                                                                         |
|             |                                                                                                                     |

### Example

```
chore: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```

## Name rules

| #                          | type             |
| -------------------------- | ---------------- |
| **fonder/file**            |
| fonder interface/component | PascalCase       |
| other                      | camelCase        |
| **variable**               |
| Component                  | PascalCase       |
| constant                   | UPPER_SNAKE_CASE |
| interface                  | PascalCase       |
| boolean                    | is... /has...    |
| other                      | camelCase        |
|                            |                  |
| **method**                 | camelCase        |
| private Functions          | \_name           |
|                            |                  |
| Style                      | B\_\_E--M        |

## Project tree

```
poly-career-front
├─ next
├─ pages
|  ├─ about
|  ├─ api
|  ├─ _app.tsx
|  └─ index.tsx
├─ public
├─ src
│  ├─ component
│  ├─ constants
│  ├─ hook
│  ├─ store
│  |   └─ slices
│  └─ utils
├─ style
├─ .env
├─ eslintrc.json
├─ .gitignore
├─ Docerfile
├─ next-env.d.ts
├─ next.config.js
├─ package.json
├─ README.md
├─ tsconfig.json
└─ yarn.lock

```
