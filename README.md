# Zheng Wang's academic homepage

Live site: https://riderich.github.io/

A buildless academic homepage hosted by GitHub Pages from the main branch.

- `index.html`: the live page, profile links, publications, and experience.
- `static/css/main.css`: responsive document-style layout.
- `static/assets/img/zheng-wang.jpg`: existing profile photo.
- `contents/`: parallel Markdown content records; the current HTML page does not load them.

Keep public facts aligned with the application workspace's canonical applicant record.
Distinguish published papers from submitted manuscripts.

## Design references

The layout uses a short biography, a small photo, ordinary text links, and continuous
publication entries, informed by these personal homepages:

- Jon Barron: https://jonbarron.info/
- Ross Girshick: https://www.rossgirshick.info/
- Awni Hannun: https://awnihannun.com/
- Andrej Karpathy: https://karpathy.ai/

The implementation is original HTML/CSS; no reference-site source code or assets are copied.

## Wording references

The biography states the current degree and affiliation first, then separates research
interests from recent work. Paper summaries describe the work in one sentence;
experience descriptions use concrete past-tense verbs. Wording is original and
reflects verified undergraduate experience rather than the roles of these references:

- Chang Chen (CUHK): https://wyxg233.github.io/
- Yushi Feng (HKU): https://ys-feng.github.io/
- Junxian He (HKUST): https://jxhe.github.io/
- Danqi Chen (Princeton): https://www.cs.princeton.edu/~danqic/index.html

## Search indexing

- `sitemap.xml` lists the canonical homepage URL. Update its `lastmod` only when the
  homepage content materially changes; add new canonical pages if the site expands.
- `robots.txt` allows crawling and points search engines to the sitemap.
- Google Search Console ownership verification and indexing requests are managed
  separately in the owner's Google account. Keep any verification file or meta tag
  in place after verification.

## Local preview

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory and open
http://127.0.0.1:8765/ . Commit and push reviewed changes to main to update GitHub Pages.

The repository retains the original template's MIT license.
