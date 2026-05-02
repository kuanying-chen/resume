const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".content-panel");
const timelineItems = document.querySelectorAll(".timeline-item");
const themeButtons = document.querySelectorAll(".theme-toggle");
const bossDialogue = document.querySelector('[data-dialogue="boss"]');
const meDialogue = document.querySelector('[data-dialogue="me"]');
const dialoguePairs = [
  {
    boss: "What tools do you know?",
    me: "Pretty much anything Adobe\u2014and AI, your favorite.",
  },
  {
    boss: "Great! I\u2019ll give you more to work on.",
    me: "Do I get paid more?",
  },
  {
    boss: "Haha.",
    me: "Haha.",
  },
];

function showPanel(panelName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === panelName);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-visible", panel.dataset.panel === panelName);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => showPanel(button.dataset.tab));
});

timelineItems.forEach((item) => {
  const trigger = item.querySelector(".item-header");

  trigger?.addEventListener("click", () => {
    const shouldOpen = !item.classList.contains("is-open");

    timelineItems.forEach((otherItem) => {
      otherItem.classList.remove("is-open");
      otherItem.querySelector(".item-header")?.setAttribute("aria-expanded", "false");
    });

    item.classList.toggle("is-open", shouldOpen);
    const isOpen = item.classList.contains("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});

if (bossDialogue && meDialogue) {
  let dialogueIndex = 0;

  window.setInterval(() => {
    dialogueIndex = (dialogueIndex + 1) % dialoguePairs.length;
    bossDialogue.classList.add("is-changing");

    window.setTimeout(() => {
      bossDialogue.textContent = dialoguePairs[dialogueIndex].boss;
      bossDialogue.classList.remove("is-changing");
    }, 320);

    window.setTimeout(() => {
      meDialogue.classList.add("is-changing");
    }, 1600);

    window.setTimeout(() => {
      meDialogue.textContent = dialoguePairs[dialogueIndex].me;
      meDialogue.classList.remove("is-changing");
    }, 1920);
  }, 5600);
}
