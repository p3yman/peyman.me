---
id: a4L8R13aqGdCzcUz
title: Feedback vs Compliments
description: "An exploration of how many teams confuse compliments with genuine feedback, why this hurts product development, and practical strategies for managers to create environments where real feedback drives meaningful change."
date: 2025-08-17
tags:
  [
    "management",
    "feedback",
    "team-dynamics",
    "leadership",
    "product-development",
    "engineering-culture",
    "communication",
  ]
category: ["Productivity", "Career", "Business"]
cover:
  img: ./cover.jpg
  credit: Planet Volumes
  url: https://unsplash.com/photos/a-row-of-different-colored-eggs-with-faces-painted-on-them-hgEiaquas5U
---

Think about your career for a second. Have you heard a sentence more than "we value feedback"? But... did it feel genuine at all times? In practice, a lot of managers want compliments dressed up as feedback. Tell us we are on the right track. Tell us the process is smooth. Tell us the roadmap is brilliant. The moment you offer real feedback that asks for a change, the tone shifts. You get a speech about context, or you are told the decision is already made, or you get the polite version of thanks but no thanks.

This post is about that _gap_:

- What compliments are good for
- What actual feedback looks like
- Why teams mix them up, how it hurts the product
- What good managers do instead.

## Compliments are not feedback

Compliments are nice. People are not robots. A simple "you handled that meeting really well" makes a tough week feel worth it. Compliments build morale and show that someone noticed the effort.

Feedback is different. Feedback names a specific gap and proposes a change. For example:

> Our PR size is too big, reviewers take days, and tech debt piles up. Let’s break the PRs into smaller pieces and add a daily 1 hour review window.

**👆 That is feedback**. It points at the lever we can pull this week.

Confusing the two is how teams end up smiling through problems that never move.

Isn't it clear what I'm talking about yet? How about a couple of examples?

### Example 1: The pull request swamp

You tell your manager that reviews take forever. You suggest smaller PRs, a 1-hour window for reviews, and a rotating buddy system so no one is blocked. The response: you are doing great, don’t be hard on yourself. We trust you.

On paper that sounds supportive. In reality nothing changed. You still wait three days for a review. QA still tests on Friday night. Releases still break on Monday. Compliments gave you warmth, but feedback needed a workflow tweak and a clear rule.

But why it happens: change is work. It means creating a policy, getting buy-in, and probably pushing back on a senior engineer who does drive-by reviews. Saying great job is easier and faster. Isn't it?

### Example 2: The feature that ships anyway

A designer raises a usability concern. The new onboarding has four steps, it asks for permissions too early, and the copy is vague. They propose a simpler flow. The answer:

> Hmm... thanks for the input, the executive team is excited about this launch, and we are moving forward.

The designer hears your opinion is noted but irrelevant. The team ships a confusing flow, registrations dip, and support tickets spike. A month later, the roadmap moves on and the same pattern repeats. The product becomes a patchwork of decisions that are easy to sell upward and hard to use outward.

Why it happens: managers optimize for alignment with other managers. It is safer to match direction than to pause and risk a red status on a key initiative.

---

## Why managers confuse compliments and feedback

Managers rarely wake up thinking “I’ll ignore feedback today.” Most of the time, the confusion between compliments and feedback comes from a mix of habits, pressure, and comfort. Compliments are easy to give and easy to receive. They keep the mood light, they avoid conflict, and they make it seem like everyone is aligned. Feedback, on the other hand, is heavier. It implies change, effort, and sometimes admitting a decision wasn’t perfect. So managers often default to praise, not because they don’t care, but because it feels safer and quicker in the moment.

It might not be obvious at first, but when you zoom in, there are a few patterns that explain why this happens so often in tech teams:

- **Fear of conflict**: Changing course means a difficult conversation with peers or bosses. Compliments avoid that.

- **Ego and identity**: Feedback feels like a vote of no confidence in prior calls. Some folks hear 'we missed something' as 'you failed.'

