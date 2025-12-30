---
sidebar_position: 5
---

# Auto Budget Optimization 24/7

AI automatically adjusts budget based on performance, running 24/7.

---

## Description

This feature helps:

- **Increase budget** when campaign is effective (low CPR)
- **Decrease budget** when costs are high (high CPR)
- Automatic check on schedule (every 30 minutes)
- No staff required

---

## Command

```
Create budget optimization rule
```

---

## Example

```
You: Create budget optimization rule

AI: Rule activated!

Increase 20% when CPR < $2
Decrease 30% when CPR > $4
Check every 30 minutes

AI: Applied to 5 campaigns
```

---

## Default Rules

| Condition | Action |
|-----------|--------|
| CPR < $2 | Increase budget 20% |
| CPR $2 - $4 | Keep unchanged |
| CPR > $4 | Decrease budget 30% |
| No results after 4h | Pause |

---

## Customization

You can customize:
- CPR threshold for increase/decrease
- Percentage increase/decrease
- Check frequency
- Maximum/minimum budget limits

---

:::info 24/7 Operation
Rule runs continuously even when you're not online!
:::
