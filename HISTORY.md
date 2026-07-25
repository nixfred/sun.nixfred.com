# HISTORY
## The Making of the Save The Sun Foundation

> The build chronicle. Every milestone gets a chapter, written as it happens.
> This is the side story: the site is the product, this is the ship's log of
> the factory that built it. Updated at milestones, not per commit.

---

## Chapter 1: The Scaffold Night
### 2026-07-24, late

It started as a one line order: "This is to become another site/card on
nixfred.com. Go build the structure." No subject, no content, just a name.
sun.nixfred.com.

Larry stood up the plumbing in about an hour. Public repo on GitHub. Cloudflare
Pages project. Proxied DNS on the nixfred.com zone. TLS from Google Trust
Services. A dark placeholder page with an amber badge reading SCAFFOLD LIVE.

Two traps were found and disarmed the same night. First, the deploy uploaded
the repo docs alongside the page, so publishing was split into a site/ folder
that ships and everything else that stays home. Second, Cloudflare Pages
serves the homepage with a 200 status for every path that does not exist
unless you give it a 404.html. It got one.

One piece of tribal knowledge got corrected: the old recipe said unset the
Cloudflare env token and let wrangler's OAuth handle Pages. The OAuth login
had quietly expired a week earlier. The env token now carries the whole
deployment. The memory file was rewritten so no future session repeats the
dead ritual.

The site said "Source documents pending. This page gets replaced when they
land." Nobody knew yet what the documents would say.

---

## Chapter 2: The Charter Arrives
### 2026-07-25, just after midnight

Two payloads landed in the project directory within the hour.

First, a 13 document build pack: the Save The Sun Foundation. A fictional
nonprofit that treats the death of the Sun in 4.8 billion years as an urgent
present day fundraising crisis. Institutional satire played completely
straight. The pack came with an information architecture, a homepage
blueprint, program specs, a simulated donation experience, a copy and humor
bible, a content model, a design system, interaction specs, an asset plan,
and a QA gate. The seriousness is the joke.

Second, an operating charter, written by ChatGPT. The charter named the
larger mission: sun.nixfred.com is the first production run of a repeatable
NixFred Site Factory. ChatGPT and Fred write build packs. Larry and an agent
team turn build packs into finished sites at $newsite.nixfred.com. The
factory must be extracted from a successful build, not designed in advance.

Fred's words on receipt: "LETS FUCKING GO."

The rules of engagement were set the same hour. The build pack is read only,
an input contract. The site comes before the factory. The vertical slice
comes before the full site. Screenshots are review, compiling is not. And the
whole build gets chronicled here, in HISTORY.md, at Fred's request. A side
story, kept honest.

---

## Chapter 3: Two Rounds and a Field Trip
### 2026-07-25, deep in the night

The charter demanded clarification rounds before implementation. Fred
answered eight questions across two rounds and reshaped the project three
times in one hour.

First: the Foundation leans conservative. Stewardship, legacy, tradition,
duty. A foundation that rails against waste and bureaucracy while being
nothing but process. The satire got sharper.

Second: mid round, Fred ordered a field trip. Go study
yourdoingitallwrong.com, his own satire site, and learn how it lands
roughly a joke per sentence without ever repeating one. Larry read the
source and found the machinery: one premise rotated through every
institutional surface a business owns, a background joke that fires on
every line for free, specificity as the delivery vehicle, trust marks
inverted one at a time. The study became law in decision 0003. Then Fred
raised the stakes again: feel the DEPTH of it. Every surface believes. The
404 believes. No repeats. That became the Depth Directive.

Third: typography. Fred passed over the safe establishment serif and chose
the elegant display face with fine hairlines. Vanity Fair covers a crisis.

Then the foundation got poured. Astro with bun, 281 packages in 2.26
seconds. Design tokens straight from the pack's palette: Solar Gold, Deep
Space Navy, Off White, split by surface exactly as Fred ruled. Playfair
Display, Public Sans, and IBM Plex Mono, all self hosted, no CDN anywhere.
Seven content collections with schemas, one for every repeatable page
shape in the information architecture. First build: 530 milliseconds,
green. The preview went to a separate Pages branch while production kept
serving the old scaffold, and the first screenshot came back looking like
a foundation with a nine figure endowment and a communications budget to
match.

The site status line on the preview reads PRELIMINARY ALLOCATION REVIEW.
The Foundation would approve.

---
