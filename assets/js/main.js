const enableTitleAnchor = () => {
  [...Array(6).keys()]
    .map((num) => num + 1)
    .forEach((num) => {
      const headers = document.querySelectorAll("article#content>h" + num);

      headers.forEach((header) => {
        header.innerHTML = `
          <a href="#${header.id}" class="anchor icon-link" aria-hidden="true">
            <i class="fa-solid fa-link"></i>
          </a>
          ${header.innerHTML}`;
      });
    });
};

$(document).ready(function () {
  enableTitleAnchor();
});
