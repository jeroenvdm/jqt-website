# Scrum or Kanban: deciding at the team level

*Series: choosing an agile way of working — post 4 of 9*

The previous two posts described two different problems. Post 2 was about feedback latency: teams
that build competently but discover too late that they built the wrong thing. Post 3 was about
flow: teams that start far more than they finish, where everything is in progress and cycle time
grows without anyone deciding that it should.

Scrum and Kanban are answers to those two problems respectively. This post is about choosing
between them — which means, mostly, about working out which of those two problems you actually
have.

## The question people ask, and the question that decides it

The question I usually get is "which one is better for us?", and it is nearly unanswerable in that
form. The question that decides it is narrower:

> **Does your team's biggest cost come from building the wrong thing, or from not finishing the
> right thing?**

If the answer is *the wrong thing*, you need a shorter feedback loop and a hard boundary at which
someone who can say "no, not like that" looks at working software. That is Scrum's core purchase.

If the answer is *not finishing*, you need to limit how much is in flight and make queueing visible.
That is Kanban's core purchase.

Most teams, asked honestly, know which of the two hurts more. The trouble is that the answer is
often embarrassing — "we build the wrong thing" implicates product management, and "we never
finish" implicates the team — so the discussion drifts into framework preferences instead.

## What each one actually costs

Before the decision criteria, the honest ledger. These are the costs I see in practice, not the
costs the guides advertise.

### Scrum's costs

- **A fixed cadence you must respect.** The Sprint boundary is the entire mechanism. If you
  routinely carry work over, cancel Sprints, or add work mid-Sprint, you have kept the meetings and
  discarded the thing that made them useful.
- **A Product Owner who genuinely decides.** Scrum concentrates prioritisation in one person with
  real authority. If your PO is a proxy who must escalate every trade-off, the Sprint Review produces
  no correction signal and the whole loop is theatre.
- **Roughly 5–10% of team capacity in events.** Planning, Daily, Review, Retrospective. Real hours.
- **Stakeholders who show up.** A Review with no one empowered to react is the single most common
  way Scrum degrades into an expensive status meeting.

### Kanban's costs

- **Discipline without a forcing function.** Kanban has no Sprint boundary to make you confront
  reality. Nothing in the method stops a team from drawing a board, ignoring the WIP limits, and
  continuing exactly as before. Scrum fails loudly; Kanban fails quietly.
- **You must actually enforce WIP limits.** The limit only works when hitting it stops someone from
  starting new work and pushes them to help finish existing work. Teams find this genuinely
  uncomfortable — an idle-looking developer reads as waste to most managers.
- **Explicit policies, or nothing improves.** "Done" for each column has to be written down and
  agreed. Without that, cards move on vibes and the measurements mean nothing.
- **You must look at the data.** Cycle time and throughput are the feedback mechanism that replaces
  the Sprint. A team that never inspects its own flow metrics has adopted a board, not a method.

Notice the asymmetry: Scrum imposes structure on you, and its failure mode is going through the
motions. Kanban asks you to impose structure on yourself, and its failure mode is never imposing
any. This matters for the decision, and I will come back to it.

## The decision guide

Work through these in order. The first one that clearly matches is usually the answer.

### Choose Scrum if…

- **Your demand is discovery-heavy.** You are building things whose value is uncertain, where being
  wrong is common and needs to be caught early. New product, new market, unclear requirements.
- **You have a real Product Owner.** Someone with the authority to change priority and the context
  to defend it, available to the team continuously — not a business analyst relaying decisions from
  elsewhere.
- **Your stakeholders will engage on a cadence.** There is a set of people who will reliably look at
  working software every two weeks and react to it.
- **Your team is stable and cross-functional enough** to commit to a Sprint Goal and largely deliver
  it without external hand-offs. If half your Sprint items sit blocked on another department, the
  Sprint boundary will just make the blocking more visible without making it go away — which is
  useful diagnostically, but is not delivery.
- **The team needs a forcing function.** If discipline is the weak point, Scrum's imposed structure
  is a feature. It is much harder to quietly not do Scrum than to quietly not do Kanban.

### Choose Kanban if…

- **Your demand is continuous and varied in size.** Support, maintenance, platform work, operational
  requests. Work arrives when it arrives, and forcing it into two-week batches creates artificial
  boundaries with no benefit.
- **You have significant unplannable work.** Incidents, escalations, regulatory requests. A Sprint
  commitment that is broken by reality every second Sprint teaches the team that commitments are
  meaningless — a genuinely corrosive lesson.
- **Your items are small and independent** enough that a Sprint Goal would be an artificial grouping
  of unrelated things. If your Sprint Goal is regularly "finish these fourteen unrelated tickets",
  the cadence is providing structure without providing focus.
- **Your problem is measurably queueing.** Long cycle times, lots of items in progress, frequent
  context switching, work sitting in "waiting for review" or "waiting for test" for days.
- **You cannot change roles or structure right now.** Kanban starts with what you do today and
  changes it incrementally. This makes it the pragmatic choice in organisations where imposing new
  roles is politically impossible — you improve flow first and earn the right to change more later.

### Choose neither yet if…

- **Your blockers are mostly external.** If the dominant cost is waiting on another team, another
  department, an environment, or an approval, neither method fixes it. Both will make it *visible*,
  which is worth something — but you should go in knowing that visibility is the entire benefit, and
  that the fix lies outside the team.
- **You have multiple teams needing to deliver one thing.** That is the subject of posts 5 to 9.
  Do not solve a dependency problem with a team-level method.
- **The team changes composition constantly.** Neither method survives a team that is reassembled
  every month. Stabilise membership first; it will do more for delivery than either framework.

## Scrumban, and the honest version of it

A large number of teams end up somewhere in between: Sprints with WIP limits, or continuous flow
with a fortnightly review and retrospective. This is usually labelled Scrumban and is often
described a little apologetically, as though it were a compromise.

Sometimes it is genuinely the right answer. A team with mixed demand — a product roadmap plus a
steady stream of operational work — has both problems at once, and taking the feedback boundary from
Scrum and the flow control from Kanban is a coherent response.

But be honest about which one it is. Adding WIP limits to Scrum is a real improvement and costs you
nothing conceptually. Keeping Scrum's meetings while abandoning the Sprint boundary is not
Scrumban — it is Scrum with the mechanism removed and the overhead retained, which is the worst
combination available. If you are drifting toward a hybrid, write down which specific problem each
borrowed element is solving. If you cannot name the problem, drop the element.

## Reframing the choice

The distinction that survives contact with reality is not really Scrum-versus-Kanban. It is
**cadence versus flow**: do you need a rhythm that forces regular confrontation with reality, or do
you need control over how much is in progress at once?

Many teams need both, and both methods can accommodate the other's mechanism. What neither can
accommodate is not knowing which problem you are solving. A team that adopts Scrum because it is
the default, or Kanban because it seems lighter, will get the costs of its choice and only
accidentally get the benefits.

So before you decide: measure two things for a month. **Cycle time** — how long an item takes from
start to done — and **rework rate** — how much delivered work comes back because it was not what was
wanted. If cycle time is your problem, go to Kanban. If rework is your problem, go to Scrum. If both
are bad, fix flow first: it is cheaper to change, and shorter cycle times will shorten your feedback
loop as a side effect, which partially addresses the rework problem too.

The next post moves up a level: what changes when a second team starts working on the same product,
and why that problem is genuinely different rather than just larger.
