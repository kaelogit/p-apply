# PCH Send Playbook

pchcoordinator@protonmail.com (Dave) · +1 (917) 743-0256 (text only) · **Site:** `NEXT_PUBLIC_SITE_URL` on Vercel · Dave Sayer

---

## Rules

1. Steps 1–2: Email + Text if you have both.
2. CONFIRM on text → text only. CONFIRM on email → email only.
3. Same ref every message. Sign texts: `Dave Sayer, PCH Application Coordinator`
4. Send the **hold** message below each step before the next send.
5. No decline — guide forward.
6. Payment flow: **PAY MENU** (they pick method) → **PAY DETAILS** (you send cashier info for that method). Fill `[PAY TO]` from your sheet.
7. Standard files ($800): Apple Pay, Zelle, Cash App, bank transfer. **Wire + cashier's check only for $2,500,000 Super Prize** (higher admin amount — use `[ADMIN AMOUNT]`).

| Step | Text | Email |
|------|------|-------|
| 1 | Text 1 (+ CONFIRM) | Email 1 (+ CONFIRM) |
| 2 | Profile form link | Profile form link |
| 3 | Under review | Under review |
| 4–6 | Selection → Affidavit → Pay | … |
| Pay menu | Text PAY MENU | Email PAY MENU |
| Pay details | Text PAY DETAILS | Email PAY DETAILS |
| Delivery | ↓ bottom | ↓ bottom |

**Online apply flow:** Basic form at site URL → operator notification to Proton → you send Text 1 + Email 1 → after reply → Step 2 (profile form link) → Step 3 (under review) → Step 4 selection → Step 5 affidavit → Step 6 payment → delivery.

**Links in messages:** use `NEXT_PUBLIC_SITE_URL` from Vercel (e.g. `https://p-apply.vercel.app`) + path — not applypch.com until the domain is restored.

**Tone:** Professional + courteous (Publishers Clearing House, reference numbers, clear deadlines). Warm but official — not slang, not overly casual.

---

# BASIC ONLINE APPLY (applypch.com) — what they submit first

| Field | Required |
|-------|----------|
| Full name | Yes |
| Email | Yes |
| Mobile phone | Yes (country code from country) |
| Country | Yes |
| State / Region | Yes |
| City | Yes |
| Street address | Yes |
| Postal / ZIP | Yes |
| Prize category | Yes |
| Why applying (message) | Yes |
| 18+ and rules confirm | Yes |

Optional on success page: **fast-track text** — applicant sends only: `My name is [name]. I just submitted my application at applypch.com. Thank you.` → you reply with **Step 1** (received + CONFIRM) → after CONFIRM → **Step 2** profile form.

---

# STEP 1 — Application received (operator notification; you send text + email)

*Site notifies your Proton inbox on apply submit — no auto-email to applicant. You send Text 1 and Email 1 manually.*

**Operator notification (site — automatic)** — lands in `pchcoordinator@protonmail.com` via Gmail SMTP

When someone submits at the site, you receive the full application at your Proton inbox (`TO_EMAIL`). Subject example: `[PCH Application] Jane Doe — Ref PCH-128553974 — Tampa, USA`. Reply-To is the applicant's email.

**Set reference in Vercel env:**
- `APPLY_REF_ID` = `128553974` (default — same ref for every applicant until you change it)

**Email 1** — Subject: Your PCH Application Has Been Received — Ref PCH-[REF]

Send manually from `pchcoordinator@protonmail.com` after you see the notification:

Example body:
```
Dear [First Name],

Thank you for submitting your Publishers Clearing House prize application at applypch.com. We have received your application.

Application reference: PCH-128553974
Category: All

You have been assigned to me, Dave Sayer, PCH Application Coordinator, as your point of contact on this file.

Please respond to this email or our text from +1 (917) 743-0256 within 12 hours to begin your application process.

Once we receive your reply, your file will continue to the next stage of review and all future communication regarding this application will remain within this email thread.

This is not a final prize award.

Dave Sayer
PCH Application Coordinator
Publishers Clearing House
pchcoordinator@protonmail.com
```

**Text 1** (you send — email already handled)
```
Hi [First Name], this is Dave Sayer, PCH Application Coordinator, Publishers Clearing House.

Thank you for applying at applypch.com. We have received your application.

Reference: PCH-[REF]
Prize category: [category]
Date submitted: [MM-DD-YYYY from notification email]

You have been assigned to me on this file. Please reply CONFIRM on this text within 12 hours.

If you confirm on this text, your file will continue on this official text line only. This is not a final prize award yet.

Dave Sayer
PCH Application Coordinator
```

---

# STEP 2 — Complete application profile online (channel locked)

*After CONFIRM — skip text/email Q&A. Send profile form link only.*

**When they reply CONFIRM — send hold first:**

Text hold:
```
Thank you, [First Name]. We have received your CONFIRM for reference PCH-[REF]. Kindly hold on briefly while I access your file in our system. I will contact you shortly with the next step.

Dave Sayer
PCH Application Coordinator
```

Email hold:
```
Dear [First Name],

Thank you for confirming. We have received your CONFIRM for reference PCH-[REF]. Kindly allow a brief moment while I access your file. I will email you shortly with the next step.

Dave Sayer
PCH Application Coordinator
```

**Profile form URL** — five fields from basic apply. Name, email, phone, and category pre-fill on the form; applicant fills DOB, mailing address, ID, and profile questions themselves. URL-encode spaces (`%20`) and phone `+` (`%2B`).

Template:
```
https://p-apply.vercel.app/documents/application-profile.html?ref=PCH-[REF]&name=[Full Name]&email=[email]&phone=[phone]&category=[category]
```

Example (Patricia):
```
https://p-apply.vercel.app/documents/application-profile.html?ref=PCH-128553974&name=Patricia%20Lewis&email=suckianne@gmail.com&phone=%2B15102277458&category=2500000
```

