function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const loadHTML = async (id, file) => {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
};

loadHTML("header", "header.html");
loadHTML("profileS","profile.html");
loadHTML("aboutS", "about.html");
loadHTML("experienceS", "experience.html");
loadHTML("skillsS","skills.html");
loadHTML("projectsS", "projects.html");
loadHTML("contactS", "contact.html");
loadHTML("footer", "footer.html");