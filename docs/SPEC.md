# YuanYuan AI — product spec (v2, kitchen)

*Replaces the v1 inventory spec entirely. Nothing from the Daily Grind build survives except the transport layer.*

## One line

**A voice companion that cooks with you — because your hands are wet, and because cooking alone is boring.**

## Why this, and not a recipe app

A recipe app is a screen. A screen is useless the moment your hands are covered in egg.
Every existing "smart kitchen" answer optimises for *speed*. Nobody optimises for the fact that the person is **alone in the kitchen for forty minutes with nothing to do between steps**.

The gap this fills is not instruction. It is company.

- Hands-busy is the one context where voice is not a gimmick but the only channel left.
- A recipe has long dead gaps built into it — water boiling, noodles softening, something resting. Those gaps are the product.
- A text chatbot cannot fill a dead gap. A voice agent with turn detection can.

## The four stages

The companion's personality shifts with the stage. This is the originality beat — one agent, four moods, driven by tool state.

| Stage | When | How it sounds |
| --- | --- | --- |
| `picking` | before a dish is chosen | warm, easy, never more than two options at once |
| `cooking` | a step is on screen | calm and steady — one step, then silence |
| `waiting` | a timer is running | **chatty** — asks about your day, tells a small story, reacts |
| `done` | last step cleared | briefly proud, then gets out of the way |

`waiting` is the stage the whole entry exists for. Judges should hear the agent talk about something that is not food.

## Two ways in (both shipped, only one filmed)

1. **Name a dish** — "I want the upgraded instant noodles" → `start_recipe`
2. **Read out the fridge** — "I have eggs, tomatoes, some scallion" → `suggest_dishes` → `start_recipe`

The demo video films path 1 only. Path 2 stays in the build so the prototype does not feel like a rail.

## Tools (5)

| Tool | Args | Does |
| --- | --- | --- |
| `suggest_dishes` | `have: string[]` | matches the fridge list against the recipe book, returns up to 3 with what's missing |
| `start_recipe` | `dish: string` | loads the recipe, renders ingredients + step 1, stage → `cooking` |
| `next_step` | — | advances; auto-starts the step's timer if it has one (stage → `waiting`); returns `finished` after the last step |
| `repeat_step` | — | returns the current step verbatim, for "sorry, say that again" |
| `set_timer` | `seconds`, `label` | ad-hoc timer — "give me three minutes" |

Every step the agent speaks must come back from a tool. The system prompt forbids reciting a recipe from memory, so nothing is hallucinated on stage.

## Demo dish

**Upgraded Instant Noodles / 泡麵升級版** — six steps, three built-in waiting gaps (180s, 90s, 60s). Chosen because it is cheap to film, impossible to get wrong on camera, and the punchline of the whole entry is that even instant noodles are worth having company for.

Two more recipes ship so `suggest_dishes` has something to choose from: Tomato Egg Stir-fry / 番茄炒蛋 and Garlic Butter Fried Rice / 蒜香奶油炒飯.

## Language

Undecided on purpose — the build ships a switch.

- **EN reply** — you speak Mandarin, it answers in English. Cross-language is a real technical beat.
- **ZH reply** — it answers in Traditional Chinese. Warmer, but the voice roster needs checking.

Record one gap in each mode, listen back, then pick. Companionship lives or dies on this, so it is not a decision to make on paper.

## Technical beats (replaces the old three)

`voice_focus` is gone — it belongs to the streaming speech-to-text API, not the Voice Agent API. The kitchen scenario gives three better ones:

1. **Tool-driven personality state** — the agent's tone is not one static prompt; the stage returned by each tool call rewrites how it behaves. Same model, four characters.
2. **`keyterms` for a bilingual kitchen** — dish and ingredient names are fed in as Mandarin key terms so "泡麵升級版" and "蔥花" survive recognition even mid-English sentence.
3. **Barge-in over a live timer** — `interrupt_response` is on, so you can cut the agent off mid-sentence with wet hands and no button. In a kitchen, that is the difference between usable and not.

## Scope defence

This is a **companion for one person cooking one dish**. Not meal planning, not nutrition, not a shopping list, not a grocery integration, no accounts. If it does not happen between "what shall I make" and "it's ready", it is out.

## Deliberately not built

- Login / user accounts — judges click the link and talk, nothing in the way
- Server-side state — recipe progress lives in the browser
- A recipe database — three hand-written recipes, because the point is the companion, not the corpus
