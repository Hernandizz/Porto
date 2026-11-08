/**
 * Portfolio Interactive Scripts
 * Pure Vanilla JS - Zero Dependencies
 * Focused on Accessibility, Performance & Reliability
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Theme Management (Light / Dark Mode with Persistence)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const themeStorageKey = 'asep-portfolio-theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(themeStorageKey);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(themeStorageKey, theme);
    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      // Update SVG icons inside toggle button
      const sunIcon = themeToggle.querySelector('.sun-icon');
      const moonIcon = themeToggle.querySelector('.moon-icon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = isDark ? 'block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'block';
      }
    }
  }

  // Initialize theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Listen to OS theme changes if user hasn't explicitly set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(themeStorageKey)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // --------------------------------------------------------------------------
  // 2. Email Copy-to-Clipboard with Accessible Live Announcement
  // --------------------------------------------------------------------------
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyFeedback = document.getElementById('copyFeedback');
  const emailToCopy = 'asephernand@gmail.com';
  let feedbackTimeout = null;

  if (copyBtn && copyFeedback) {
    copyBtn.addEventListener('click', function () {
      function showSuccess() {
        copyFeedback.textContent = 'Email tersalin ke clipboard!';
        copyFeedback.classList.add('show');
        if (feedbackTimeout) clearTimeout(feedbackTimeout);
        feedbackTimeout = setTimeout(function () {
          copyFeedback.classList.remove('show');
        }, 2200);
      }

      function showFallback() {
        window.location.href = 'mailto:' + emailToCopy;
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailToCopy).then(showSuccess).catch(showFallback);
      } else {
        // Fallback for non-secure context or older browsers
        try {
          const tempInput = document.createElement('input');
          tempInput.value = emailToCopy;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          showSuccess();
        } catch (err) {
          showFallback();
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. GitHub Projects Category Filtering (Pure Vanilla JS)
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const repoCards = document.querySelectorAll('.repo-card');

  if (filterButtons.length > 0 && repoCards.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        // Update active button state
        filterButtons.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        // Filter cards
        repoCards.forEach(function (card) {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

})();