**Then send Text 2** (text track)
```
The next step is your verification profile on our official site. Open this link to complete your applicant profile and your identity verification:

[PASTE PROFILE LINK]

After you submit, you should see a confirmation on screen and receive an email that your profile is being processed for final review.

Please complete within 12 hours to avoid your application being placed on hold. Reference: PCH-[REF]

Dave Sayer
PCH Application Coordinator
```

**Then send Email 2** — Subject: Complete Your PCH Application Profile — PCH-[REF]

```
Dear [First Name],

The next step is your verification profile on our official site. Open this link to complete your applicant profile and your identity verification:

[PASTE PROFILE LINK]

After you submit, you should see a confirmation on screen and receive an email that your profile is being processed for final review.

Please complete within 12 hours to avoid your application being placed on hold. Reference: PCH-[REF]

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

*Applicant receives automatic email from site when form is submitted. You receive operator notification email. Then send Step 3 when ready.*

---

# STEP 3 — Under review (channel locked)

**When profile form is submitted — send hold first (optional if auto-email already sent):**

Text hold:
```
Thank you, [First Name]. We have received your complete application profile for reference PCH-[REF]. Kindly hold on briefly while I review your file with our office. I will contact you shortly with an update.

Dave Sayer
PCH Application Coordinator
```

**Then send Text 3**
```
Hi [First Name], this is Dave Sayer, PCH Application Coordinator.

Your application and verification profile for reference PCH-[REF] have been received and are under final review for the current Publishers Clearing House prize drawing.

This is not a final prize award. I will contact you on this thread when your file advances.

Dave Sayer
PCH Application Coordinator
```

**Then send Email 3** — Subject: Your PCH Application Is Under Review — PCH-[REF]

```
Dear [First Name],

We have received your complete application profile for reference PCH-[REF]. Your file is under final review for the current prize drawing.

This is not a final prize award. I will email you when your application advances.

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

---

# STEP 4 — Selection (channel locked)

**When ready to award — send hold first:**

Text hold:
```
Thank you, [First Name]. We have received your responses for reference PCH-[REF]. Kindly hold on briefly while I review your file with our office. I will contact you shortly with an update.

Dave Sayer
PCH Application Coordinator
```

Email hold:
```
Dear [First Name],

Thank you. We have received your responses. Kindly allow a brief moment while I review your file. I will email you shortly.

Dave Sayer
PCH Application Coordinator
```

**Then send Text 4**
```
Hi [First Name], this is Dave Sayer, PCH Application Coordinator, Publishers Clearing House.

Congratulations. Following verification and final review, you have been selected as a prize recipient in the current drawing.

Prize awarded: [tier + amount]
Prize structure: [lump sum / weekly / ongoing]
Reference: PCH-WIN-[ID]

This selection is conditional until final steps are complete.

Please reply on this text within 12 hours with:
1. ACCEPT
2. CHECK (bank check delivery to your address) or CASH (Prize Patrol cash delivery)

I will send your Affidavit of Eligibility link on this text after your reply.

Congratulations,
Dave Sayer
```

**Then send Email 4** — Subject: PCH Selection Notice — Prize Determination

```
Dear [First Name],

Congratulations. Following verification and final review, you have been selected as a prize recipient in the current Publishers Clearing House drawing.

Prize awarded: [tier]
Prize structure: [structure]
Reference: PCH-WIN-[ID]

This selection is conditional until final steps are complete.

Please reply within 12 hours with ACCEPT and your delivery preference (CHECK or CASH).

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

---

# STEP 5 — Affidavit (channel locked)

**When they reply ACCEPT + CHECK/CASH — send hold first:**

Text hold:
```
Thank you, [First Name]. We have received your acceptance for reference PCH-WIN-[ID]. I am preparing your Affidavit of Eligibility now. You will receive the link in my next message.

Dave Sayer
PCH Application Coordinator
```

Email hold:
```
Dear [First Name],

Thank you for your acceptance. I am preparing your Affidavit of Eligibility and will email you the link shortly.

Dave Sayer
PCH Application Coordinator
```

**Then send Text 5**
```
Hi [First Name], this is Dave Sayer, PCH Application Coordinator.

Please complete your Affidavit of Eligibility at:

https://p-apply.vercel.app/documents/affidavit-of-eligibility.html

Instructions:
- Complete every field
- Type your full legal name as your electronic signature
- Check the agreement box and submit

You may save a PDF copy for your records. When finished, reply on this text: AFFIDAVIT SUBMITTED

Reference: PCH-WIN-[ID]

Dave Sayer
```

**Then send Email 5** — Subject: PCH Affidavit of Eligibility — Action Required

```
Dear [First Name],

Please complete your Affidavit of Eligibility:

https://p-apply.vercel.app/documents/affidavit-of-eligibility.html

Complete every field, sign electronically, and submit. Reply AFFIDAVIT SUBMITTED to this email when finished.

Reference: PCH-WIN-[ID]

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

---

# STEP 6 — Processing / $800 (channel locked)

**When they reply AFFIDAVIT SUBMITTED — send hold first:**

Text hold:
```
Thank you, [First Name]. We have received your affidavit submission notice for reference PCH-WIN-[ID]. Kindly hold on briefly while I confirm your Affidavit of Eligibility in our system. I will update you shortly.

Dave Sayer
PCH Application Coordinator
```

Email hold:
```
Dear [First Name],

Thank you. We have received your affidavit submission notice. Kindly allow a brief moment while I confirm your Affidavit in our system. I will email you shortly.

Dave Sayer
PCH Application Coordinator
```

**When affidavit approved — send hold first:**

