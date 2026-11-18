/* ==========================================================================
   PREMIUM X-RAY & SCAN CENTER - INTERACTIONS & UI CONTROLLER
   Scroll Reveals, 3D Card Tilt, FAQ Accordion, Image Lightbox, Category Filters
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Scroll-Based Reveal Animations
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    reveals.forEach(el => el.classList.add('revealed'));
  }

  // 2. 3D Tilt Effect on Desktop Hover
  const tiltCards = document.querySelectorAll('.tilt-card, .service-card, .pricing-card, .product-card');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice && window.innerWidth > 1024) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // 3. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isActive = item.classList.contains('active');
        // Close siblings for clean single-open accordion
        faqItems.forEach(sib => sib.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Lightbox Preview Modal for Medical Scans and Facility Photos
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  const previewableImages = document.querySelectorAll('.previewable-image, .gallery-card, .service-card-img-wrap, .tech-showcase-img-wrap');
  
  if (lightboxModal && lightboxImg && lightboxCaption) {
    previewableImages.forEach(wrap => {
      wrap.style.cursor = 'zoom-in';
      wrap.addEventListener('click', function (e) {
        // Prevent trigger if clicking on link or button inside wrap
        if (e.target.closest('a, button')) return;

        const img = wrap.tagName === 'IMG' ? wrap : wrap.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Diagnostic Scan View';
          lightboxCaption.textContent = img.alt || wrap.getAttribute('data-caption') || 'Diagnostic Imaging Examination';
          lightboxModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', function (e) {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 5. Category Filter Tabs (Products & Pricing Pages)
  const filterTabs = document.querySelectorAll('.filter-tab');
  const filterItems = document.querySelectorAll('[data-category]');

  if (filterTabs.length > 0 && filterItems.length > 0) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        filterTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const category = this.getAttribute('data-filter');

        filterItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category || itemCat.includes(category)) {
            item.style.display = '';
            item.classList.add('revealed');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. Home 1 Timeline Slider Hero Controller
  const timelineHero = document.getElementById('timelineHero');
  if (timelineHero) {
    const stepCards = timelineHero.querySelectorAll('.timeline-step-card');
    const trackNodes = timelineHero.querySelectorAll('.timeline-track-node');
    const captionEl = document.getElementById('timelineActiveCaption');
    let currentStep = 0;
    let autoPlayTimer = null;

    function setActiveTimelineStep(index) {
      currentStep = index;
      stepCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
      });
      trackNodes.forEach((node, i) => {
        node.classList.toggle('active', i === index);
      });
      if (captionEl && stepCards[index]) {
        const stepNum = '0' + (index + 1);
        const captionText = stepCards[index].getAttribute('data-caption') || '';
        captionEl.innerHTML = '<strong>' + stepNum + '</strong> &mdash; ' + captionText;
      }
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        const next = (currentStep + 1) % stepCards.length;
        setActiveTimelineStep(next);
      }, 4500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    stepCards.forEach((card, i) => {
      card.addEventListener('click', () => {
        setActiveTimelineStep(i);
        startAutoPlay();
      });
    });

    trackNodes.forEach((node, i) => {
      node.addEventListener('click', () => {
        setActiveTimelineStep(i);
        startAutoPlay();
      });
    });

    timelineHero.addEventListener('mouseenter', stopAutoPlay);
    timelineHero.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();
  }

  // 7. Home 2 Horizontal Diagnostic Test Carousel Controller
  const testCarousel = document.getElementById('testCarousel');
  if (testCarousel) {
    const track = document.getElementById('testCarouselTrack');
    const prevBtn = document.getElementById('testCarouselPrev');
    const nextBtn = document.getElementById('testCarouselNext');
    const dots = testCarousel.querySelectorAll('.test-carousel-dot');
    const totalSlides = dots.length;
    let activeSlide = 0;
    let carouselTimer = null;

    function updateCarousel(index) {
      activeSlide = (index + totalSlides) % totalSlides;
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      const offset = isRtl ? activeSlide * 100 : -(activeSlide * 100);
      if (track) {
        track.style.transform = `translateX(${offset}%)`;
      }
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeSlide);
      });
    }

    function startCarouselAuto() {
      stopCarouselAuto();
      carouselTimer = setInterval(() => {
        updateCarousel(activeSlide + 1);
      }, 5000);
    }

    function stopCarouselAuto() {
      if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        updateCarousel(activeSlide - 1);
        startCarouselAuto();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        updateCarousel(activeSlide + 1);
        startCarouselAuto();
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        updateCarousel(i);
        startCarouselAuto();
      });
    });

    testCarousel.addEventListener('mouseenter', stopCarouselAuto);
    testCarousel.addEventListener('mouseleave', startCarouselAuto);

    startCarouselAuto();
  }

  // 8. Home 2 Vertical Tabbed Preparation Showcase
  const prepShowcase = document.getElementById('prepTabbedShowcase');
  if (prepShowcase) {
    const tabBtns = prepShowcase.querySelectorAll('.prep-tab-btn');
    const slides = prepShowcase.querySelectorAll('.prep-showcase-slide');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetIdx = btn.getAttribute('data-prep-tab');

        tabBtns.forEach(b => {
          const isMatch = b.getAttribute('data-prep-tab') === targetIdx;
          b.classList.toggle('active', isMatch);
          b.setAttribute('aria-selected', isMatch ? 'true' : 'false');
        });

        slides.forEach(slide => {
          const isMatch = slide.getAttribute('data-prep-slide') === targetIdx;
          slide.classList.toggle('active', isMatch);
        });
      });
    });
  }

  // 9. About Page Concentric Orbital Values Showcase (Static Images, Highlight Only)
  const valuesOrbital = document.getElementById('valuesOrbital');
  if (valuesOrbital) {
    const satCircles = valuesOrbital.querySelectorAll('.orbital-sat-circle');
    const detailItems = valuesOrbital.querySelectorAll('.value-orbital-item');

    function setActiveOrbital(idx) {
      const numIdx = parseInt(idx, 10);
      satCircles.forEach(sat => {
        sat.classList.toggle('active', parseInt(sat.getAttribute('data-orbital-idx'), 10) === numIdx);
      });
      detailItems.forEach(item => {
        item.classList.toggle('active', parseInt(item.getAttribute('data-orbital-idx'), 10) === numIdx);
      });
    }

    satCircles.forEach(sat => {
      sat.addEventListener('click', () => setActiveOrbital(sat.getAttribute('data-orbital-idx')));
    });

    detailItems.forEach(item => {
      item.addEventListener('click', () => setActiveOrbital(item.getAttribute('data-orbital-idx')));
    });
  }

  // 10. About Page Split Dark-Panel Diagnostic Expertise Carousel
  const expertiseCarousel = document.getElementById('expertiseCarousel');
  if (expertiseCarousel) {
    const track = document.getElementById('expertiseCarouselTrack');
    const prevBtn = document.getElementById('expertiseCarouselPrev');
    const nextBtn = document.getElementById('expertiseCarouselNext');
    const dots = expertiseCarousel.querySelectorAll('.test-carousel-dot');
    const totalSlides = dots.length;
    let activeSlide = 0;
    let carouselTimer = null;

    function updateExpertiseCarousel(index) {
      activeSlide = (index + totalSlides) % totalSlides;
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      const offset = isRtl ? activeSlide * 100 : -(activeSlide * 100);
      if (track) {
        track.style.transform = `translateX(${offset}%)`;
      }
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeSlide);
      });
    }

    function startExpertiseAuto() {
      stopExpertiseAuto();
      carouselTimer = setInterval(() => {
        updateExpertiseCarousel(activeSlide + 1);
      }, 5000);
    }

    function stopExpertiseAuto() {
      if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        updateExpertiseCarousel(activeSlide - 1);
        startExpertiseAuto();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        updateExpertiseCarousel(activeSlide + 1);
        startExpertiseAuto();
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        updateExpertiseCarousel(i);
        startExpertiseAuto();
      });
    });

    expertiseCarousel.addEventListener('mouseenter', stopExpertiseAuto);
    expertiseCarousel.addEventListener('mouseleave', startExpertiseAuto);

    startExpertiseAuto();
  }

  // 11. X-Ray Service Page 3D Coverflow Carousel
  const xrayCoverflow = document.getElementById('xrayCoverflow');
  if (xrayCoverflow) {
    const cards = xrayCoverflow.querySelectorAll('.coverflow-card');
    const prevBtn = document.getElementById('xrayCoverflowPrev');
    const nextBtn = document.getElementById('xrayCoverflowNext');
    const dots = xrayCoverflow.querySelectorAll('.test-carousel-dot');
    const total = cards.length;
    let activeIdx = 0;

    function updateCoverflow(newIdx) {
      activeIdx = (newIdx + total) % total;
      const prevIdx = (activeIdx - 1 + total) % total;
      const nextIdx = (activeIdx + 1) % total;

      cards.forEach((card, i) => {
        card.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
        if (i === activeIdx) {
          card.classList.add('is-active');
        } else if (i === prevIdx) {
          card.classList.add('is-prev');
        } else if (i === nextIdx) {
          card.classList.add('is-next');
        } else {
          card.classList.add('is-hidden');
        }
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIdx);
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => updateCoverflow(activeIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => updateCoverflow(activeIdx + 1));

    cards.forEach((card, i) => {
      card.addEventListener('click', (e) => {
        if (i !== activeIdx) {
          e.preventDefault();
          updateCoverflow(i);
        }
      });
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => updateCoverflow(i));
    });

    updateCoverflow(0);
  }
});
