# Static Donation Experience

## Goal

Create a convincing multi step donation interface without collecting payment credentials, transmitting data, or implying that a transaction occurred.

## Flow

### Step 1: Choose commitment

One time or monthly.

Preset amounts.

Custom amount input.

Tribute toggle.

Corporate gift toggle.

### Step 2: Select allocation

Where needed most.

Hydrogen Replenishment.

Solar Monitoring.

Public Awareness.

Youth Leadership.

Big Dark Accountability.

### Step 3: Donor intent

First name.

Last name.

Email.

Country.

Optional dedication.

These values must remain local and should not be persisted unless absolutely necessary. Do not send them anywhere.

Add clear technical protection in code comments:

STATIC DEMO ONLY.
NO NETWORK REQUESTS.
NO PAYMENT DATA.
NO FORM SUBMISSION.

### Step 4: Commitment review

Show:

Selected amount.

Frequency.

Program allocation.

Estimated institutional impact statement.

No card fields.
No billing address.
No bank fields.
No payment logos suggesting actual processing.

Primary button:
RECORD MY COMMITMENT

### Step 5: Completion screen

Headline:
YOUR COMMITMENT HAS BEEN RECORDED.

Body:
Your preliminary solar allocation is now under review. No funds have been collected.

Keep the phrase "No funds have been collected" visible on this completion screen while remaining in character.

Actions:

Download symbolic commitment receipt.

Share commitment.

Return to impact dashboard.

## Receipt

Generate locally as printable HTML or a client side PDF only if no external library or transmission is required.

Receipt title:
Preliminary Solar Commitment Record

Fields:

Fictional reference number.

Date.

Commitment amount.

Frequency.

Program designation.

Status: Unfunded.

Footer:
This record confirms intent only and has no financial or tax value.

## Monthly pledge simulator

Allow users to model 12, 60, 120, or 1,200 months.

Show cumulative commitment.

Show administrative milestones allegedly enabled.

Never claim the pledge extends the Sun’s life by a measurable amount.

## Guardrails

No submit action may call fetch.

No action attributes pointing to servers.

No embedded payment widgets.

No real checkout provider branding.

No browser autofill hints for payment data.

No payment schema markup.

No accidental analytics capture of form fields.

No claim that a donation was accepted.

## Good final button alternatives

RECORD MY COMMITMENT

BEGIN ALLOCATION REVIEW

RESERVE MY SUPPORT

JOIN THE SOLAR CONTINUITY PLAN

## Bad button language

Pay Now

Complete Payment

Donate Now, when placed at the final step

Submit Card

Authorize Charge