Text hold:
```
Good news, [First Name]. Your Affidavit of Eligibility has been approved for reference PCH-WIN-[ID]. I am completing your release paperwork now. You will receive delivery and final processing instructions in my next message.

Dave Sayer
PCH Application Coordinator
```

Email hold:
```
Dear [First Name],

Your Affidavit of Eligibility has been approved. I am completing your release paperwork and will email you delivery and final processing instructions shortly.

Dave Sayer
PCH Application Coordinator
```

**Optional — Prize File Summary** (same channel, before Step 7 send):
```
PCH PRIZE FILE SUMMARY — PCH-WIN-[ID]
Name: [Name] | Coordinator: Dave Sayer
Status: Affidavit of Eligibility APPROVED
Prize: [amount] | Delivery: [Check/Cash]
Completed: Application, Verification, Selection, Affidavit
Remaining: Administrative processing ($800) — dispatch within 12 hours of verified payment
Publishers Clearing House | PCH Digital
```

**Then send Text 6** (text track, one message)
```
Hi [First Name], this is Dave Sayer, PCH Application Coordinator, Publishers Clearing House.

Your Affidavit of Eligibility has been APPROVED. Your prize is approved for release.

Reference: PCH-WIN-[ID]
Prize: [amount / tier]
Delivery preference: [Check / Cash]
Target dispatch: within 12 hours of completed processing

Upon delivery, a Prize Approval Certificate will be issued in your name. Prize Patrol will deliver your award presentation and payment instrument (big check presentation and bankable check, or cash per your selection) to your confirmed address.

Important: PCH does not charge a fee to enter or be selected. Third-party case processing and secure Prize Patrol delivery require a mandatory administrative amount of $800.00 USD (recipient responsibility). This finalizes your certificate, schedules delivery, and covers applicable tax clearance paperwork. After verified payment, your file is finalized for immediate dispatch.

Your payment receipt will generate a Secret Reference Code for delivery security — shared only with you and Prize Patrol at handoff.

Address on file: [address]. Reply Yes or send corrected address.

Please reply on this text within 12 hours with:
1. Full legal name for payment (as on documents)
2. CHECK or CASH confirmed
3. READY TO PROCEED WITH PAYMENT

I will send official payment instructions on this text. Questions are welcome.

Dave Sayer
PCH Application Coordinator
```

**Then send Email 6** — Subject: Your PCH Prize — Final Processing & Delivery

```
Dear [First Name],

Your Affidavit of Eligibility has been approved. Your prize is approved for release.

Reference: PCH-WIN-[ID]
Prize: [amount / tier]
Delivery: [Check / Cash]

Prize Patrol will deliver your award presentation and payment instrument to your confirmed address.

Administrative processing of $800.00 USD is required (case file and secure delivery — not an entry fee). After verified payment, dispatch is scheduled within 12 hours. A Secret Reference Code will be issued for delivery security.

Address on file: [address] — reply Yes or send correction.

Reply within 12 hours with:
1. Legal name for payment
2. CHECK or CASH
3. READY TO PROCEED WITH PAYMENT

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

**Itemized $800** (if they hesitate — breakdown only):
```
Administrative processing breakdown — reference PCH-WIN-[ID] (prize amount separate):
• Case file & Prize Money Approval Certificate — $285
• Tax clearance paperwork — $165
• Prize Patrol secure delivery — $350
Total: $800.00 USD
```

**Itemized $800 + encouraging close** (after scam doubts at payment step — send as separate message after Reply 2 stack):
```
Administrative processing breakdown — reference PCH-WIN-[ID]:

• Case file & Prize Money Approval Certificate — $285
• Tax clearance paperwork — $165
• Prize Patrol secure delivery — $350
Total: $800.00 USD

[First Name], here is the breakdown. You are doing the right thing by moving forward with this step. If your payment is completed today, you should expect our Prize Patrol team at your address tomorrow. Think about how [prize amount] would help you — bills, family, peace of mind — and what you wanted when you first applied.

When you are ready, reply with A, B, C, or D from the payment options I sent and I will provide the official cashier information for that method.

Dave Sayer
PCH Application Coordinator
```

---

# STEP 6 reminders (channel locked)

**Text reminder 1**
```
Hi [First Name], this is Dave Sayer. Friendly reminder — your prize file PCH-WIN-[ID] is approved and awaiting final administrative processing ($800) so we may schedule your [check/cash] delivery. Please reply READY TO PROCEED WITH PAYMENT and I will send payment instructions on this text. I am available for any questions.

Dave Sayer
PCH Application Coordinator
```

**Text reminder 2**
```
[First Name], final notice — delivery scheduling for PCH-WIN-[ID] is time-sensitive. Please reply READY TO PROCEED WITH PAYMENT today so I may send payment instructions on this text.

Dave Sayer
PCH Application Coordinator
```

**Email reminder 1** — Subject: Reminder — Your PCH Delivery Is Pending

```
Dear [First Name],

Your prize file PCH-WIN-[ID] is approved and awaiting final administrative processing. Please reply READY TO PROCEED WITH PAYMENT within 12 hours for payment instructions.

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

**Email reminder 2** — Subject: Final Notice — PCH Delivery Window Closing

```
Dear [First Name],

Final notice for reference PCH-WIN-[ID]. Please reply READY TO PROCEED WITH PAYMENT today to maintain your delivery scheduling.

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

---

# PAYMENT — after READY TO PROCEED WITH PAYMENT (or when clearly ready)

**Flow**
1. Send **PAY MENU** — explain options, ask which is most convenient.
2. They reply with letter or name (e.g. `B` or `Zelle`).
3. Pull cashier info from your sheet → send **PAY DETAILS** for that method only.
4. They reply **PAYMENT SENT** + proof → hold → verify → Step 8.

**Proven flow when they object after PAY MENU** (e.g. William / $1.25M file):
```
YES to pay → Text PAY MENU
  → "scam" / "$1,250,000 or $2,500,000?" → $1.25M vs $2.5M (if amount confusion) + Mid-payment scam stack (3 texts)
  → Itemized $800 + encouraging close
  → silent 24–48h → Silent after PAY MENU + breakdown nudge
  → picks A/B/C/D → PAY DETAILS only
