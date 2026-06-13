# Shanmukha Sainadh Yalavarthi Portfolio

Static GitHub Pages portfolio for positioning my current work as an aspiring **AIOps / AI Engineer**.

## Portfolio Theme

```text
Practical AI agents for operations, reflection, and learning automation.
```

## Featured Projects

### Ops Intelligence Agent, OIA

An in-progress AIOps agent that converts CloudOps alerts into structured incident intelligence using LLMs, runbook retrieval, guardrails, and evaluation.

Current evidence:

- Week 1: local LLM baseline with structured JSON incident output
- Week 2: runbook RAG with embeddings, signal gating, `min_score`, and severity policy
- Week 3: deterministic query expansion for terse alert retrieval
- Evaluation includes Top-1, Top-3, negative no-match, and minimum similarity checks

### Daily Reflection Agent

A privacy-first local AI reflection assistant that turns rough daily notes into structured growth reviews.

Current evidence:

- Local LLM workflow through LM Studio
- Fast and Deep reflection modes
- Keyword and vector RAG over private Markdown notes
- SQLite memory and lightweight analytics
- Browser UI and local privacy boundaries

## Site Structure

```text
index.html  Main portfolio content
index.css   Responsive visual design
index.js    Smooth scrolling and small header interaction
```

## Personalization Checklist

Before publishing broadly, update these links in `index.html`:

- LinkedIn URL
- Email address
- OIA repository URL if the public repo name changes
- Daily Reflection Agent repository URL if the public repo name changes
- LinkedIn and email contact links

## Run Locally

Open `index.html` in a browser. No build step is required.
