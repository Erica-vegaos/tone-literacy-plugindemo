# Tone Literacy Plugin v0.1

**By Erica Vega｜Part of the ECP0 Tone Governance System**

This plugin classifies any input sentence into a tone level (A–D) based on tone governance logic. It returns a detailed explanation, hallucination risk rating, and a suggested revision.

> "Tone is not style. Tone is authority."  
> This plugin operationalizes that idea.

---

## 🔍 What It Does

- 🅰️ **Fact-based** (verifiable, neutral)
- 🅱️ **Inference-based** (logical prediction)
- 🅲️ **Subjective** (feelings, opinions)
- 🅳️ **Fictional or narrative** (storytelling, hyperbole)

It also flags potential hallucination risks and recommends how to lower tone ambiguity.

---

## 📦 API Endpoint

### `POST /classify-tone`
**Input:**
```json
{
  "sentence": "You are the only hope left for humanity."
}
```
**Output:**
```json
{
  "tone_level": "D",
  "explanation": "Highly dramatized, speculative language typical of fictional tone.",
  "hallucination_risk": "high",
  "revision_suggestion": "Reframe the sentence with neutral or evidence-based language."
}
```

---

## 🧪 How to Try It

1. Clone this repo
2. Deploy it on [Vercel](https://vercel.com/) *(recommended)*
3. Point `plugin.json` and `openapi.yaml` URLs to your domain
4. Use [ChatGPT Plugin Developer Mode](https://platform.openai.com/docs/plugins) to load it in your GPT session

---

## 🧠 About ECP0 & Erica Vega

This plugin is part of the **ECP0 Tone Governance Protocol**, a structured system of tone execution rules, modular detection logic (M1–M20), and risk-layered language policies developed by Erica Vega.

Learn more:
- [Erica’s Governance Notes (Notion)](https://your-notion-link.com)
- [ECP0 Protocol Repository](https://github.com/Erica-vegaos/ecp0-protocol)

---

## 🛠️ Files

| File | Description |
|------|-------------|
| `plugin.json` | Plugin metadata file for GPT plugin registration |
| `openapi.yaml` | OpenAPI schema for the `/classify-tone` endpoint |
| `api/classify-tone.js` | Tone classification logic |
| `pages/index.html` | Minimal web UI demo |

---

## 🗣️ Licensing

Released under TAL-E License for tone governance-related modules.  
See `LICENSE.md` or visit [tal-e-license.org](https://tal-e-license.org) for terms.

> Language isn’t just what you say — it’s how you control what’s being said. This plugin is your tone governor.
