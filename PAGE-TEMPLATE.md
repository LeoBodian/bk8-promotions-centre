# BK8 Lucky 88 - Page Template Guide

## Standard Navigation Menu

All pages must use this consistent navigation structure:

### For Root Level Pages (e.g., index.html)

```html
<header class="header">
  <div class="container">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="images/logo.webp" alt="BK8-88" class="logo-img" width="32" height="32">
        <span>Lucky 88</span>
      </a>
      <button class="nav-toggle" aria-label="Menu" aria-expanded="false">☰</button>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="welcome/bonus.html">Welcome Bonus</a></li>
          <li><a href="promotions/daily.html">Daily Promos</a></li>
          <li><a href="promotions/vip.html">VIP Rewards</a></li>
          <li><a href="codes/index.html">Claim Bonus</a></li>
          <li><a href="lucky88/index.html">Lucky 88</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

### For Subdirectory Pages (e.g., welcome/bonus.html, promotions/daily.html)

```html
<header class="header">
  <div class="container">
    <div class="header-inner">
      <a href="../index.html" class="logo">
        <span>BK8 Lucky 88</span>
      </a>
      <button class="nav-toggle" aria-label="Menu" aria-expanded="false">☰</button>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="../index.html">Home</a></li>
          <li><a href="../welcome/bonus.html">Welcome Bonus</a></li>
          <li><a href="../promotions/daily.html">Daily Promos</a></li>
          <li><a href="../promotions/vip.html">VIP Rewards</a></li>
          <li><a href="../codes/index.html">Claim Bonus</a></li>
          <li><a href="../lucky88/index.html">Lucky 88</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

## Important Notes

1. **Add `class="active"` to the current page's nav link** - Only one link should have the active class
2. **Use correct relative paths** - Root pages don't need `../`, subdirectory pages do
3. **Include the nav.js script** - Add `<script src="js/nav.js" defer></script>` (or `../js/nav.js` for subdirectories)
4. **Keep nav labels consistent** - Use exactly these labels:
   - Home
   - Welcome Bonus
   - Daily Promos
   - VIP Rewards
   - Claim Bonus
   - Lucky 88

## Mobile Breakpoint

The hamburger menu appears at 900px or less (supports Galaxy Z Fold 5 and similar devices).

## Theme Colors

Use these CSS variables:
- `--p: #1a1408` (primary dark brown)
- `--a: #f4a437` (accent orange)
- `--w: #fff` (white)
- `--bg: #12100a` (background)
- `--t: #c8b89a` (text/muted)
- `--b: #4a3a20` (border)
- `--g: #ffd700` (gold/highlight)

## Standard Footer

```html
<footer class="footer">
  <div class="container">
    <p>© 2025 BK8 Promotions Guide. Independent informational site. Gamble responsibly. 18+</p>
    <p style="margin-top:8px">
      <a href="../index.html">Home</a> | 
      <a href="../promotions/daily.html">Daily Promos</a> | 
      <a href="../promotions/vip.html">VIP Rewards</a>
    </p>
  </div>
</footer>
```
