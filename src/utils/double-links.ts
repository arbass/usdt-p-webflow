export const doubleLinksTextFunc = () => {
  const doubleLinksText_elArray = document.querySelectorAll('[double-link]');

  if (doubleLinksText_elArray.length) {
    doubleLinksText_elArray.forEach((el) => {
      const firstLinkText = el.firstElementChild;
      const secondLinkText = firstLinkText.nextElementSibling;
      secondLinkText.innerHTML = firstLinkText.innerHTML;
    });
  }
};