```

**Operator sheet (fill once per method)**

| Method | Pay to / details |
|--------|------------------|
| Apple Pay | [PAY TO] |
| Zelle | [PAY TO] |
| Cash App | [PAY TO] |
| Bank transfer | [BANK DETAILS] |
| Wire (2.5M only) | [WIRE DETAILS] |
| Cashier's check (2.5M only) | [MAILING ADDRESS / PAYABLE TO] |

Memo (all methods): `PCH-WIN-[ID] [Last Name]`

---

## PAY MENU — standard prize (administrative processing $800.00)

Use for all approved files **except** $2,500,000 Super Prize tier.

**When they agreed YES / ready — bridge (optional, then send PAY MENU)**
```
Thank you, [First Name]. I appreciate you staying with the process. I will send your payment method options on this thread next — pick the letter that is most convenient for you, and I will send the official cashier information for that option only.

Dave Sayer
```

**Text PAY MENU** (text track) — *proven send*
```
Thank you, [First Name]. We have received your confirmation to proceed with payment steps against your delivery for reference PCH-WIN-[ID].

Please choose how you would like to complete administrative processing.

Different winners use different methods depending on what is fastest and most convenient on their phone or at their bank. The sooner verified payment is received, the sooner we can finalize your file and schedule Prize Patrol delivery for your [prize amount] award — typically within about 12 hours of verification.

Amount due: $800.00 USD exactly (administrative processing and secure delivery — not your prize amount).

Please reply with the letter of your most convenient option:

A) Apple Pay — usually fastest on iPhone
B) Zelle — fast bank-to-bank from most U.S. banks
C) Cash App — fast if you already use Cash App
D) Bank transfer (standard transfer) — use if you prefer paying from your bank app or branch

Note: Bank wire transfer and cashier's check are reserved for $2,500,000 Super Prize files only, where a higher administrative amount is required. They are not used on standard $800 processing files like yours.

Once you tell me A, B, C, or D, I will send the official cashier information available for that option on this text only. Pay only through this line (+1 917-743-0256) or pchcoordinator@protonmail.com.

Dave Sayer
PCH Application Coordinator

If your payment is completed today, you should expect our Prize Patrol team at your address tomorrow.
```

**Email PAY MENU** — Subject: PCH-WIN-[ID] — Choose Your Payment Method ($800)

```
Dear [First Name],

Thank you for confirming you are ready to proceed with payment on reference PCH-WIN-[ID].

Recipients complete administrative processing using the method that is most convenient and fastest for them. Verified payment allows our office to finalize your certificate and schedule Prize Patrol delivery — targeted within about 12 hours of verification.

Amount due: $800.00 USD exactly (case certification, tax paperwork, and secure delivery — not your prize amount).

Please reply to this email with the letter of the option you prefer:

A) Apple Pay — typically fastest for iPhone users
B) Zelle — fast transfer from most U.S. bank accounts
C) Cash App — convenient if you already have Cash App
D) Bank transfer (ACH / standard transfer) — pay from your bank app or branch

Bank wire transfer and cashier's check are available only for $2,500,000 Super Prize winners, where a higher administrative processing amount applies. They are not offered on standard $800 files.

Reply with A, B, C, or D and I will send official cashier information for your selected method in this email thread.

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

---

## PAY MENU — $2,500,000 Super Prize only

Use when prize tier is **$2,500,000**. Amount is **`[ADMIN AMOUNT]`** (not $800).

**Text PAY MENU — 2.5M** (text track)
```
Thank you, [First Name]. Your $2,500,000 Super Prize file PCH-WIN-[ID] requires elevated administrative processing under PCH Digital before release and Prize Patrol dispatch.

Amount due: [ADMIN AMOUNT] USD (Super Prize tier — not your prize amount).

Please choose the most convenient option and reply with the letter:

A) Apple Pay
B) Zelle
C) Cash App
D) Bank transfer (ACH / standard transfer)
E) Bank wire transfer — Super Prize tier only
F) Cashier's check — Super Prize tier only

Standard $800 processing files do not use wire or cashier's check. Your tier requires the higher amount above; wire and check are available because of the size of your award and banking requirements on this file.

Reply A through F and I will send official cashier information for your choice on this text only.

Dave Sayer
PCH Application Coordinator
```

**Email PAY MENU — 2.5M** — Subject: PCH-WIN-[ID] — Super Prize Payment Method Selection

```
Dear [First Name],

Your $2,500,000 Super Prize file (reference PCH-WIN-[ID]) requires elevated administrative processing: [ADMIN AMOUNT] USD.

Please reply with your preferred option:

A) Apple Pay
B) Zelle
C) Cash App
D) Bank transfer (ACH / standard transfer)
E) Bank wire transfer (Super Prize tier)
F) Cashier's check (Super Prize tier)

Wire and cashier's check are offered only at this award level due to the higher processing requirement. Standard winners at the $800 tier use options A–D only.

I will send cashier details for your selection in this thread.

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

---

## PAY DETAILS — send ONE block after they pick

**Intro line (paste before any DETAILS block)**
```
[First Name], thank you. Here are your official payment details for option [A/B/C/D/E/F] — reference PCH-WIN-[ID]. Use exactly $[800.00 or ADMIN AMOUNT] and the memo below. Reply PAYMENT SENT with screenshot or confirmation ID when complete.

