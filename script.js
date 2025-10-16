// ---------------- Cursor Follow ----------------
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// ---------------- Scroll Reveal Animation ----------------
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.3 }
);
sections.forEach((section) => observer.observe(section));

// ---------------- Navbar Background Change ----------------
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background =
    window.scrollY > 50 ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)';
});

// ---------------- Dynamic Blog Loader ----------------
const blogPosts = [
  { title: "Why I Love Web Design", file: "articles/blog1.html" },
  { title: "Building My Portfolio", file: "articles/blog2.html" },
  { title: "How I Started Coding", file: "articles/blog3.html" },
];

const blogContainer = document.getElementById('blog-container');
blogPosts.forEach((post) => {
  const div = document.createElement('div');
  div.classList.add('blog-post');
  div.innerHTML = `
    <h3>${post.title}</h3>
    <iframe src="${post.file}" loading="lazy"></iframe>
  `;
  blogContainer.appendChild(div);
});

// ---------------- Contact Form ----------------
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('✅ Thank you! Your message has been sent.');
});

// ---------------- Mobile Navigation Toggle ----------------
const nav = document.querySelector('nav');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = `<span></span><span></span><span></span>`;
nav.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
  const menu = nav.querySelector('ul');
  menu.classList.toggle('active');
  menuToggle.classList.toggle('open');
});
