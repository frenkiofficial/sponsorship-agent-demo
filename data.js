/* Sample data for the Sponsorship Outreach Agent demo.
   Brands below are real brands known to sponsor small YouTube creators.
   Ranges are typical market ranges for the smallest tier, scaled by channel size.
   Contacts are common public patterns, not verified personal inboxes. */
const NICHES = {
  tech: {
    label: "Tech",
    audience: "65% aged 18–34, mostly US/EU, active gadget buyers",
    scanned: 47,
    dropped: 9,
    brands: [
      { name: "NordVPN", fit: "The most active VPN sponsor in small tech channels — a natural fit for reviews and setup guides.", deal: "Paid integration, 60–90 sec", base: [150, 400], contact: "partnerships@nordvpn.com", pitch: "My viewers keep asking how I stay safe on public Wi-Fi while testing gadgets, and your 60-second integration fits my review flow naturally." },
      { name: "Surfshark", fit: "Sponsors tech explainers and comparison videos; frequently works with channels under 50k subs.", deal: "Paid integration, 60 sec", base: [120, 350], contact: "partnerships@surfshark.com", pitch: "I compare VPNs in my setup videos already, so a Surfshark segment would slot into content my audience already watches to the end." },
      { name: "Skillshare", fit: "Online classes — a strong match for tutorial and how-to tech channels.", deal: "Integration + affiliate", base: [100, 300], contact: "partnerships@skillshare.com", pitch: "My tutorials teach the tools; your classes teach the craft behind them — my viewers who finish a video often ask where to learn more." },
      { name: "Brilliant.org", fit: "Interactive STEM learning; a regular sponsor of educational tech channels.", deal: "Paid integration, 60–90 sec", base: [150, 400], contact: "partnerships@brilliant.org", pitch: "My audience likes understanding how things work, not just what to buy — Brilliant is the rare sponsor that rewards that curiosity." },
      { name: "Raycon", fit: "Audio gadgets; sponsors small and mid-size tech channels with product + fee deals.", deal: "Paid integration + product", base: [200, 500], contact: "creators@rayconglobal.com", pitch: "I test earbuds on camera every month, so a Raycon review would be a genuine test in my usual format, not an ad read." },
      { name: "Hostinger", fit: "Web hosting — fits channels that cover websites, online business, or creator tools.", deal: "Integration + affiliate", base: [100, 300], contact: "affiliates@hostinger.com", pitch: "A lot of my viewers are starting their first website after watching my videos, and I already point them to hosting options in my descriptions." }
    ]
  },
  finance: {
    label: "Finance",
    audience: "70% aged 25–44, actively investing or starting to invest",
    scanned: 38,
    dropped: 7,
    brands: [
      { name: "TradingView", fit: "Charting platform; sponsors trading and investing channels of all sizes.", deal: "Paid integration, 60–90 sec", base: [200, 600], contact: "partnerships@tradingview.com", pitch: "Every chart in my videos is already a TradingView chart — my viewers can see the product working before I ever mention it." },
      { name: "Wise", fit: "International transfers; fits finance channels with a global audience.", deal: "Paid integration, 60 sec", base: [150, 400], contact: "partnerships@wise.com", pitch: "A third of my audience lives outside the US and asks about moving money cheaply — Wise answers the exact question my comments are full of." },
      { name: "Revolut", fit: "Digital bank; regularly partners with finance creators.", deal: "Paid dedicated or integration", base: [150, 500], contact: "partnerships@revolut.com", pitch: "My viewers are opening their first investment accounts right now, and Revolut is one of the apps they keep naming in my polls." },
      { name: "eToro", fit: "Investing platform; a routine sponsor — note that a risk disclaimer is required.", deal: "Paid integration, 60–90 sec", base: [200, 600], contact: "affiliates@etoro.com", pitch: "I explain copy-trading to beginners every week, and eToro is the platform my audience asks about most — with the proper disclaimers, of course." },
      { name: "Acorns", fit: "Micro-investing for beginners; fits channels teaching first steps.", deal: "Paid integration, 60 sec", base: [100, 300], contact: "partnerships@acorns.com", pitch: "My most-watched video is literally 'investing with $5 a week' — Acorns is built for exactly that viewer." },
      { name: "SoFi", fit: "US finance super-app; larger deals for finance channels.", deal: "Paid dedicated video", base: [300, 800], contact: "partnerships@sofi.com", pitch: "My audience is refinancing, budgeting, and opening Roth IRAs — SoFi covers three topics I already make videos about." }
    ]
  },
  gaming: {
    label: "Gaming",
    audience: "80% aged 16–30, PC and console gamers",
    scanned: 52,
    dropped: 11,
    brands: [
      { name: "G Fuel", fit: "Gamer energy drink; sponsors small gaming channels with product + fee.", deal: "Integration + product", base: [150, 400], contact: "sponsorships@gfuel.com", pitch: "My late-night ranked grind streams are exactly when my chat talks about energy drinks — G Fuel is already a meme in my community." },
      { name: "Razer", fit: "Gaming peripherals; sends product plus fee to gaming creators.", deal: "Paid integration + product", base: [200, 600], contact: "creator@razer.com", pitch: "My setup is already full of Razer gear my viewers ask about by name — a sponsored review would just be my honest take on the next piece." },
      { name: "Logitech G", fit: "Gaming gear; sponsors tournaments and gaming channels.", deal: "Paid integration, 60–90 sec", base: [200, 500], contact: "partnerships@logitech.com", pitch: "I do a gear segment in every loadout video, and Logitech G is the brand my viewers vote for most in my setup polls." },
      { name: "Opera GX", fit: "The gamer browser; a routine sponsor of gaming channels.", deal: "Paid integration, 60 sec", base: [150, 400], contact: "creators@opera.com", pitch: "My viewers live in their browser between matches, and Opera GX is the one browser built for them — it fits a 60-second slot in my videos perfectly." },
      { name: "Secretlab", fit: "Gaming chairs; product + fee deals for gaming creators.", deal: "Paid integration + product", base: [250, 700], contact: "sponsorships@secretlab.co", pitch: "I stream 4+ hours a day from a Secretlab chair my chat asks about constantly — a review would be me talking about something I already use." },
      { name: "ExitLag", fit: "Connection optimiser for gamers; sponsors gaming channels.", deal: "Paid integration, 60 sec", base: [100, 300], contact: "partnerships@exitlag.com", pitch: "Half my ranked videos mention ping, and my viewers in Southeast Asia and Brazil ask how I keep mine low — ExitLag is the direct answer." }
    ]
  },
  education: {
    label: "Education",
    audience: "60% students and career switchers, aged 18–34",
    scanned: 41,
    dropped: 8,
    brands: [
      { name: "Skillshare", fit: "Creative classes; sponsors learning channels of all sizes.", deal: "Integration + affiliate", base: [100, 300], contact: "partnerships@skillshare.com", pitch: "My viewers finish a tutorial and immediately ask where to go deeper — Skillshare is where I already send them." },
      { name: "Brilliant.org", fit: "Interactive STEM learning; a regular sponsor of education channels.", deal: "Paid integration, 60–90 sec", base: [150, 400], contact: "partnerships@brilliant.org", pitch: "My channel is about understanding, not memorising — Brilliant's interactive approach is the same idea in product form." },
      { name: "Coursera", fit: "University courses; fits channels about careers and skills.", deal: "Paid integration, 60 sec", base: [150, 400], contact: "partnerships@coursera.org", pitch: "My career-change videos get the most saves on my channel, and Coursera certificates are the concrete next step my viewers ask about." },
      { name: "MasterClass", fit: "Celebrity-taught classes; larger deals for education channels.", deal: "Paid dedicated video", base: [300, 800], contact: "partnerships@masterclass.com", pitch: "My audience loves learning from the best in a field — MasterClass is the premium version of the curiosity my channel is built on." },
      { name: "Blinkist", fit: "Book summaries; sponsors self-improvement and study channels.", deal: "Paid integration, 60 sec", base: [100, 300], contact: "partnerships@blinkist.com", pitch: "I summarise one book a week for my viewers, and Blinkist does the same thing professionally — my audience would recognise the fit instantly." },
      { name: "Duolingo", fit: "Language learning; sponsors education and study channels.", deal: "Paid integration, 60–90 sec", base: [150, 400], contact: "partnerships@duolingo.com", pitch: "My study-with-me videos always include a language block, and Duolingo is the app half my comment section already uses." }
    ]
  },
  fitness: {
    label: "Fitness",
    audience: "65% aged 18–35, training 3–5 times a week",
    scanned: 44,
    dropped: 10,
    brands: [
      { name: "Myprotein", fit: "Supplements; sponsors small fitness channels with product + fee.", deal: "Integration + product", base: [150, 400], contact: "influencers@myprotein.com", pitch: "My supplement shelf is already Myprotein, and my viewers ask for my discount code in almost every Q&A — a formal partnership just makes it official." },
      { name: "Gymshark", fit: "Fitness apparel; ambassador and sponsorship deals for fitness creators.", deal: "Paid integration + product", base: [200, 600], contact: "athletes@gymshark.com", pitch: "I train in Gymshark five days a week and my viewers screenshot my outfits — the brand is already part of my videos." },
      { name: "WHOOP", fit: "Recovery wearable; sponsors athletes and fitness creators.", deal: "Paid integration, 60–90 sec", base: [200, 500], contact: "partnerships@whoop.com", pitch: "I talk about recovery data in every training vlog, and WHOOP is the wearable my audience asks me to review most." },
      { name: "AG1", fit: "Daily greens supplement; sponsors podcasts and fitness channels.", deal: "Paid integration, 60 sec", base: [250, 700], contact: "partnerships@drinkag1.com", pitch: "My morning routine video is my most-shared upload, and AG1 is already in it — my viewers have been asking where to get it." },
      { name: "Huel", fit: "Complete food; sponsors lifestyle and fitness channels.", deal: "Paid integration, 60 sec", base: [150, 400], contact: "partnerships@huel.com", pitch: "My 'what I eat on busy training days' video drove a lot of questions about quick meals, and Huel is the practical answer." },
      { name: "Transparent Labs", fit: "Transparent supplements; sponsors fitness channels.", deal: "Paid integration + product", base: [150, 400], contact: "influencers@transparentlabs.com", pitch: "I read supplement labels on camera and call out proprietary blends — Transparent Labs is the brand that actually passes my own test." }
    ]
  }
};

const TIERS = [
  { label: "5k – 20k subscribers", factor: 1 },
  { label: "20k – 50k subscribers", factor: 1.8 },
  { label: "50k – 100k subscribers", factor: 3 }
];