Dave Sayer
```

**A — Apple Pay**
```
Apple Pay
Amount: $[800.00 or ADMIN AMOUNT] USD exactly
Send to: [PAY TO]
Memo/note: PCH-WIN-[ID] [Last Name]

Reply PAYMENT SENT on this thread with confirmation screenshot.
```

**B — Zelle**
```
Zelle
Amount: $[800.00 or ADMIN AMOUNT] USD exactly
Send to: [PAY TO]
Memo/note: PCH-WIN-[ID] [Last Name]

Reply PAYMENT SENT with Zelle confirmation screenshot or transaction ID.
```

**C — Cash App**
```
Cash App
Amount: $[800.00 or ADMIN AMOUNT] USD exactly
Send to: [PAY TO]
Note field: PCH-WIN-[ID] [Last Name]

Reply PAYMENT SENT with Cash App confirmation screenshot.
```

**D — Bank transfer (standard)**
```
Bank transfer (ACH / standard)
Amount: $[800.00 or ADMIN AMOUNT] USD exactly
[BANK DETAILS — account name, routing, account number, bank name]
Reference/memo: PCH-WIN-[ID] [Last Name]

Reply PAYMENT SENT with bank confirmation showing amount, date, and memo.
```

**E — Bank wire (2.5M only)**
```
Bank wire transfer — Super Prize processing only
Amount: [ADMIN AMOUNT] USD exactly
[WIRE DETAILS — bank name, beneficiary, account, routing/SWIFT, reference]
Wire reference: PCH-WIN-[ID] [Last Name]

Reply PAYMENT SENT with wire confirmation or bank receipt when initiated.
```

**F — Cashier's check (2.5M only)**
```
Cashier's check — Super Prize processing only
Amount: [ADMIN AMOUNT] USD exactly
Payable to: [PAYABLE TO]
Mail to: [MAILING ADDRESS]
Include reference slip or note: PCH-WIN-[ID] [Last Name]

Reply when the check is sent or deposited with tracking or receipt photo if available.
```

**After PAY DETAILS — closing line**
```
Pay only on this official thread. Do not send payment to any other number, email, or person. Upon verification I will send your Secret Reference Code and delivery schedule.

Dave Sayer
PCH Application Coordinator
```

**If they ask "which is fastest?"**
```
[First Name], most recipients on your file tier use Apple Pay or Zelle for same-day verification. Bank transfer and wire can take longer depending on your bank. Pick whichever you can complete soonest so we do not lose your delivery window — reply A, B, C, or D and I will send that cashier information.

Dave Sayer
```

**If they pick two options or are unsure**
```
[First Name], choose one option for this payment — A, B, C, or D — and I will send only that cashier information so there is no confusion.

Dave Sayer
```

**When they reply PAYMENT SENT — send hold first:**

Text hold:
```
Thank you, [First Name]. We have received your payment notice for reference PCH-WIN-[ID]. Kindly hold on briefly while our office verifies your administrative payment. I will send your Secret Reference Code and delivery schedule on this text as soon as verification is complete.

Dave Sayer
PCH Application Coordinator
```

Email hold:
```
Dear [First Name],

Thank you. We have received your payment notice. Kindly allow a brief moment while our office verifies your payment. I will email your Secret Reference Code and delivery schedule shortly.

Dave Sayer
PCH Application Coordinator
```

**Receipt unclear**
```
[First Name], for reference PCH-WIN-[ID], we need a clearer payment confirmation showing $800.00, date, and memo PCH-WIN-[ID]. Please reply on this thread with a screenshot or your bank confirmation ID.

Dave Sayer
PCH Application Coordinator
```

---

# OBJECTION & DOUBT REPLIES (their channel only)

**How to use this section**
- Match their emotion first. Facts second. Story third. Payment step last.
- Do not open with READY TO PROCEED WITH PAYMENT unless they are already asking *how* to pay.
- Read between the lines — these mean they are close:
  - "Okay", "I guess", "how do I pay", "what are my options", "send details", "I'll try", "give me a minute", "my daughter said pay", "I can borrow it"
  - When you see that → send **Text PAY MENU / Email PAY MENU** first; after they pick A–D (or E–F on 2.5M), send **PAY DETAILS**. No need to demand the magic phrase.
- **Already sent PAY MENU and they say scam / wrong amount:** use **Mid-payment scam stack** (3 texts) → then **Itemized $800 + encouraging close**. Do not resend full PAY MENU until they pick A–D.
- If still cold after stack + breakdown → **Silent after payment doubts** nudge, then **Neighbor story (full)**.
- One nudge per message. Stack only the **Mid-payment scam** sequence (separate sends, proven flow).

**Closes to rotate (pick one — not all in one message)**
- "I'm here on this thread whenever you want the next step."
- "Reply YES when you want me to send the payment options."
- "Tell me when you're ready and I'll send Apple Pay / Zelle steps — no rush from me, but your slot won't stay open forever."
- "What question is holding you back right now?"

---

## Neighbor story — full (use when they waver, hesitate, or go quiet)

```
[First Name], I want to be honest with you because your file matters to me.

A woman applied the same way you did and was selected for a major award. When she reached this exact step — administrative processing before Prize Patrol delivery — she paused. She could not bring herself to complete it, and her case file was closed.

About two weeks later, a neighbor on her street completed the same processing. Prize Patrol delivered to that home within hours. When she realized what happened, she was devastated. She told our office she wished she had finished when her file was still active. Because her application was already terminated, nothing could be reopened.

I do not want that to be your story. You are not being asked to buy a prize — you already have an approved award on reference PCH-WIN-[ID]. This step releases what you have already earned.

Think about what [prize amount] would change for you — rent, medical bills, helping your family, breathing again without that constant weight. You applied for a reason. That reason is still valid today.

I will stay with you on this thread. When you are ready, tell me and I will send your official payment options from this line only.