- **Time pressure**: It is faster to praise and move on than to redesign a process.

- **Misunderstood positivity**: Leaders confuse good vibes with motivation. Real motivation comes from making a dent in real problems.

## The cost on the team and the product

It might seem harmless when managers lean on compliments instead of real feedback. After all, who doesn’t like to hear they’re doing a good job? But the cost builds up quietly. When feedback is missing, problems pile up under the surface while everyone smiles on top. The team feels good in the moment but slowly loses its ability to learn, adapt, and actually improve. Over time, this gap doesn’t just affect morale — it shows up in the product itself.

Here’s what that usually looks like:

**People stop talking**: When feedback routinely bounces off, folks protect their energy. You get silence in retros and theater in reports.

**Hidden workarounds appear**: Devs make personal scripts or hacks to survive broken processes, but these never get shared or fixed at the team level.

**Ownership dissolves**: [People feel like NPCs](/blog/feeling-like-an-npc-in-the-team/), present in the scene but not shaping the story. They do tasks, not work that they believe matters.

**Product decisions age poorly**: You lose the early warnings that come from the floor. The first time you learn about a problem is when your customer complains, then you have to care.

---

## What good managers do

The difference between a manager who only collects compliments and one who actually listens is how they handle the uncomfortable parts. Good managers don’t just nod along; they create structures where feedback leads to visible action. They show the team that raising a concern is worth the effort, even if the answer isn’t always “yes.” That shift (from feedback as a formality to feedback as a lever) is what keeps teams engaged and products improving.

How can you do it?

**Ask a sharper question**: Instead of 'any feedback,' ask what is one thing we should stop, start, or change this week. Force specificity.

**Make the loop visible**: If someone gives feedback, log it in a shared doc with owner, decision, and follow-up date. Close the loop in writing.

**Act in small ways fast**: You do not need a reorg. Change one rule. Cap PR size. Add a daily review window. Put a decision log in the repo. Let people see that words change work.

**Explain when you disagree**: You do not have to agree to everything, that is not the point here. If you will not act, write two paragraphs about why. Share the constraints and what would change your mind.

**Protect opposition**: Reward the person who surfaced a hard truth. Make it safe for a junior dev to challenge a senior PM in a design review.

**Invite product thinking from engineers**: Ask the frontend dev to join a user interview. Ask the designer to sit in on postmortems. Real feedback crosses roles. If people understand the situations, they will contribute to more things out of their comfort zones.

## Simple practices you can start tomorrow

Big cultural shifts take time, but managers don’t need to wait for a reorg, a new strategy deck, or December to show they value real feedback. The fastest way to change the dynamic is through small, visible actions that prove listening leads to doing. These don’t need budgets or sign-offs, they just need consistency. **When a team sees even tiny adjustments stick, they start to believe that speaking up is worth it**.

Here are a few lightweight practices to try:

**Retro format tweak**: Add a column called 'one process change we will try next sprint.' Choose only one. Commit to it publicly. Review it next retro.

**Decision log**: Keep a lightweight log file in the repo. One decision, one paragraph, one owner, one rollback plan.

**1:1 template**: Keep a shared note with three bullets: what is blocking you, what should we change this week, what did I miss as your manager. Don't underestimate the power of having a safe 1:1. Don't you want to know what to do better? You won't find a better place.

---

## A note on compliments

I just want to add a quick note here to clear any confusion: **Do not throw compliments out**. Celebrate wins. Call out effort in the messy middle. Say thank you when people do the unflashy work. Just do not use praise to dodge change. Compliments are vitamins. Feedback is protein. A healthy team needs both.

---

If you are a manager, stop asking for feedback like it is a nice to have. There is ZERO percent chance that you are doing everything right. If you will not change something, be honest about why. If you are on the team, keep your feedback tied to outcomes and propose a small experiment. Ask for a decision in writing and a date to revisit it.

Teams do their best work when compliments lift morale and feedback shapes reality. That is how you keep people engaged, ship better products, and avoid the slow slide into polite silence.
