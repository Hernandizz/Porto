const projects = [
  {
    title: "Sistem Web Minimalis",
    description: "Aplikasi web berkinerja tinggi tanpa dependensi berlebih.",
    image: "https://picsum.photos/seed/webminimal/400/220",
    tags: ["HTML", "CSS", "JavaScript"],
    details: "Arsitektur web murni vanilla JS tanpa runtime framework berat. Waktu load di bawah 1 detik, bundle nol, optimal untuk performa dan SEO.",
  },
  {
    title: "REST API Service",
    description: "Layanan API ringan untuk sinkronisasi data antar platform.",
    image: "https://picsum.photos/seed/restapi/400/220",
    tags: ["Node.js", "JSON"],
    details: "Menyediakan endpoint RESTful aman dengan autentikasi berbasis token JWT, validasi input strict, dan dokumentasi otomatis menggunakan OpenAPI/Swagger.",
  },
];

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "REST API", level: 80 },
];

const experiences = [
  {
    role: "Senior Developer",
    company: "PT Contoh Karya",
    period: "2022 - Sekarang",
    description: "Memimpin pengembangan produk web berskala startup, fokus pada performa dan maintainability.",
  },
  {
    role: "Frontend Developer",
    company: "PT Kode Nusantara",
    period: "2020 - 2022",
    description: "Membangun aplikasi dashboard internal dengan React dan Node.js.",
  },
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects.map((project) => `
    <article class="card" onclick="this.classList.toggle('active')">
      <img src="${project.image}" alt="${project.title}">
      <h3 style="margin-top: 12px;">${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="detail">
        <p><strong>Penjelasan Detail:</strong></p>
        <p>${project.details}</p>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  const container = document.getElementById("skillList");
  container.innerHTML = skills.map((skill) => `
    <div class="skill-row">
      <span class="skill-name">${skill.name}</span>
      <span class="skill-bar">
        <span class="skill-fill" style="width: ${skill.level}%"></span>
      </span>
    </div>
  `).join("");
}

function renderExperiences() {
  const container = document.getElementById("experienceList");
  container.innerHTML = experiences.map((exp) => `
    <div class="timeline-item">
      <h3>${exp.role}</h3>
      <div class="meta">${exp.company} &bull; ${exp.period}</div>
      <p>${exp.description}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderExperiences();
});
