const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".content-panel");
const timelineItems = document.querySelectorAll(".timeline-item");
const themeButtons = document.querySelectorAll(".theme-toggle");

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
