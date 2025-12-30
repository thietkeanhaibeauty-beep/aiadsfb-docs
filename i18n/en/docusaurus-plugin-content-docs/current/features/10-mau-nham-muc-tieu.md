---
sidebar_position: 11
---

# Create Targeting Template

Save targeting templates for quick reuse when creating ads.

---

## Description

Targeting Templates help you:

- Pre-save targeting settings
- Quick reuse with `@#` keyword
- Consistent campaigns
- Save time

---

## Command

```
Create targeting template
```

---

## Configuration Fields

| Field | Description | Example |
|-------|-------------|---------|
| Trigger keyword | Starts with @# | `@#spa` |
| Campaign name | Campaign name prefix | `Spa Beauty...` |
| Age from/to | Target age range | 25 - 45 |
| Gender | Male/Female/All | Female |
| Daily budget | USD | $8 |
| Location type | Country/City/Radius | City |
| Location name | Specific location | New York, LA |
| Interests | Comma separated | beauty, spa |
| Headlines | One per line | HOT Deal! |
| Greeting template | Auto-reply greeting | Hi there! |
| FAQ | Max 3 questions | What's the price? |

---

## Template Example

```
Keyword: @#skincare
Campaign name: Skincare
Age: 28 - 50
Gender: Female
Budget: $12/day
Location: United States (nationwide)
Interests: beauty, skincare, aesthetics, dermatology
Headlines: 
  - 99% Effective Treatment
  - Glowing Skin in 1 Session
Greeting: Hi! I can help you with skincare consultation
Questions:
  - How much is the treatment?
  - How long is the process?
  - Do you guarantee results?
```

---

## Using Templates

After creation, use by:

```
@#skincare
https://www.facebook.com/reel/xxx
```

---

:::tip Template Management
You can view, edit, delete templates in **Settings → Targeting Templates**.
:::
