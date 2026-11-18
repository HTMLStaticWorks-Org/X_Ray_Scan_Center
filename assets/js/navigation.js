/* ==========================================================================
   PREMIUM X-RAY & SCAN CENTER - NAVIGATION & RTL CONTROLLER
   Handles Sticky Header, Active Indicators, Mobile Drawer & RTL Toggle
   ========================================================================== */

(function () {
  const DIR_KEY = 'xray-scan-dir';

  // Apply saved direction or default to ltr
  const savedDir = localStorage.getItem(DIR_KEY) || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  if (savedDir === 'rtl') {
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('lang', 'en');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const rtlButtons = document.querySelectorAll('.rtl-toggle');

    // Sticky Navigation Listener
    if (header) {
      const handleScroll = () => {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    // Mobile Navigation Drawer Toggle
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', function () {
        const isOpen = mobileDrawer.classList.contains('open');
        if (isOpen) {
          mobileDrawer.classList.remove('open');
          mobileToggle.classList.remove('active');
          document.body.style.overflow = '';
        } else {
          mobileDrawer.classList.add('open');
          mobileToggle.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });

      // Close drawer on link click
      const mobileLinks = mobileDrawer.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileDrawer.classList.remove('open');
          mobileToggle.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Mobile Dropdown Accordion Toggle
      const mobileDropdownTriggers = mobileDrawer.querySelectorAll('.mobile-dropdown-trigger');
      mobileDropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
          const group = this.closest('.mobile-dropdown-group');
          const isExpanded = this.getAttribute('aria-expanded') === 'true';

          mobileDropdownTriggers.forEach(other => {
            if (other !== this) {
              other.setAttribute('aria-expanded', 'false');
              const otherGroup = other.closest('.mobile-dropdown-group');
              if (otherGroup) otherGroup.classList.remove('open');
            }
          });

          this.setAttribute('aria-expanded', String(!isExpanded));
          if (group) {
            group.classList.toggle('open', !isExpanded);
          }
        });
      });

      // Close on escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
          mobileDrawer.classList.remove('open');
          mobileToggle.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    // RTL Toggle Functionality (Bidirectional Left-to-Right / Right-to-Left Arrow Icon)
    const rtlIconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 2 21 6 17 10"/><path d="M3 6h18"/><polyline points="7 22 3 18 7 14"/><path d="M21 18H3"/></svg>';

    function updateRtlUI(dir) {
      rtlButtons.forEach(btn => {
        btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to Left-to-Right layout' : 'Switch to Right-to-Left layout');
        btn.setAttribute('title', dir === 'rtl' ? 'RTL Active (Click for LTR)' : 'LTR Active (Click for RTL)');
        btn.setAttribute('data-dir', dir);
        if (dir === 'rtl') {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
        btn.innerHTML = rtlIconSvg;
      });
    }

    updateRtlUI(savedDir);

    rtlButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
        const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';

        document.documentElement.setAttribute('dir', nextDir);
        document.documentElement.setAttribute('lang', nextDir === 'rtl' ? 'ar' : 'en');
        localStorage.setItem(DIR_KEY, nextDir);
        updateRtlUI(nextDir);
      });
    });

    // Active Navigation Highlight
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      const cleanHref = href.toLowerCase().replace(/^\.\.\//, '').replace(/^\.\//, '');
      const cleanPath = currentPath.split('/').pop() || 'index.html';

      if (cleanHref === cleanPath || (cleanPath === '' && cleanHref === 'index.html')) {
        link.classList.add('active');
      }
    });
  });
})();
