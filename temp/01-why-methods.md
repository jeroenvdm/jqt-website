# Why agile methods exist, and what they are actually for

*Series: choosing an agile way of working — post 1 of 9*

Every organisation I have worked with that was unhappy with its way of working described the
problem in roughly the same words: *"we are not predictable"*, or *"things take too long"*, or
*"the business does not know what they want"*. And almost every one of them had already tried to
solve it by adopting a method. They ran Scrum, or they were "doing SAFe", or someone had put a
board on the wall and called it Kanban.

The methods were not the problem. The problem was that nobody had asked what the method was
supposed to be an answer to.

This series is written to close that gap. Rather than describing Scrum, Kanban, SAFe, LeSS and
Nexus and inviting you to compare feature lists, each post starts from a problem an organisation
actually has, explains the mechanism that makes it expensive, and only then shows which methods
were designed as answers — and what they cost when the problem you have is a different one.

## A method is a bet about your constraint

Here is the uncomfortable thing about agile frameworks: they are all internally coherent, and they
all work somewhere. Scrum works. Kanban works. LeSS works. SAFe works. The disagreements between
their proponents are usually not disagreements about mechanics but about which constraint dominates
in a typical organisation.

Every method encodes a bet:

- **Scrum** bets that your dominant constraint is *feedback latency* — you are building the wrong
  things, and you find out too late.
- **Kanban** bets that your dominant constraint is *flow* — you are probably building roughly the
  right things, but too many of them at once, so nothing finishes.
- **LeSS** bets that your dominant constraint is *organisational structure* — the coordination
  problem exists because you have divided the work into too many owners.
- **Nexus** bets that your constraint is *integration* — a small number of teams producing
  increments that do not fit together.
- **SAFe** bets that your constraint is *alignment across a large system* — many teams, long-lived
  funding cycles, external commitments, and a need for planning that reaches beyond one team's
  horizon.

If you adopt a method whose bet does not match your constraint, you do not get a partial benefit.
You get the full cost of the method with none of the payoff, and — this is the part people
underestimate — you get a *new* constraint that the method's overhead introduces. This is how a
company ends up with more ceremonies, more roles, more artefacts, and delivery that is measurably
slower than before.

## Symptoms are not constraints

The reason methods get adopted for the wrong reasons is that the symptom is loud and the constraint
is quiet.

Consider the most common complaint: *we keep missing our deadlines*. That is a symptom. Underneath
it, in different organisations, I have found completely different mechanisms:

- Work items enter the team faster than they leave, so everything is in progress and nothing is
  done. The team is busy at 100% and delivering at 40%.
- The team finishes work on time, but it is the wrong work — it goes to a stakeholder who says
  "this is not what I meant", and the rework is invisible in the plan.
- The team cannot finish because each item requires a decision, an environment, or an approval from
  somewhere else, and the waiting time exceeds the working time by a factor of five.
- The team is fine, but there are nine teams, and any meaningful feature requires four of them to
  change something in the same month.

These four are the subject of the rest of the series, and they demand different answers. The first
is a flow problem and Kanban's WIP limits address it directly. The second is a feedback problem and
Scrum's iteration boundary with a review addresses it directly. The third is a dependency problem
that no team-level method fixes, because the constraint is not inside the team. The fourth is a
scaling problem, and it is the only one of the four where SAFe, LeSS or Nexus are even relevant.

Notice that in three of the four cases, adopting a scaling framework would have been actively
harmful. It would have added coordination structure to a system whose problem was internal to a
single team.

## The two levels, and why the distinction matters

This series is organised around a distinction that I want to make explicit now, because most of the
expensive mistakes in this field come from blurring it.

**Team-level methods — Scrum and Kanban — answer a question about one team:** how does a group of
people turn intent into working software predictably? The constraint they address lives inside the
team's own process: how work is selected, how much is taken on at once, how quickly the team learns
whether it built the right thing.

**Multi-team methods — SAFe, LeSS and Nexus — answer a question about many teams:** how do a number
of teams reach one outcome without spending the majority of their capacity on coordinating with
each other? The constraint they address is the cost of dependency and alignment, and it barely
exists below a certain number of teams.

The crucial property is that these do not substitute for each other. A scaling framework does not
fix a single team that cannot finish work; it wraps that team in more process. And a team-level
method does not fix nine teams that all need to change the same component in the same quarter; the
teams can each be flawless and the outcome still late.

So the first diagnostic question is not "which framework?" It is: *is my problem inside a team, or
between teams?* If you cannot answer that confidently, the rest of the series will help — and you
should not adopt anything until you can.

## What overhead actually buys you

One more idea before the diagnosis begins, because it recurs in every post.

Every element of every method is overhead: a meeting, a role, an artefact, a rule. Overhead is not
inherently bad — it is a purchase. A Sprint Review costs a room full of people an hour and buys you
a correction signal before you have spent another month building the wrong thing. A WIP limit costs
you the discomfort of an idle developer and buys you shorter cycle times for everything in the
system. A SAFe PI Planning event costs a large organisation two days of everyone's time and buys
you dependencies surfaced and negotiated in the open rather than discovered in month three.

Each purchase is worth it only if you actually have the problem it addresses. An hour-long review
with no stakeholder who can say "that is wrong" buys nothing. A WIP limit in a team with no queueing
problem buys nothing. Two days of PI Planning for three teams with no real dependencies between
them buys nothing, and costs a great deal.

So throughout this series, every method gets the same treatment: what it costs, and what that
purchase gets you. Where the answer is "nothing, in your situation", I will say so.

## How to use the rest of this series

The next three posts deal with the team level. Post 2 examines the problem of not knowing what to
build next — feedback latency — and Scrum as the answer to it. Post 3 examines the problem of work
that never finishes — flow and queueing — and Kanban as the answer. Post 4 puts the two side by
side as an explicit decision guide.

Posts 5 through 9 deal with the multi-team level: what changes when the second team arrives, the
three main answers, and how to choose between them.

If you already know which level your problem is on, skip ahead. If you do not, start with post 2 and
read in order — the diagnosis is cumulative, and by post 4 you will have a clear enough picture of
your own constraint to know whether the scaling half of the series applies to you at all.

The goal is not that you finish this series able to describe five frameworks. It is that you finish
it able to describe your own organisation's constraint precisely enough that the choice of method
becomes obvious — and, in a satisfying number of cases, becomes unnecessary.