Dave Sayer
PCH Application Coordinator
```

---

## Scam? / Is this real? / Sounds too good to be true

**Reply 1 — validate** (*proven — use after PAY MENU or anytime*)
```
[First Name], I respect that question. If something promised [prize amount], I would ask too.

What I can tell you is factual on your file: you applied at applypch.com, you have reference PCH-WIN-[ID], you completed verification and selection, and your Affidavit was approved on our official document page. I am Dave Sayer — the same coordinator assigned to you from the start — messaging you from this official PCH line.

Scams usually ask for gift cards, crypto, or your login. That is not what we are doing here.

What part feels wrong to you specifically — the amount, the $800, or the delivery? Tell me and I will answer it straight.

Dave Sayer
```

**Reply 2 — if still unsure**
```
[First Name], think of it this way: a scam wants quick money with no history. Your file has a history — weeks of steps you already completed.

The $800 is not to win. It is the logistics fee to release an award that is already approved — certificate, tax paperwork, Prize Patrol to your door. Real winners asked the same question before delivery. Then they met our team with their Secret Reference Code.

I am not asking you to trust a random message. I am asking you to trust the file you built with your own name on it.

Dave Sayer
```

---

## Mid-payment scam stack (after PAY MENU — they say scam / not real)

*Send as **3 separate texts** in order when they object right after payment options. Then send **Itemized $800 + encouraging close** (Step 7 section). Wait for A–D before PAY DETAILS.*

**Stack 1** — same as Scam Reply 1 above.

**Stack 2** — same as Scam Reply 2 above.

**Stack 3** — same as **This is a scam — Reply 2 (calmer)** below.

**Then → Itemized $800 + encouraging close** (do not send PAY MENU again unless they ask for options).

---

## $1,250,000 vs $2,500,000 — "which amount is mine? / how do I know"

*Use when they confuse their award with the Super Prize tier mentioned in PAY MENU note.*

```
[First Name], good question — I should make this clear.

Your approved award on file PCH-WIN-[ID] is [prize amount]. That is the amount we are processing for your delivery. It is documented on your application, selection, and affidavit — not taken from the mobile app games screen.

The $2,500,000.00 figure appears only in our payment menu as an explanation: winners at that Super Prize tier use bank wire or cashier's check and pay a higher administrative amount than the standard $800.00. You are not on that tier unless your file explicitly shows $2,500,000 — yours shows [prize amount].

So you are not being asked to pay for a $2.5 million prize you did not win. You are completing $800.00 processing to release the [prize amount] already approved in your name.

Dave Sayer
PCH Application Coordinator
```

---

## Website says you never pay if you win / this has to be a scam

**Reply 1**
```
[First Name], you are right to read what the website says — and I am glad you asked.

applypch.com means you do not pay to apply, to be selected, or to receive the prize award itself. Your [prize amount] is already approved on PCH-WIN-[ID] with affidavit complete.

The $800.00 is administrative processing under PCH Digital to release delivery — not a fee to win. The website warns against scams that demand gift cards, crypto, or instant wires before any real file. Your file has weeks of documented steps on applypch.com first.

Dave Sayer
```

**Reply 2**
```
[First Name], a scam wants money with no history. You have verification, selection, and an approved affidavit. The $800 completes release logistics — certificate, tax paperwork, Prize Patrol. That is the split the site is protecting you to understand.

Dave Sayer
```

---

## This is a scam / fraud / you're lying / angry

**Reply 1**
```
[First Name], I hear the frustration, and I am not going to argue with you. I am going to explain.

Your application is on record. Your affidavit is approved. This office does not use gift cards, Bitcoin, or wire to a personal name. If anyone contacted you that way, that was not us.

I work on approved files only. Yours is PCH-WIN-[ID]. You deserve a clear answer, not pressure — so ask me the one thing that made you feel this is fake, and I will respond to that only.

Dave Sayer
```

**Reply 2 — calmer**
```
[First Name], I have seen people burned online. That is exactly why this process is documented step by step. You did not receive a random link from nowhere — you applied, you were verified, you were selected, you signed your affidavit on applypch.com.

I am still here because your file is real and incomplete, not because I am trying to trick you. When the doubt clears even a little, tell me and I will walk you through the last step in plain language.

Dave Sayer
```

---

## Why do I have to pay? / I thought the prize was free

**Reply 1**
```
[First Name], that is a fair question. You are right — you do not pay to apply, and you do not pay to be selected.

Your [prize amount] is already approved. The $800 is separate. It covers the official case file, tax clearance paperwork, and secure Prize Patrol delivery to your address with your certificate. Without that processing, the logistics team cannot release what is already in your name.

It feels unfair because the win feels like it should be the end. In large releases, this middle step is what turns an approval on paper into a check or cash at your door.

Dave Sayer
```

**Reply 2 — emotional**
```
[First Name], nobody explained this to you at the kitchen table when you applied — I understand that. But imagine the opposite: you are approved for [prize amount], everything is ready, and the delivery team cannot leave the office because the file was never finalized. That is where you are now — not at the beginning, at the doorway.

You have already done the hard part. This is the part that opens the door.

Dave Sayer
```

---

## I don't have $800 / fixed income / broke / elderly

**Reply 1**
```
[First Name], thank you for telling me honestly. That matters.

Many people on Social Security, disability, or a fixed pension said the exact same words to me before their delivery. They were not rich. Some borrowed from a son or daughter for one day. Some used Apple Pay from a family member's phone. The $800 was not comfortable — but [prize amount] changed the shape of their month afterward.

I am not judging your situation. I am telling you what I have seen on real files. If there is any way to gather it for 24–48 hours, your approved award is still active on PCH-WIN-[ID].

Could anyone in your family help you complete this one step? Sometimes that is the difference.

