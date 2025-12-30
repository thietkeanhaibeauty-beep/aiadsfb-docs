---
sidebar_position: 9
---

# Run Ads to Custom Audience

Run ads targeting pre-created Custom Audience or Lookalike Audience.

## Description

After creating audiences (Custom Audience or Lookalike), you can run ads directly to them to:
- Retarget engaged customers
- Reach similar audiences (Lookalike)
- Optimize advertising costs

## Command

```
Run ad to custom audience
```

Or specifically:

```
Run ad to audience [Audience Name]
```

## How to Use

### Step 1: Select Audience

AI will display list of available Custom Audiences and Lookalikes:

```
You: Run ad to custom audience

AI: 📋 Audience List:

1. 30 Day Engagers (5,234 people)
2. 60 Day Messengers (2,845 people)
3. LAL 1% - Buyers (980,000 people)
4. LAL 2% - Engagers (1,960,000 people)

Select the audience you want to advertise to:
```

### Step 2: Select or Enter Audience Name

```
You: Select "30 Day Engagers"
```

### Step 3: Set Up Ad

AI will ask for:
- Ad type (Messages/Website/Leads)
- Budget
- Duration
- Ad content

### Step 4: Confirm and Run

```
AI: ✅ Ad created successfully!

📊 Campaign: Retargeting - 30 Day Engagers
🎯 Audience: 5,234 people
💰 Budget: $12/day
📅 Duration: 7 days

Campaign is being reviewed by Facebook...
```

## Important Notes

:::warning Minimum Audience Size
- Custom Audience needs at least **100 people** to run ads
- Lookalike Audience needs source of at least **1,000 people** for effectiveness
:::

:::tip Best Practice
- Retargeting with Custom Audience usually has 30-50% lower CPR
- Combine multiple audiences to increase reach
- A/B test between Lookalike percentages (1% vs 2% vs 3%)
:::

## Combine with Template

You can combine with Targeting Templates:

```
Run ad to "Messengers" audience with template @#spa
```

AI will apply settings from template and run to the selected audience.
