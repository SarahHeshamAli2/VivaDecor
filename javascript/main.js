const nav = document.getElementById('mynav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

function updateNavColor(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
  
}

const headerObserver = new IntersectionObserver(updateNavColor, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header)