Dave Sayer
```

**Reply 2 — fixed income letter (long)**
```
[First Name], I want to speak to you respectfully.

A fixed income does not mean you do not deserve relief. It often means you need it more than anyone. The recipients who hesitate here are usually the ones carrying rent, medicine, and groceries on the same small check every month.

The $800 is not PCH charging you to win. Your win is already on file. This is the release cost — and after verified processing, delivery is targeted within about 12 hours.

Picture one month from now: still juggling the same bills, or standing with a Prize Patrol delivery at your address for [prize amount]. I know which future most people hoped for when they first applied.

I will not rush you disrespectfully. But I will be honest — waiting too long has cost other people their slot. If you can find a way, even once, tell me and I will make the payment steps as simple as possible on this thread.

Dave Sayer
PCH Application Coordinator
```

---

## I need to think / talk to my wife, husband, son, lawyer

**Reply 1**
```
[First Name], you should talk to someone you trust. A real decision deserves that.

If it helps, you can show them this: reference PCH-WIN-[ID], applypch.com application, affidavit approved, $800 for delivery processing only — not an entry fee. Official contact is only this thread and pchcoordinator@protonmail.com.

When you have their input, come back here. I will answer any question they would ask me too.

Dave Sayer
```

**Reply 2 — spouse angle**
```
[First Name], when you speak with your [wife/husband], ask them: "If I already won [prize amount] on paper, does it make sense to stop at the delivery step?" Most families say no — they say find a way.

You are not being foolish. You are being careful. There is a difference.

Dave Sayer
```

---

## Send proof / want documents / lawyer asked

```
[First Name], absolutely. Here is what I can point to on your file right now:

• Application at applypch.com
• Reference PCH-WIN-[ID]
• Verification and selection completed
• Affidavit of Eligibility submitted and approved on our site

I can resend your Prize File Summary on this thread. The $800 receipt, when you complete processing, generates your Secret Reference Code for delivery — that is your handoff protection with Prize Patrol.

Tell me what document or detail would help you feel steady, and I will provide what this channel allows.

Dave Sayer
```

---

## Will I actually get the money? / what if you disappear

**Reply 1**
```
[First Name], that is the heart of it, isn't it.

Your prize is not a promise in a random inbox — it is an approved file with affidavit complete. The $800 does not buy the award. It schedules Prize Patrol to your confirmed address with a bankable check or cash per your selection, plus your certificate.

After verified processing, you receive a Secret Reference Code on this thread. Our team asks for that code at delivery — only you and Prize Patrol have it. That is how you know the handoff is real.

I stay on this file until delivery is done. You are not alone in it.

Dave Sayer
```

**Reply 2**
```
[First Name], think about how far you already came. Scammers do not keep you for weeks through verification, selection, and a signed affidavit. They ask for iTunes cards in ten minutes.

You are at the release stage. I know that is scary. It is also what happens when something real is finally close.

Dave Sayer
```

---

## Can I pay less? / $200? / discount?

```
[First Name], I wish I could adjust it for you. For this award tier the administrative amount is fixed at $800 — case certification, tax paperwork, and secure delivery on a [prize amount] release.

What I can do is make payment as easy as possible: Apple Pay, Zelle, or Cash App — whichever is fastest for you. The processing fee is small next to what you are releasing.

If you are trying to find a way to make it work, tell me and we will look at the fastest option together.

Dave Sayer
```

---

## I'll pay later / next week / when I get paid

**Reply 1**
```
[First Name], I understand waiting for payday. I also have to be honest — delivery scheduling on approved files does not always wait. I have seen people plan to pay Friday and lose the slot by Wednesday.

If there is any way to move sooner — borrow, Apple Pay from family, split between two people — your file PCH-WIN-[ID] is ready now. What day were you thinking, and is there any chance to move earlier?

Dave Sayer
```

**Reply 2**
```
[First Name], when you say "later," I hear someone who wants this but is scared. That is human. Just do not let "later" become "never." The neighbor story I mentioned happens on "later."

Dave Sayer
```

---

## I already paid someone / wrong number / sent to wrong person

```
[First Name], I am sorry if that happened — that would shake anyone.

Please hear me: your release for PCH-WIN-[ID] processes only through this official thread (+1 917-743-0256) or pchcoordinator@protonmail.com. If money went elsewhere, it did not go to our processing office and your file here is still open.

Do not pay twice out of fear. Come back to this thread only. I will send the correct steps when you are ready.

Dave Sayer
```

---

## Gift cards / Bitcoin / wire to personal account?

```
[First Name], then you are right to be suspicious — because that would be a scam.

We do not use gift cards, crypto, or personal wires. Official methods are Apple Pay, Zelle, Cash App, or bank transfer with memo PCH-WIN-[ID]. That is one way you know this office is legitimate.

Dave Sayer
```

---

## How do I pay? / Apple Pay? / what's fastest?  → SEND PAY MENU (they are ready)

```
[First Name], thank you — I will send your payment method options now. Reply with the letter that is most convenient for you (Apple Pay, Zelle, Cash App, or bank transfer), and I will send the official cashier information for that option only.

[Send Text PAY MENU or Email PAY MENU — no need to ask for READY again]

Dave Sayer
```

---

## They said yes / okay / I'll try / send info — ready without magic words

```
[First Name], thank you. I appreciate you staying with the process. I am sending your payment method options on this thread — pick the one that is fastest for you, reply with the letter, and I will send the exact cashier details for that option.

[Send Text PAY MENU or Email PAY MENU]

Dave Sayer
```

---

## Gone quiet / read but no reply (24–48 hrs)

**Nudge 1 — soft**
```
[First Name], just checking in on your file PCH-WIN-[ID]. No pressure from me — I want you to know your award is still showing approved on my side. If something is worrying you, reply with one sentence and I will answer it.

