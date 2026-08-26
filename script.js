document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const navLinks = [...document.querySelectorAll('.navbar .nav-link')];
  const collapseElement = document.getElementById('mainNav');
  const year = document.getElementById('year');

  year.textContent = new Date().getFullYear();

  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 10);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.bootstrap && collapseElement.classList.contains('show')) {
        window.bootstrap.Collapse.getOrCreateInstance(collapseElement).hide();
      }
    });
  });

  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const activateNav = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.05, 0.3] });
  observedSections.forEach((section) => activateNav.observe(section));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => {
    element.style.setProperty('--delay', `${element.dataset.delay || 0}ms`);
    revealObserver.observe(element);
  });

  const setImageFallback = (image) => {
    const media = image.closest('.project-media');
    if (media) media.classList.add('is-placeholder');
    const profileFrame = image.closest('.profile-frame');
    if (profileFrame) {
      image.hidden = true;
      const fallback = profileFrame.querySelector('.image-fallback');
      if (fallback) fallback.hidden = false;
    }
  };
  document.querySelectorAll('.project-media img, .profile-image').forEach((image) => {
    image.addEventListener('error', () => setImageFallback(image));
    if (image.complete && image.naturalWidth === 0) setImageFallback(image);
  });

  const gallery = document.getElementById('certificateGallery');
  const certificateModal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('modalCertificateImage');
  const certificateSources = [1, 2, 3].map((number) => `assets/certificates/certificate-${number}.jpg`);
  const validCertificates = [];

  Promise.all(certificateSources.map((source) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve({ source, available: true });
    image.onerror = () => resolve({ source, available: false });
    image.src = source;
  }))).then((results) => {
    results.filter((result) => result.available).forEach((result, index) => {
      validCertificates.push(result.source);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'certificate-card reveal is-visible';
      button.setAttribute('aria-label', `Buka sertifikat ${index + 1}`);
      button.innerHTML = `<img src="${result.source}" alt="Sertifikat ${index + 1}" loading="lazy">`;
      button.addEventListener('click', () => {
        modalImage.src = result.source;
        modalImage.alt = `Sertifikat ${index + 1} diperbesar`;
        if (window.bootstrap) window.bootstrap.Modal.getOrCreateInstance(certificateModal).show();
      });
      gallery.appendChild(button);
    });
    if (validCertificates.length) gallery.querySelector('.certificate-empty')?.remove();
  });
});
