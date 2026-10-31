const projects = [
  {
    title: "Sistem Web Minimalis",
    description: "Aplikasi web berkinerja tinggi tanpa dependensi berlebih.",
    image: "https://picsum.photos/seed/webminimal/400/220",
    tags: ["HTML", "CSS", "JavaScript"],
    details: "Arsitektur web murni vanilla JS tanpa runtime framework berat. Waktu load di bawah 1 detik, bundle nol, optimal untuk performa dan SEO. Cocok untuk startup yang butuh landing page kilat tanpa biaya hosting berat.",
    link: "https://github.com/Hernandizz/web-minimal",
  },
  {
    title: "REST API Service",
    description: "Layanan API ringan untuk sinkronisasi data antar platform.",
    image: "https://picsum.photos/seed/restapi/400/220",
    tags: ["Node.js", "JSON"],
    details: "Menyediakan endpoint RESTful aman dengan autentikasi berbasis token JWT, validasi input strict, dan dokumentasi otomatis menggunakan OpenAPI/Swagger. Dapat diakses 99.9% uptime.",
    link: "https://github.com/Hernandizz/rest-api-service",
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
    description: "Memimpin pengembangan produk web berskala startup, fokus pada performa dan maintainability. Merancang arsitektur mikro-layanan, mengoptimalkan bundle size hingga 40% lebih kecil, dan mengimplementasikan CI/CD pipeline otomatis. Memimpin tim 4 developer, code review rutin, dan mentoring junior developer.",
  },
  {
    role: "Frontend Developer",
    company: "PT Kode Nusantara",
    period: "2020 - 2022",
    description: "Membangun aplikasi dashboard internal dengan React dan Node.js. Mengembangkan komponen UI reusable, mengintegrasikan REST API, dan mengimplementasikan state management dengan Redux Toolkit. Meningkatkan performa rendering 30% melalui lazy loading dan memoization. Berkolaborasi dengan tim backend untuk desain kontrak API.",
  },
];

function openModal(index) {
  const project = projects[index];
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalImage").alt = project.title;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalDetails").textContent = project.details;
  document.getElementById("modalTags").innerHTML = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`).join("");
  document.getElementById("modalLink").href = project.link;
  document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
};

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects.map((project, index) => `
    <article class="card" onclick="openModal(${index})">
      <img src="${project.image}" alt="${project.title}">
      <h3 style="margin-top: 12px;">${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
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
