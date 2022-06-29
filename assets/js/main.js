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

// enableScrollSpy enables Bootstrap Scrollspy for the table of contents.
const enableScrollSpy = () => {
  if ($("article").data("bs-spy")) {
    $("#TableOfContents").addClass("nav flex-column");
    $("#TableOfContents li").addClass("nav-item");
    $("#TableOfContents li a").addClass("nav-link");
    $("body").scrollspy("refresh");
  }
};

const enableScrollToTop = () => {
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  scrollToTopButton.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  const threshold = 100;
  document.addEventListener("scroll", () => {
    scrollToTopButton.style.visibility =
      window.scrollY > threshold ? "visible" : "hidden";
    scrollToTopButton.style.opacity = window.scrollY > threshold ? 1 : 0;
  });
};

$(document).ready(function () {
  enableTitleAnchor();
  enableBackref();
  enablePopup();
  enableScrollSpy();
  enableScrollToTop();
});
