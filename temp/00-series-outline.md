# Series outline — Agile methods as answers to problems

## Working premise

Most agile comparisons start from the method and ask "what does it prescribe?" That produces
readers who can recite Scrum events but still pick the wrong framework. This series inverts it:
each post starts from a **problem an organisation actually has**, shows what that problem costs,
and only then introduces the methods that were designed as answers to it — including where the
answer does not fit.

The reader outcome: after each post you should be able to say *"we have this problem / we do not
have this problem"*, and from that derive whether a given method is worth its overhead.

## The core distinction that organises the series

- **Team-level methods (Scrum, Kanban)** answer: *how does one team turn intent into working
  software predictably?* The constraint is a team's own flow and focus.
- **Multi-team methods (SAFe, LeSS, Nexus)** answer: *how do many teams reach one outcome without
  spending all their capacity on coordination?* The constraint is dependency and alignment cost.

Confusing these two is the most expensive mistake in the field: organisations adopt a scaling
framework to fix single-team delivery problems, and add coordination overhead to a system that was
already slow for unrelated reasons.

## Post plan

Numbering is provisional. Posts 1–4 are the low-level arc, 5–8 the high-level arc, 9 closes.

| # | Working title | Central problem | Methods examined |
|---|---|---|---|
| 1 | Why methods, and what they are actually for | Unpredictable delivery is a symptom, not a cause | none — sets up diagnosis |
| 2 | The problem of not knowing what to build next | Prioritisation under uncertainty, feedback latency | Scrum |
| 3 | The problem of work that never finishes | WIP, queueing, flow efficiency | Kanban |
| 4 | Choosing between Scrum and Kanban | Cadence vs. continuous flow, variability of demand | both, decision guide |
| 5 | The problem that appears at the second team | Dependencies, integration, shared backlog | overview of scaling |
| 6 | Scaling by removing structure | Descaling, one backlog, one PO | LeSS |
| 7 | Scaling with minimal addition | Integration of a small team-of-teams | Nexus |
| 8 | Scaling by adding structure | Portfolio, funding, regulatory and hardware constraints | SAFe |
| 9 | Choosing a scaling framework | Which constraint dominates your org | all three, decision guide |

## Recurring structure per post

1. **The situation** — a recognisable organisational symptom, told concretely.
2. **What is actually going wrong** — the underlying mechanism (flow, feedback, dependency,
   decision latency). This is the teachable part.
3. **The answer the method proposes** — mechanics, explained as consequences of the problem.
4. **What it costs** — overhead, prerequisites, the failure modes when prerequisites are absent.
5. **Decide** — explicit "adopt this if / do not adopt this if" criteria.

## Diagram plan (`temp/img/`)

Diagrams are Mermaid where possible — the site already supports Mermaid rendering, so they stay
text-editable rather than binary. Raster images only where a photo is wanted for the hero.

- `flow-vs-cadence.mmd` — batch/iteration timeline vs. continuous flow timeline
- `dependency-growth.mmd` — coordination edges as team count grows
- `scaling-decision-tree.mmd` — the post 9 decision guide
- `team-vs-scaled-scope.mmd` — which constraint each family addresses

## Open decisions

- **Language.** Drafts are English. Existing blogs live in `content/nl/blogs/`, so a Dutch pass is
  likely needed before publication. Decide before final rework.
- **Post count.** Nine is the full arc; it can compress to five by merging 2+3 and 6+7+8.
- **Front matter.** Not written yet — these are plain drafts. Hugo front matter, `image`, `tags`
  and dates get added at the rework-into-blogposts step.