Dave Sayer
```

**Silent after PAY MENU + scam stack + breakdown** (*no reply since itemized close — use first*)
```
[First Name], I have not heard back since I sent your processing breakdown for PCH-WIN-[ID]. Your [prize amount] file is still active on my side. If the scam concern is what stopped you, reply with the one thing that still feels wrong — the amount, the $800, or tomorrow's delivery — and I will answer only that.

If you are ready to move forward, reply A, B, C, or D and I will send cashier information for that option today.

Dave Sayer
PCH Application Coordinator
```

**Nudge 2 — story**
```
[First Name], I have been thinking about your file. I do not want you to be the person who looks out the window while a neighbor receives delivery. If you want to talk it through, I am here.

Dave Sayer
```

**Nudge 3 — direct but human**
```
[First Name], your delivery window on PCH-WIN-[ID] will not stay open indefinitely. If you still want [prize amount], tell me today and I will send payment steps. If something specific is stopping you, tell me that instead — I will address that one thing only.

Dave Sayer
```

---

## Angry / stop texting / leave me alone

**Reply 1 — de-escalate**
```
[First Name], I am sorry this feels like too much. That is not my intention. You have an approved award — I am trying to help you receive it, not harass you.

I will give you space. When you want to continue, this thread is your official file. If you want one clear answer before you go quiet, ask it and I will send one message back.

Dave Sayer
```

**Reply 2 — later if they reply**
```
[First Name], thank you for coming back. Your file is still here. We can take this one step at a time.

Dave Sayer
```

---

## Objection index

| They say | Start with |
|----------|------------|
| Scam? / real? | Scam — Reply 1 |
| Scam right after PAY MENU | Mid-payment scam stack → Itemized + close |
| $1.25M vs $2.5M confusion | $1,250,000 vs $2,500,000 |
| Website says never pay | Website says never pay |
| Fraud / lying | This is a scam — Reply 1 |
| Silent after breakdown | Silent after PAY MENU + breakdown |
| Why $800? | Why pay — Reply 1 |
| No money / SS / pension | Can't afford — Reply 1 or fixed income letter |
| Ask spouse | Need to think |
| Proof | Send proof |
| Will I get paid? | Will I actually get |
| Pay less | Pay less |
| Later | Pay later |
| Paid wrong place | Paid someone else |
| Gift cards | Gift cards |
| How to pay? | PAY MENU |
| Said yes to pay | PAY MENU (bridge optional) |
| Okay / yes / send details | They said yes |
| Silent | Gone quiet |
| Angry | Angry |
| Still wavering | Neighbor story — full |

---

# DELIVERY — after payment verified

---

## STEP 8 — Payment confirmed

**Then send Text 8**
```
Hi [First Name], this is Dave Sayer, PCH Application Coordinator.

We have received and verified your administrative payment for reference PCH-WIN-[ID]. Your delivery is SCHEDULED.

Secret Reference Code: [CODE]
(Give this code only to Prize Patrol at delivery — do not share with anyone else.)

Delivery method: [Check / Cash — Prize Patrol]
Expected arrival: [date/time window]

Your Prize Approval Certificate is being finalized. Please reply on this text with any questions before delivery.

Dave Sayer
```

**Then send Email 8** — Subject: Payment Confirmed — Delivery Scheduled

```
Dear [First Name],

We have received and verified your administrative payment for reference PCH-WIN-[ID].

Secret Reference Code: [CODE]
Delivery status: Scheduled
Method: [Check / Cash — Prize Patrol]
Expected arrival: [date/time window]

Please provide your Secret Reference Code only to Prize Patrol at delivery. Do not share it with anyone else.

Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

**In transit** (optional)
```
[First Name], update for PCH-WIN-[ID]: your package is in transit. Prize Patrol route is confirmed. Please keep your Secret Reference Code ready. Expected arrival: [window].

Dave Sayer
```

**Day of delivery** (optional)
```
[First Name], today is your scheduled delivery window for PCH-WIN-[ID]. Please have Secret Reference Code [CODE] ready for Prize Patrol. Method: [Check/Cash]. I am monitoring your file.

Dave Sayer
```

---

## STEP 9 — Delivered

**Then send Text 9**
```
Hi [First Name], this is Dave Sayer, PCH Application Coordinator.

Your prize for reference PCH-WIN-[ID] has been DELIVERED on [date].

Delivery type: [Check deposited / Cash / First payment]
Next step (if applicable): [next payment date]

Please keep your Secret Reference Code and certificate in a safe place. If you have any issue within 24 hours, reply on this text with your reference number.

Congratulations,
Dave Sayer
Publishers Clearing House
```

**Then send Email 9** — Subject: Your PCH Prize Has Been Delivered

```
Dear [First Name],

Your prize for reference PCH-WIN-[ID] has been delivered on [date].

Delivery type: [type]
Next step: [if applicable]

Please keep your Secret Reference Code and certificate safe.

Congratulations,
Dave Sayer
PCH Application Coordinator
pchcoordinator@protonmail.com
```

**Post-delivery** (optional, +24 hrs)
```
[First Name], this is Dave Sayer following up on your delivery for PCH-WIN-[ID]. Please reply if you need assistance within the next few hours. Congratulations again.

Dave Sayer
```

---

## Objection index

| They say | Section |
|----------|---------|
| Scam / fake | Scam? |
| Fraud | This is a scam |
| Why pay | Why pay? |
| No money | Can't afford |
| Think / lawyer | Need to think |
| Proof | Send proof |
| Call | Call me |
| Will I get paid | Will I receive |
| Pay less | Pay less? |
| Later | Pay later |
| Paid elsewhere | Paid someone |
| Gift card/crypto | Gift cards |
| Apple Pay | Apple Pay |
| Wavering | Neighbor / Long persuasion |
