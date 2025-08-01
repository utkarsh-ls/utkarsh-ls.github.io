// ====================== EXPERIENCE ======================
function renderExperience(containerId, limit = null) {
    const container = document.getElementById(containerId);
    const experienceData = getExperienceData();
    if (!container || !experienceData) return;

    const items = limit ? experienceData.slice(0, limit) : experienceData;

    container.innerHTML = '';
    items.forEach(item => {
        const tagsHTML = item.tags
            .map(tag => `<span class="exp-tag">${tag}</span>`)
            .join('');

        const bulletPoints = item.description
            .split('. ')
            .filter(point => point.trim() !== '')
            .map(point => `<li>${point.trim().replace(/\.$/, '')}</li>`)
            .join('');

        container.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">
                    ${item.title}
                    <span class="exp-tags-inline">${tagsHTML}</span>
                </h3>
                <p class="timeline-company">${item.company}</p>
                <ul class="timeline-details">${bulletPoints}</ul>
            </div>
        `;
    });
}


// ====================== PROJECTS ======================
function renderProjects(containerId, limit = null) {
    const container = document.getElementById(containerId);
    const projectsData = getProjectsData();
    if (!container || !projectsData) return;

    const items = limit ? projectsData.slice(0, limit) : projectsData;
    
    container.innerHTML = '';
    items.forEach(project => {
        container.innerHTML += `
            <div class="project-card">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank">GitHub →</a>
                    ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank">Live Demo →</a>` : ''}
                </div>
            </div>
        `;
    });
}


// ====================== SKILLS ======================
function renderSkills(containerId, limitCategories = null, limitSkills = null) {
    const container = document.getElementById(containerId);
    const skillsData = getSkillsData();
    if (!container || !skillsData) return;

    container.innerHTML = '';
    const categories = Object.entries(skillsData);
    const items = limitCategories ? categories.slice(0, limitCategories) : categories;

    items.forEach(([category, list]) => {
        let displaySkills = list;
        let showMore = false;

        if (limitSkills && list.length > limitSkills) {
            displaySkills = list.slice(0, limitSkills);
            showMore = true;
        }

        container.innerHTML += `
            <div class="skill-category">
                <h3>${category}</h3>
                <div class="skill-list">
                    ${displaySkills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                    ${showMore ? `<span class="skill-item more-skills">+ More...</span>` : ''}
                </div>
            </div>
        `;
    });
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('more-skills')) {
        const viewButton = document.querySelector('.view-all-skills-btn'); // "View All Skills" button
        if (viewButton) {
            viewButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
            viewButton.classList.remove('highlight-pulse'); // Remove if active
            void viewButton.offsetWidth; // Trigger reflow to reset animation
            viewButton.classList.add('highlight-pulse'); // Re-add to restart animation

            setTimeout(() => {
                viewButton.classList.remove('highlight-pulse');
            }, 4500); // remove highlight after 3 cycles (1.5s)
        }
    }
});
