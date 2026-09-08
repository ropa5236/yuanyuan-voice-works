# YuanYuan Voice Works

**AI's ears on the floor.**

A voice inventory assistant for the counter of a chain cafe. Your hands are wet, you are behind the bar, the grinder is loud - so you just say it, and the stock updates.

Built for the AssemblyAI Voice Agent Hackathon, September 2026.

## The problem

AI can forecast, reorder and optimise - but it is never in the room. It decides from data that a human still has to type in.

- Up to 60% of retail inventory records are inaccurate
- That inaccuracy costs retail an estimated $400B in lost revenue every year
- For a chain: one store off by $1,000, times 20 stores, is $20,000 of stock that does not exist

Voice is the cheapest way to close the gap between what happened on the floor and what the system believes.

## What it does

Three things, nothing else.

| You say | It does |
| --- | --- |
| Oat milk, open two | deducts 2 oat milk |
| Vanilla syrup, received twelve | adds 12 vanilla syrup |
| How many vanilla syrup left? | answers out loud, warns when below par |

You speak Mandarin, it answers in English - and it asks you to confirm when it is not sure what it heard.

## Built with

- AssemblyAI Voice Agent API - one WebSocket carrying speech-to-text, LLM, text-to-speech, turn detection and tool calling
- voice_focus far-field noise suppression, for a loud counter
- keyterms_prompt, so it hears the product names correctly
- Tool calling straight into the inventory state
- Cloudflare Pages and Pages Functions - temporary tokens, so the API key never reaches the browser

## Scope

This is the input layer for the person on the floor, not a management back office. No login, no reports, no multi-store transfers.

## Status

In progress. Submission due 30 September 2026.

## License

MIT
