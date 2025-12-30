---
sidebar_position: 12
---

# Create Automation Rules

Set up automation rules to manage campaigns based on performance.

---

## Description

Automation rules help:

- Auto-pause underperforming campaigns
- Increase/decrease budget based on conditions
- Send notifications when thresholds are reached
- Label and categorize campaigns

---

## Command

```
Create automation rule
```

---

## Rule Structure

### IF Section (Conditions)

| Metric | Description |
|--------|-------------|
| Spend | Total amount spent |
| CPR | Cost per result |
| CPC | Cost per click |
| CTR | Click-through rate |
| Results | Number of conversions |
| Impressions | Views |

**Conditions:** Greater than, Less than, Equal to, Greater than or equal, Less than or equal

### THEN Section (Actions)

| Action | Description |
|--------|-------------|
| Turn off campaign | Pause campaign |
| Turn on campaign | Resume campaign |
| Increase budget | Increase by % |
| Decrease budget | Decrease by % |
| Send notification | Zalo/Email |
| Add label | Categorize campaign |

---

## Rule Examples

### Turn off high-spend campaign

```
IF: Spend > $20
THEN: Turn off campaign + Add label "Bad Camp"
```

### Increase budget for good campaign

```
IF: CPR < $1.5
THEN: Increase budget 20% + Add label "Good Camp"
```

### Notify when goal reached

```
IF: Results >= 50
THEN: Send Zalo notification
```

---

:::warning Note
Rules will apply to **ALL** running campaigns. Consider carefully before creating!
:::

:::tip Best Practice
- Start with wide thresholds, adjust gradually
- Test rules on 1-2 campaigns first
- Combine multiple rules for comprehensive optimization
:::
