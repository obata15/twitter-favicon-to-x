function getIcon (header) {
  const icon = header.querySelector('h1[role="heading"] svg');

  if (icon) {
    icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    return icon;
  }
}

const mutationObserver = new MutationObserver((mutationRecords) => {
  mutationRecords.forEach((mutationRecord) => {
    const header = mutationRecord.target.querySelector('header');

    if (header) {
      const icon = getIcon(header);

      const favicon = document.querySelector('head link[rel="shortcut icon"]');
      if (icon && favicon) {
        favicon.href = "data:image/svg+xml," + icon.outerHTML.replace(/\"/g, "'").replace(/\#/g, '%23')
      }
    }
  })
});

mutationObserver.observe(
  document.body,
  { childList: true, subtree: true }
);
