

const detailsSection = document.querySelector('.details');
const projectsSection = document.querySelector(".projects");
const firstArrow = document.querySelector('.arrow-1');
const secondArrow = document.querySelector('.arrow-2');

const detailsBox = document.querySelector('.padding-details');
const projectsBox = document.querySelector('.padding-projects')

firstArrow.addEventListener('click', function() {
  console.log(revealed);
  if (revealed === true) detailsBox.scrollIntoView({behavior: 'smooth'});
})
secondArrow.addEventListener("click", function () {
  if (revealed === true) projectsBox.scrollIntoView({ behavior: "smooth" });
});


// Scroll Reveal
const allSections = document.querySelectorAll('.section');
let revealed = false;

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  revealed = true;
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

