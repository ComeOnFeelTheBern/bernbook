setTimeout(() => {
  // Disable accordion title animations.
  const titles = Array.from(document.querySelectorAll('.accordion-title'));
  for (const title of titles) {
    title.addEventListener(
      'click',
      e => {
        e.preventDefault();
        e.stopPropagation();
      },
      true
    );
  }

  // Make links open in new window.
  const links = Array.from(document.querySelectorAll('#issues-accordion a.btn'));
  for (const link of links) {
    link.setAttribute('target', '_blank');
    const path = link.getAttribute('href');
    link.setAttribute('href', `https://berniesanders.com${path}`);
  }
});
