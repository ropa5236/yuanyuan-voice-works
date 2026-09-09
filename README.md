# YuanYuan AI 圓圓

**Your hands are wet. And cooking alone is boring.**

A voice companion that cooks with you — picks the dish, walks you through it one step at a time, and stays on the line talking to you while the water boils.

Built for the AssemblyAI Voice Agent Hackathon, September 2026.
Live: https://yuanyuan-voice-works.pages.dev

## The problem nobody builds for

Every smart-kitchen product optimises for speed. None of them notice the actual shape of cooking dinner alone:

- **Your hands are out of action.** Wet, greasy, covered in flour. A screen is useless the moment you start. Voice is not a nicer interface here — it is the only one left.
- **A recipe is mostly waiting.** Water boiling, noodles softening, tomatoes collapsing. Forty minutes in a kitchen, and maybe eight of them are doing anything.
- **Those gaps are lonely.** That is the part a recipe app cannot touch, and the part a voice agent with turn detection is uniquely able to fill.

So this is not a recipe reader. It is company that happens to know the recipe.

## What it does

| You say | It does |
| --- | --- |
| 我想煮泡麵升級版 | loads the dish, reads you step one, starts the timer |
| 我冰箱有蛋、番茄、蔥 | matches your fridge against the book and offers you two or three |
| 好了 | moves to the next step — and only then |
| 再講一次 | repeats the step word for word |
| 幫我計時三分鐘 | sets a timer |
| *(silence while the water boils)* | **asks how your day went** |

That last row is the product.

## Four moods, one agent

The companion's tone is not one flat prompt. Every tool call hands a **stage** back to the model, and the stage rewrites how it behaves:

| Stage | When | How it sounds |
| --- | --- | --- |
| `picking` | before you have chosen | warm, easy, two options at most |
| `cooking` | a step is on screen | calm and steady — says the step, then shuts up |
| `waiting` | a timer is running | **chatty** — your day, a small food story, whatever you want |
| `done` | last step cleared | briefly proud, then out of the way |

## Built with

- **AssemblyAI Voice Agent API** — one WebSocket carrying speech-to-text, the LLM, text-to-speech, turn detection and tool calling
- **Tool-driven personality state** — five tools, each returning the stage that reshapes the agent's tone. Same model, four characters.
- **`keyterms` for a bilingual kitchen** — Mandarin dish and ingredient names fed in so 泡麵升級版 and 蔥花 survive recognition, even dropped into an English sentence
- **`interrupt_response` barge-in** — cut it off mid-sentence with your hands full, no button to press. In a kitchen that is the difference between usable and not.
- **Cloudflare Pages + Pages Functions** — short-lived session tokens, so the API key never reaches the browser

## The five tools

`suggest_dishes` · `start_recipe` · `next_step` · `repeat_step` · `set_timer`

Every step the agent speaks comes back from a tool. The system prompt forbids reciting a recipe from memory, so nothing gets invented on stage.

## Language

The build ships a switch: **you speak Mandarin, it answers in English** — or it answers in Traditional Chinese. Companionship lives or dies on how it sounds, so that one is decided by ear, not on paper.

## Scope

One person, one dish, from "what shall I make" to "it's ready". No meal planning, no nutrition tracking, no shopping list, no accounts. Recipe progress lives in your own browser.

## Run it

Nothing to install. Open the link, allow the microphone, press the button and talk.

To run your own copy: fork, deploy to Cloudflare Pages, and set `ASSEMBLYAI_API_KEY` as an environment variable. The Pages Function at `functions/api/voice-token.js` mints a short-lived token so the key stays server-side.

## Status

In progress. Submission due 30 September 2026.

## License

MIT
