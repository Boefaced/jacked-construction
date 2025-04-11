document.addEventListener('DOMContentLoaded', () => {
    // Lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const projects = Array.from(document.querySelectorAll('.project-item'));
    let currentIndex = 0;
  
    // Open lightbox
    projects.forEach((project, index) => {
      project.addEventListener('click', () => {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
      });
    });
  
    // Navigation functions
    function updateLightbox() {
      const currentProject = projects[currentIndex];
      lightboxImg.src = currentProject.querySelector('img').src;
      lightboxCaption.textContent = currentProject.querySelector('.project-caption').textContent;
    }
  
    function navigate(direction) {
      currentIndex = (currentIndex + direction + projects.length) % projects.length;
      updateLightbox();
    }
  
    // Event listeners
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate(-1);
    });
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate(1);
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  
    // Keyboard controls (optional)
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') lightbox.classList.remove('active');
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  });