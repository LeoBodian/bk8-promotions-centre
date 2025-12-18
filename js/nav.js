/**
 * BK8 Lucky 88 - Shared Navigation Script
 * Include this script on all pages to ensure consistent menu behavior
 * 
 * Usage: <script src="/js/nav.js" defer></script>
 * Or:    <script src="../js/nav.js" defer></script> (from subdirectories)
 */

(function() {
  'use strict';

  // Initialize navigation when DOM is ready
  document.addEventListener('DOMContentLoaded', initNav);

  function initNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (!navToggle || !nav) {
      console.warn('Nav elements not found. Ensure .nav-toggle and .nav exist.');
      return;
    }

    // Toggle menu on button click
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      nav.classList.toggle('active');
      
      // Update aria-expanded for accessibility
      const isExpanded = nav.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });

    // Close menu on window resize if switching to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        nav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /**
   * Standard Navigation HTML Template
   * Use this template when creating new pages:
   * 
   * For root level pages (index.html):
   * <nav class="nav"><ul class="nav-list">
   *   <li><a href="index.html">Home</a></li>
   *   <li><a href="welcome/bonus.html">Welcome Bonus</a></li>
   *   <li><a href="promotions/daily.html">Daily Promos</a></li>
   *   <li><a href="promotions/vip.html">VIP Rewards</a></li>
   *   <li><a href="codes/index.html">Claim Bonus</a></li>
   *   <li><a href="lucky88/index.html">Lucky 88</a></li>
   * </ul></nav>
   * 
   * For subdirectory pages (add ../ prefix to paths):
   * <nav class="nav"><ul class="nav-list">
   *   <li><a href="../index.html">Home</a></li>
   *   <li><a href="../welcome/bonus.html">Welcome Bonus</a></li>
   *   <li><a href="../promotions/daily.html">Daily Promos</a></li>
   *   <li><a href="../promotions/vip.html">VIP Rewards</a></li>
   *   <li><a href="../codes/index.html">Claim Bonus</a></li>
   *   <li><a href="../lucky88/index.html">Lucky 88</a></li>
   * </ul></nav>
   * 
   * Add class="active" to the current page's link
   */

})();
