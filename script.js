// =========================================================
// Navigate Centre — script.js
// Mobile nav, sticky header shadow, back-to-top, FAQ accordion,
// contact form submission (Formspree), footer year
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu after tapping a link
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.getElementById('siteHeader');
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ---------- Back to top button ---------- */
  var backToTop = document.getElementById('backToTop');
  function handleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleBackToTop, { passive: true });
  handleBackToTop();

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      // close all other items (single-open accordion)
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          var q = openItem.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      question.setAttribute('aria-expanded', (!isOpen).toString());
    });
  });

  /* ---------- Contact form (Formspree) ---------- */
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var actionUrl = contactForm.getAttribute('action');

      // Guard: remind whoever is testing the site to add a real Formspree ID
      if (!actionUrl || actionUrl.indexOf('YOUR_FORM_ID') !== -1) {
        formStatus.textContent = 'Form is not connected yet — replace YOUR_FORM_ID in index.html with your Formspree form ID.';
        formStatus.style.color = '#c0392b';
        return;
      }

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }
      formStatus.textContent = '';

      fetch(actionUrl, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            formStatus.textContent = 'Thanks! Your message has been sent — we will get back to you shortly.';
            formStatus.style.color = '#1e7e34';
            contactForm.reset();
          } else {
            formStatus.textContent = 'Something went wrong sending your message. Please try again or call us directly.';
            formStatus.style.color = '#c0392b';
          }
        })
        .catch(function () {
          formStatus.textContent = 'Something went wrong sending your message. Please try again or call us directly.';
          formStatus.style.color = '#c0392b';
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        });
    });
  }

});
