/* Sponsorship Outreach Agent — demo logic (sample data, no backend). */
(function () {
  var state = { niche: "tech", tier: 1, selectedBrand: null, running: false };

  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return "$" + Math.round(n).toLocaleString("en-US"); };
  var round50 = function (n) { return Math.round(n / 50) * 50; };

  function rangeFor(brand) {
    var f = TIERS[state.tier].factor;
    return fmt(round50(brand.base[0] * f)) + " – " + fmt(round50(brand.base[1] * f));
  }

  function channel() {
    return {
      name: ($("channelName").value || "Your channel").trim(),
      views: ($("avgViews").value || "8,200").trim(),
      tierLabel: TIERS[state.tier].label
    };
  }

  /* --- Niche pills --- */
  var pills = document.querySelectorAll("#nichePills .pill");
  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      if (state.running) return;
      pills.forEach(function (p) { p.classList.remove("active"); p.setAttribute("aria-selected", "false"); });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");
      state.niche = pill.dataset.niche;
      state.selectedBrand = null;
      $("results").hidden = true;
      $("logPanel").hidden = true;
    });
  });

  $("subsTier").addEventListener("change", function (e) {
    state.tier = parseInt(e.target.value, 10);
    if (!$("results").hidden) renderResults();
  });

  /* --- Agent run simulation --- */
  $("runBtn").addEventListener("click", function () {
    if (state.running) return;
    state.running = true;
    state.selectedBrand = null;
    var btn = $("runBtn");
    btn.disabled = true;
    btn.textContent = "Agent running…";
    $("results").hidden = true;
    var logPanel = $("logPanel");
    var log = $("agentLog");
    logPanel.hidden = false;
    log.innerHTML = "";

    var niche = NICHES[state.niche];
    var steps = [
      "Scanning the " + niche.label + " niche for sponsor activity…",
      "Found " + niche.scanned + " videos with brand integrations in the last 90 days.",
      "Verifying active sponsors — removed " + niche.dropped + " expired or inactive deals.",
      "Finding decision-maker contacts — 6 verified, patterns noted where private.",
      "Drafting personalised outreach — 6 drafts ready.",
      "Done — 6 verified brands, 6 contacts, 6 drafts."
    ];

    steps.forEach(function (text, i) {
      setTimeout(function () {
        var li = document.createElement("li");
        li.textContent = text;
        li.className = "done";
        log.appendChild(li);
        if (i === steps.length - 1) {
          state.running = false;
          btn.disabled = false;
          btn.textContent = "Run the agent again";
          renderResults();
        }
      }, 450 * (i + 1));
    });
  });

  /* --- Results --- */
  function renderResults() {
    var niche = NICHES[state.niche];
    var ch = channel();

    $("summaryChips").innerHTML =
      "<span class='chip'><strong>6</strong>&nbsp;verified brands</span>" +
      "<span class='chip'><strong>6</strong>&nbsp;contacts found</span>" +
      "<span class='chip'><strong>6</strong>&nbsp;draft emails ready</span>" +
      "<span class='chip'>" + niche.label + " · " + ch.tierLabel + "</span>";

    var list = $("brandList");
    list.innerHTML = "";
    niche.brands.forEach(function (brand, idx) {
      var b = document.createElement("button");
      b.className = "brand-item" + (state.selectedBrand === idx ? " selected" : "");
      b.innerHTML =
        "<span class='brand-top'><span class='brand-name'></span><span class='brand-range'></span></span>" +
        "<span class='brand-fit'></span>" +
        "<span class='brand-meta'></span>";
      b.querySelector(".brand-name").textContent = brand.name;
      b.querySelector(".brand-range").textContent = rangeFor(brand) + " / video";
      b.querySelector(".brand-fit").textContent = brand.fit;
      b.querySelector(".brand-meta").textContent = brand.deal + " · Contact: " + brand.contact;
      b.addEventListener("click", function () {
        state.selectedBrand = idx;
        renderResults();
        document.querySelectorAll(".brand-item").forEach(function (el, i) {
          el.classList.toggle("selected", i === idx);
        });
      });
      list.appendChild(b);
    });

    renderDraft();
    $("results").hidden = false;
  }

  function composeDraft(brand) {
    var niche = NICHES[state.niche];
    var ch = channel();
    var subject = "Sponsorship idea for " + ch.name + " × " + brand.name;
    var body =
      "Hi " + brand.name + " team,\n\n" +
      "I run " + ch.name + " — a " + niche.label.toLowerCase() + " channel with " + ch.tierLabel.toLowerCase() + " and around " + ch.views + " views per video. " + brand.pitch + "\n\n" +
      "I noticed " + brand.name + " has sponsored creators in " + niche.label.toLowerCase() + " recently, and I think my audience (" + niche.audience + ") would be a strong fit for a " + brand.deal.toLowerCase() + ".\n\n" +
      "I'd love to discuss a paid placement — happy to share my media kit and past integration examples. Would you be open to a quick call next week?\n\n" +
      "Best regards,\n" + ch.name;
    return { subject: subject, body: body };
  }

  function renderDraft() {
    var panel = $("draftPanel");
    if (state.selectedBrand === null) {
      panel.innerHTML = '<p class="draft-empty">Select a brand to preview its draft email.</p>';
      return;
    }
    var brand = NICHES[state.niche].brands[state.selectedBrand];
    var draft = composeDraft(brand);
    panel.innerHTML = "";
    var subj = document.createElement("p");
    subj.className = "draft-subject";
    subj.textContent = "Subject: " + draft.subject;
    var to = document.createElement("p");
    to.className = "draft-to";
    to.textContent = "To: " + brand.contact + "  ·  " + brand.deal;
    var body = document.createElement("p");
    body.className = "draft-body";
    body.textContent = draft.body;
    var copyBtn = document.createElement("button");
    copyBtn.className = "btn btn-primary";
    copyBtn.textContent = "Copy draft";
    var stateEl = document.createElement("span");
    stateEl.className = "copy-state";
    copyBtn.addEventListener("click", function () {
      copyText("Subject: " + draft.subject + "\n\n" + draft.body, stateEl);
    });
    panel.appendChild(subj);
    panel.appendChild(to);
    panel.appendChild(body);
    panel.appendChild(copyBtn);
    panel.appendChild(stateEl);
  }

  function copyText(text, stateEl) {
    function done() { if (stateEl) { stateEl.textContent = "Copied."; setTimeout(function () { stateEl.textContent = ""; }, 2000); } }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* --- DM template copy --- */
  $("copyDmBtn").addEventListener("click", function () {
    copyText($("dmText").textContent, $("copyDmState"));
  });
})();
