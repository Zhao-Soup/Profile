# `ZHAO // RECOVERY`

> **A personal link interface reconstructed from an incomplete record.**

<div align="center">

<img src="./profilepic.png" width="140" height="140" alt="Zhao">

<br>

**YASH TIWARI**
`ZHAO // 36`

`ARCHIVE INTEGRITY: FAIL` · `ENTITY STATUS: PRESENT / UNRESOLVED`

</div>

---

## `01 // WHAT IS THIS?`

This repository contains a deliberately minimal personal profile and link interface.

It is not intended to behave like a conventional portfolio.

Instead, the page presents a fictional **recovered system record** — part identity card, part corrupted terminal, part digital archive that probably should have stayed deleted.

The interface continuously reconstructs fragments of a fictional system state while exposing a small set of actual external connections.

> `THIS PAGE IS A REMNANT, NOT AN ARCHIVE.`

---

## `02 // INTERFACE`

The page is built around a dark, degraded terminal aesthetic:

* monochrome green / muted-earth color palette
* CRT-style scanlines
* procedural noise overlay
* animated system messages
* corrupted characters and redactions
* orbiting profile-image elements
* live system clock
* terminal-style reconstruction log
* responsive layout for smaller screens
* intentionally restricted text selection for immersion

The background isn't a static image.

`background.txt` acts as the source material for the animated stream of system messages, while JavaScript continuously spawns and moves those messages across the viewport.

---

## `03 // STRUCTURE`

```text
Profile/
│
├── index.html
├── style.css
├── app.js
├── background.txt
├── profilepic.png
├── robots.txt
└── README.md
```

### `index.html`

The actual interface.

Contains:

* identity section
* profile image
* system-status information
* collapse report
* recovered connections
* terminal output
* footer

The page intentionally presents the information as a fictional recovery report rather than a conventional biography.

### `style.css`

Controls the visual language of the interface:

* typography
* CRT effects
* scanlines
* vignette
* colors
* profile-image framing
* responsive layout
* terminal styling
* disabled text selection

The primary typefaces are **IBM Plex Mono** and **Special Elite**, reinforcing the terminal / recovered-document aesthetic.

### `app.js`

Handles the dynamic portions of the page.

It:

1. loads `background.txt`
2. converts its lines into animated particles
3. randomly positions them horizontally
4. moves them vertically through the screen
5. assigns different tones to errors, warnings and corrupted fragments
6. adapts the animation to mobile screens
7. maintains the live clock

If `background.txt` cannot be loaded, the script falls back to a small set of error/recovery messages.

### `background.txt`

The raw material for the animated system feed.

It contains hundreds of fictional diagnostic, recovery, deletion and system-state messages such as:

```text
[boot] /dev/null mounted at 0x000000
[scan] sector 0001 checksum 7c1a
[warn] sector does not exist
[map] /root/index -> NULL
[error] parent node unavailable
[resolve] searching previous parent...
[halt] no response
```

The file is intentionally external so the visual stream can be expanded or rewritten without touching the animation logic.

### `profilepic.png`

The profile image used by the interface.

### `robots.txt`

Crawler/indexing configuration for the page.

---

## `04 // RECOVERED CONNECTIONS`

The interface currently exposes six external nodes:

|   ID | Node      | Purpose                   |
| ---: | --------- | ------------------------- |
| `01` | GitHub    | Source / repositories     |
| `02` | Discord   | Communication             |
| `03` | Steam     | Gaming profile            |
| `04` | LinkedIn  | Professional profile      |
| `05` | Instagram | Visual / personal content |
| `06` | YouTube   | Broadcast / video         |

These are rendered as interactive recovery records rather than conventional social-media buttons.

---

## `05 // TECHNOLOGY`

<div align="center">

`HTML` · `CSS` · `JavaScript` · `Canvas API`

</div>

No framework.

No build system.

No dependency tree.

No backend.

No database.

Just a handful of static files and an unreasonable amount of effort spent making a webpage look like it survived a system failure.

---

## `06 // HOW IT WORKS`

The animation pipeline is intentionally simple:

```text
                 background.txt
                       │
                       ▼
                fetch() in app.js
                       │
                       ▼
                  split into
                    lines
                       │
                       ▼
               create particles
                       │
                       ▼
             random X positioning
                       │
                       ▼
              vertical movement
                       │
                       ▼
                  <canvas>
                       │
                       ▼
              corrupted terminal
                  atmosphere
```

The canvas is rendered independently from the rest of the page, allowing the animated background to remain behind the interface without interfering with the interactive elements.

---

## `07 // RUN LOCALLY`

There is no compilation step.

Clone the repository:

```bash
git clone https://github.com/Zhao-Soup/Profile.git
cd Profile
```

Then serve the directory with any static HTTP server.

For example, with Python:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

You can also open `index.html` directly, although using a local server is preferable because the page fetches `background.txt` dynamically.

---

## `08 // MODIFYING THE SYSTEM`

Want to change the messages floating through the background?

Edit:

```text
background.txt
```

Want to change the appearance?

Edit:

```text
style.css
```

Want to change the animation behaviour?

Edit:

```text
app.js
```

Want to change the actual profile interface?

Edit:

```text
index.html
```

The architecture deliberately keeps **content, presentation and animation logic separate**, so experimenting with the page doesn't require tearing the whole thing apart.

---

## `09 // DESIGN PHILOSOPHY`

The page follows one simple rule:

> **Don't make it look broken. Make it look like it was never supposed to work.**

The corrupted text, missing data, failed recovery messages and inconsistent system states are intentional.

There is a fake narrative running underneath the actual purpose of the page:

```text
ROOT INDEX
    ↓
DELETED

WORLD STATE
    ↓
UNDEFINED

PLAYER RECORDS
    ↓
PURGED

MEMORY
    ↓
FRAGMENTED

EXIT ROUTE
    ↓
NULL

ZHAO
    ↓
REMAINING
```

The links are the only pieces of information that consistently survive the fictional recovery process.

---

## `10 // STATUS`

```text
┌────────────────────────────────────────────┐
│                                            │
│  ARCHIVE ................. CORRUPTED       │
│  ROOT .................... MISSING         │
│  WORLD ................... UNDEFINED       │
│  MEMORY .................. FRAGMENTED      │
│  IDENTITY ................ RECOVERED       │
│  CONNECTIONS ............. ACTIVE          │
│                                            │
└────────────────────────────────────────────┘
```

**Current state:** `PRESENT / UNRESOLVED`

---

## `11 // AUTHOR`

**Yash Tiwari**
`ZHAO // 36`

The repository is maintained as a personal digital identity / link interface.

GitHub:

**https://github.com/Zhao-Soup**

---

<div align="center">

`[ END OF RECOVERY LOG ]`

**ERR0R — restoration denied.**

</div>
