# Priyatham Chimmani

**EHS &amp; ESG Data and Systems · Hexion Inc.** · Columbus, Ohio

> I turn plant, safety, and operational data into decisions executives can act on.

*Safety numbers are only as good as the denominator and the citation underneath them.* That question started with
the hours data behind our own TRIR, moved into the platforms that govern it, and became a research programme on
whether national injury statistics and AI answers can be trusted.

**[Website](https://priyatham9.github.io/)** · **[Grounded research programme](https://priyatham9.github.io/grounded/)** · [LinkedIn](https://linkedin.com/in/priyatham9) · [priyatham9@gmail.com](mailto:priyatham9@gmail.com)

> **Featured: [EHS Insight Hub](https://priyatham9.github.io/work/insight-hub.html)**, a Palantir Foundry widget over an ontology of 12 EHS object types (cases, events, concerns, insights), with every KPI and status rule in one logic module. In review.

---

## At a glance

- **Owns the enterprise EHS system end to end.** Sole global administrator of Benchmark ESG (Gensuite) for a global chemicals manufacturer, including OSHA, MSHA, and ACC compliance reporting and government submissions.
- **Shipped at scale.** Led the Gensuite refresh (Phases 1 and 2): 80+ feature enhancements to how global sites capture safety data.
- **Recognised for business impact.** Transformation Award for the Micro Market Model, a Python linear-programming engine; plus Leadership and STAR awards.
- **Found what national injury rates miss.** Analysed 2.8M OSHA filings: 2.07% of filings carry 96.7% of reported hours, and the TRIR correction swings from 1.4x to 249x between years.
- **Builds in public, and checks itself.** 996 test functions across six programme repositories, a draft paper with 197 references, and a [claims registry](https://github.com/priyatham9/grounded/blob/main/claims/claims.json) in which each headline number is tied to a committed source file and a test, checked in CI and weekly.

## What I do

| | |
|---|---|
| **EHS &amp; ESG systems** | Enterprise EHS platform ownership, regulatory compliance reporting, government submissions. |
| **Data engineering** | Databricks medallion pipelines with Unity Catalog, integrating SAP, Dynamics 365, Icertis, and warehouse feeds into audit-ready reporting. |
| **Applied AI** | NLQ and summarization agents on Copilot Studio, Claude Code, and OpenAI APIs, grounded in live systems through MCP. |
| **Decision support** | Board-level reporting, Power BI and Microsoft Fabric architecture, linear-programming optimization. |

## Research: [Grounded](https://priyatham9.github.io/grounded/)

A programme on grounded reasoning for safety-critical AI in EHS and process industries. [Start here →](https://priyatham9.github.io/grounded/start.html)

**Verifiability.** Headline numbers are listed in the [claims registry](https://github.com/priyatham9/grounded/blob/main/claims/claims.json) (22 claims, each with its source file, expected value and verifying test; checker in `claims/check_claims.py`). Metric definitions, with their 29 CFR 1904 sources, are in the [metric dictionary](https://github.com/priyatham9/grounded/blob/main/metrics/DICTIONARY.md), and a test checks that the Python and TypeScript implementations agree.

| Project | What it shows | Code |
|---|---|---|
| [OSHA data quality](https://priyatham9.github.io/ehs-osha-analysis/) | 2.8M establishment filings, CY2016-2024. A flagged establishment is flagged again next year 27.2% of the time vs 0.95% for a clean one. Also: a [browser filing checker](https://priyatham9.github.io/ehs-osha-analysis/filing_check.html) for one Form 300A (rules in one JSON spec, Python and JavaScript parity test), a rate detectability planner (site-years needed to tell two TRIRs apart, by size band), and a typed ontology client generated from the ontology spec. | [repo](https://github.com/priyatham9/ehs-osha-analysis) |
| [AI grounding benchmark](https://priyatham9.github.io/ehs-ai-grounding-eval/) | 68 safety-critical QA items across 8 domains, built around plausible-but-dangerous answers. Adds answer-or-abstain scoring (risk-coverage, AURC) for four non-LLM retrievers; no language model has been evaluated. Four regulatory-currency draft items are quarantined, excluded from scoring until verified. | [repo](https://github.com/priyatham9/ehs-ai-grounding-eval) |
| [Human factors ontology](https://priyatham9.github.io/ehs-human-factors-ontology/) | OWL ontology crosswalked to SPAR-H, CREAM, HFACS and HSE PIFs, with traceable rule derivations. Adds 10 CSB investigations coded to the crosswalk (25 codings, each with a quoted passage) and a rule-based narrative-to-factor suggester scored against them: precision 0.74, recall 0.80, fitted to those same 25 pairs, so optimistic (0.56 recall without rules taken from the quotes). | [repo](https://github.com/priyatham9/ehs-human-factors-ontology) |
| [SEM for safety risk](https://priyatham9.github.io/ehs-risk-sem/) | Simulation studies on what structural equation models can and cannot recover. | [repo](https://github.com/priyatham9/ehs-risk-sem) |
| [Safety cost-benefit calculator](https://priyatham9.github.io/ehs-capitals-calculator/) | Human-capital-inclusive ROI with sensitivity and Monte Carlo modes. | [repo](https://github.com/priyatham9/ehs-capitals-calculator) |
| [OSHA benchmarks](https://priyatham9.github.io/ehs-benchmarks/) | TRIR/DART library and percentile tables for 3,842 NAICS x size peer groups. | [repo](https://github.com/priyatham9/ehs-benchmarks) |
| [Chemical plant peers](https://priyatham9.github.io/ehs-chemical-peers/) | 10,597 US chemical plants, joining OSHA injury logs with EPA release records. A low injury rate did not predict fewer chemical releases. A [two-group comparison page](https://priyatham9.github.io/ehs-chemical-peers/compare.html) shows any two groups side by side with exact intervals and an exact test. | [repo](https://github.com/priyatham9/ehs-chemical-peers) |

### Foundry-style builds on public data

[A hub page](https://priyatham9.github.io/foundry-style/) lists the builds that apply Foundry's patterns (ontology, typed client, functions and actions, lineage, data expectations) in plain Python and static HTML, each with its repository files and stated limits. They use public data only, need no Foundry account, and are independent: not made by, affiliated with or endorsed by Palantir.

## Selected work

- **[EHS Insight Hub](https://priyatham9.github.io/work/insight-hub.html)** (in review). Palantir Foundry widget: 12 linked ontology object types, KPI and status logic in one module, and a Gensuite-style view. Verified on a branch over 190 cases, 1,221 events, 11,546 concerns and 82 insights.
- **Enterprise ontology and digital twin.** Leading the migration to Palantir Foundry: one governed model spanning EHS, supply chain, procurement, and finance.
- **[Micro Market Model](https://priyatham9.github.io/work/micro-market-model.html).** Python linear-programming engine that pinpoints competitive opportunities across micro markets. Transformation Award.
- **[Gensuite refresh, Phase 1 and 2](https://priyatham9.github.io/work/gensuite-refresh.html).** End-to-end refresh of the enterprise EHS application, 80+ feature enhancements.
- **[Enterprise agent layer](https://priyatham9.github.io/work/agent-layer.html).** NLQ and summarization agents with an MCP architecture and deterministic algorithms, keeping answers reproducible and auditable.
- **[Resin &amp; Wood Market Weather Brief](https://resin-wood-market-weather-brief.vercel.app/).** Live decision-support app turning EPA, Census, and BLS data into scored, state-level actions and scenario simulation.

## Recognition

- **Leadership Award** · international IT leadership assignment at the Pernis site, Port of Rotterdam
- **Transformation Award** · Micro Market Model
- **STAR Award** · end-to-end design and implementation of site safety incentive metrics

## Currently

Starting a **Ph.D. in Technology and Artificial Intelligence** at Southwest Baptist University, alongside enterprise data and AI platform work at Hexion.

<details>
<summary><b>Tools</b></summary>

`Python` · `PySpark` · `SQL` · `Databricks` · `Palantir Foundry` · `Power BI` · `DAX` · `Microsoft Fabric` · `Tableau` · `SAP` · `Dynamics 365` · `Azure DevOps` · `MCP` · `OpenAI API` · `Copilot Studio` · `R`

</details>

---

<sub>Open to EHS &amp; ESG leadership and implementation roles · [priyatham9.github.io](https://priyatham9.github.io/)</sub>
