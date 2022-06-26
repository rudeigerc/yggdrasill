// enableTitleAnchor enables title anchors in the headings.
const enableTitleAnchor = () => {
  [...Array(6).keys()]
    .map((num) => num + 1)
    .forEach((num) => {
      const headers = document.querySelectorAll("article#content>h" + num);
      headers.forEach((header) => {
        header.innerHTML = `
          <a href="#${header.id}" class="anchor icon-link" aria-hidden="true">
            <i class="fa-solid fa-hashtag"></i>
          </a>
          ${header.innerHTML}`;
      });
    });
};

// enableBackref enables backref icons in the footnotes.
const enableBackref = () => {
  const backrefs = document.querySelectorAll(".footnotes a.footnote-backref");
  backrefs.forEach((backref) => {
    backref.innerHTML = '<i class="fa-solid fa-arrow-up-from-bracket"></i>';
  });
};

// enablePopup enables popup on the footnotes refs.
const enablePopup = () => {
  const sups = document.querySelectorAll("sup");
  sups.forEach((sup) => {
    const footnote = document.getElementById(
      `fn:${sup["id"].substr(-1, 1)}`
    ).firstElementChild;
    sup.innerHTML = `
    ${sup.innerHTML}
    <div class="sup-popup">
      ${footnote.textContent}
    </div>`;
  });
};

$(document).ready(function () {
  enableTitleAnchor();
  enableBackref();
  enablePopup();
});
