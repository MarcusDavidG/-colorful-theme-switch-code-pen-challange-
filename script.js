document.getElementById("themeSwitcher").addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");
  if (
    !document.body.classList.contains("theme-dark") &&
    !document.body.classList.contains("theme-light")
  ) {
    document.body.classList.add("theme-light");
  } else if (document.body.classList.contains("theme-light")) {
    document.body.classList.remove("theme-light");
  }
});
