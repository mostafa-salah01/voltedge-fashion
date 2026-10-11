/**
 * VoltEdge Fashion Store - Main Vanilla JavaScript
 * متجر فولت إدج للأزياء - المحرك البرمجي الأساسي
 */

import { STORE_SETTINGS, STORE_FEATURES, PRODUCTS, CATEGORIES, TESTIMONIALS, I18N } from './data.js';

// ==========================================================================
// 1. Language & I18N Controller
// ==========================================================================

export function getCurrentLang() {
  try {
    const saved = localStorage.getItem('voltedge_lang');
    if (saved === 'en' || saved === 'ar') return saved;
  } catch (e) {
    console.warn('localStorage not accessible for lang preference:', e);
  }
  return 'ar'; // Default Arabic
}

export function setLanguage(lang) {
  try {
    localStorage.setItem('voltedge_lang', lang);
  } catch (e) {
    console.warn('localStorage set failed:', e);
  }
  
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Update all data-i18n elements
  updatePageTranslations(lang);
  
  // Re-render Header and Footer to update menu labels & button texts
  renderHeader();
  renderFooter();
  
  // Dispatch custom event for page-specific re-renders
  window.dispatchEvent(new CustomEvent('voltedge:langchange', { detail: { lang } }));
}

export function t(key, lang = getCurrentLang()) {
  const dict = I18N[lang] || I18N.ar;
  return dict[key] || I18N.ar[key] || key;
}

export function updatePageTranslations(lang = getCurrentLang()) {
  const dict = I18N[lang] || I18N.ar;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
  
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key]) {
      el.setAttribute('aria-label', dict[key]);
    }
  });
}

// ==========================================================================
// 2. WhatsApp URL Generator (Egyptian Market Compliant)
// ==========================================================================

export function buildWhatsAppLink({ product, color, size, general = false } = {}) {
  const lang = getCurrentLang();
  let text = '';
  
  if (general || !product) {
    text = t('wa_msg_general', lang);
  } else {
    const template = t('wa_msg_template', lang);
    const prodName = lang === 'en' ? product.name_en : product.name_ar;
    const colorName = color ? (lang === 'en' ? color.name_en : color.name_ar) : (lang === 'en' ? 'Standard' : 'الافتراضي');
    const sizeName = size || (lang === 'en' ? 'Standard' : 'قياسي');
    const priceFormatted = Number(product.price).toLocaleString();
    
    text = template
      .replace('{productName}', prodName)
      .replace('{color}', colorName)
      .replace('{size}', sizeName)
      .replace('{price}', priceFormatted);
  }
  
  return `https://wa.me/${STORE_SETTINGS.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ==========================================================================
// 3. Navigation & Header/Footer Rendering
// ==========================================================================

export function getActivePage() {
  const pathname = window.location.pathname;
  const filename = pathname.split('/').pop() || 'index.html';
  if (filename === '' || filename === '/') return 'index.html';
  return filename;
}

export function renderHeader() {
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;
  
  const lang = getCurrentLang();
  const activePage = getActivePage();
  const nextLang = lang === 'ar' ? 'en' : 'ar';
  const langButtonLabel = lang === 'ar' ? 'EN' : 'عربي';
  const langAria = t('nav_lang_toggle_aria', lang);
  
  const navItems = [
    { href: './index.html', key: 'nav_home', id: 'index.html' },
    { href: './men.html', key: 'nav_men', id: 'men.html' },
    { href: './women.html', key: 'nav_women', id: 'women.html' },
    { href: './accessories.html', key: 'nav_accessories', id: 'accessories.html' },
    { href: './exclusive.html', key: 'nav_exclusive', id: 'exclusive.html' },
    { href: './about.html', key: 'nav_about', id: 'about.html' },
    { href: './contact.html', key: 'nav_contact', id: 'contact.html' }
  ];
  
  const navLinksHTML = navItems.map(item => {
    const isActive = activePage === item.id ? 'active' : '';
    return `<li><a href="${item.href}" class="nav-link ${isActive}" data-page="${item.id}">${t(item.key, lang)}</a></li>`;
  }).join('');
  
  const mobileLinksHTML = navItems.map(item => {
    const isActive = activePage === item.id ? 'active' : '';
    return `<li><a href="${item.href}" class="mobile-nav-link ${isActive}" data-page="${item.id}">${t(item.key, lang)}</a></li>`;
  }).join('');
  
  headerContainer.innerHTML = `
    <!-- Top Announcement Bar (Desktop) -->
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-item top-bar-shipping">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
          <span>${t('top_bar_shipping', lang)}</span>
        </div>
        <div class="top-bar-item top-bar-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>${t('top_bar_phone', lang)}</span>
          <a href="https://wa.me/${STORE_SETTINGS.WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer">${STORE_SETTINGS.PHONE_DISPLAY}</a>
        </div>
      </div>
    </div>
    
    <!-- Main Header -->
    <header class="site-header" id="main-header-element">
      <div class="container header-container">
        <!-- Brand Logo -->
        <a href="./index.html" class="brand-logo" aria-label="VoltEdge Fashion Home">
          <img src="${STORE_SETTINGS.LOGO_IMG}" alt="VoltEdge Logo" class="brand-icon" width="36" height="36" />
          <span class="brand-name">VoltEdge</span>
        </a>
        
        <!-- Desktop Nav -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="desktop-nav">
            ${navLinksHTML}
          </ul>
        </nav>
        
        <!-- Actions (Language switch & Mobile Menu) -->
        <div class="header-actions">
          <button type="button" class="btn-lang" id="btn-lang-toggle" aria-label="${langAria}">
            ${langButtonLabel}
          </button>
          
          <button type="button" class="btn-menu-toggle" id="btn-mobile-menu" aria-label="${t('nav_menu_toggle_aria', lang)}" aria-expanded="false" aria-controls="mobile-drawer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Drawer -->
      <div class="mobile-nav-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <ul class="mobile-nav-list">
          ${mobileLinksHTML}
        </ul>
      </div>
    </header>
  `;
  
  // Bind Language Switcher
  const langBtn = document.getElementById('btn-lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(nextLang);
    });
  }
  
  // Bind Mobile Menu
  const menuBtn = document.getElementById('btn-mobile-menu');
  const drawer = document.getElementById('mobile-drawer');
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }
  
  // Scroll Shadow Effect
  const headerElem = document.getElementById('main-header-element');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerElem?.classList.add('is-scrolled');
    } else {
      headerElem?.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

export function renderFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;
  
  const lang = getCurrentLang();
  const demoNoticeText = STORE_SETTINGS.DEMO_NOTICE[lang] || STORE_SETTINGS.DEMO_NOTICE.ar;
  
  footerContainer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand Info -->
          <div>
            <div class="footer-brand-title">VoltEdge</div>
            <p class="footer-desc">${t('footer_about', lang)}</p>
            <div style="margin-block-start: 1rem;">
              <a href="https://wa.me/${STORE_SETTINGS.WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; min-height: 40px; display: inline-flex;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span>${t('cta_btn', lang)}</span>
              </a>
            </div>
          </div>
          
          <!-- Col 2: Collections -->
          <div>
            <h3 class="footer-col-title">${t('footer_collections', lang)}</h3>
            <ul class="footer-links-list">
              <li><a href="./men.html" class="footer-link">${t('nav_men', lang)}</a></li>
              <li><a href="./women.html" class="footer-link">${t('nav_women', lang)}</a></li>
              <li><a href="./accessories.html" class="footer-link">${t('nav_accessories', lang)}</a></li>
              <li><a href="./exclusive.html" class="footer-link">${t('nav_exclusive', lang)}</a></li>
            </ul>
          </div>
          
          <!-- Col 3: Quick Navigation -->
          <div>
            <h3 class="footer-col-title">${t('footer_quick_links', lang)}</h3>
            <ul class="footer-links-list">
              <li><a href="./index.html" class="footer-link">${t('nav_home', lang)}</a></li>
              <li><a href="./about.html" class="footer-link">${t('nav_about', lang)}</a></li>
              <li><a href="./contact.html" class="footer-link">${t('nav_contact', lang)}</a></li>
              <li><a href="https://wa.me/${STORE_SETTINGS.WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer" class="footer-link">${t('order_via_whatsapp', lang)}</a></li>
            </ul>
          </div>
          
          <!-- Col 4: Contact & Coverage -->
          <div>
            <h3 class="footer-col-title">${t('footer_service', lang)}</h3>
            <div class="footer-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${lang === 'ar' ? STORE_SETTINGS.LOCATION_AR : STORE_SETTINGS.LOCATION_EN}</span>
            </div>
            <div class="footer-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${lang === 'ar' ? STORE_SETTINGS.WORKING_HOURS_AR : STORE_SETTINGS.WORKING_HOURS_EN}</span>
            </div>
            <div class="footer-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="https://wa.me/${STORE_SETTINGS.WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer">${STORE_SETTINGS.PHONE_DISPLAY}</a>
            </div>
            <p style="font-size: 0.85rem; color: var(--color-beige); margin-block-start: 0.75rem; line-height: 1.45;">
              ${t('footer_payment_notice', lang)}
            </p>
          </div>
        </div>
        
        <div class="footer-bottom-bar">
          <div>${t('footer_copyright', lang)}</div>
          <div>${STORE_SETTINGS.TAGLINE_AR}</div>
        </div>
      </div>
      
      <!-- Demo Notice Strip -->
      <div class="demo-notice-strip">
        <p>${demoNoticeText}</p>
      </div>
    </footer>
  `;
}

// ==========================================================================
// 4. Hero Video Optimization & Fallback
// ==========================================================================

export function initHeroVideo() {
  const videoElem = document.getElementById('hero-bg-video');
  const fallbackImg = document.getElementById('hero-fallback-image');
  if (!videoElem) return;
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDataSaver = Boolean(navigator.connection?.saveData);
  
  if (prefersReducedMotion || isDataSaver) {
    videoElem.remove();
    if (fallbackImg) fallbackImg.style.display = 'block';
    return;
  }
  
  videoElem.addEventListener('error', () => {
    console.warn('Hero video load failed, switching to static fallback image.');
    videoElem.remove();
    if (fallbackImg) fallbackImg.style.display = 'block';
  });
  
  // Play safely
  const playPromise = videoElem.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.warn('Hero video autoplay thwarted by browser policy:', err);
    });
  }
}

// ==========================================================================
// 5. Product Card Renderer & Color Swatches
// ==========================================================================

export function renderProductCard(product, lang = getCurrentLang()) {
  const title = lang === 'en' ? product.name_en : product.name_ar;
  const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;
  const initialImage = defaultColor ? defaultColor.image : STORE_SETTINGS.DEFAULT_FALLBACK_IMAGE;
  const priceFormatted = Number(product.price).toLocaleString();
  const currency = t('price_egp', lang);
  const detailLink = `./product.html?id=${product.id}`;
  
  // Badges
  let badgeHTML = '';
  if (product.tags.includes('exclusive')) {
    badgeHTML = `<span class="product-badge badge-exclusive">${t('exclusive_badge', lang)}</span>`;
  } else if (product.tags.includes('bestseller')) {
    badgeHTML = `<span class="product-badge">${t('bestseller_badge', lang)}</span>`;
  }
  
  // Colors swatches
  let colorsHTML = '';
  if (product.colors && product.colors.length > 0) {
    colorsHTML = `<div class="product-colors" role="radiogroup" aria-label="${t('color_label', lang)}">`;
    product.colors.forEach((col, idx) => {
      const isSelected = idx === 0 ? 'active' : '';
      const colName = lang === 'en' ? col.name_en : col.name_ar;
      colorsHTML += `
        <button type="button" 
          class="color-circle ${isSelected}" 
          style="background-color: ${col.hex};" 
          data-product-id="${product.id}" 
          data-color-id="${col.id}" 
          data-image="${col.image}" 
          data-color-name="${colName}" 
          aria-label="${colName}" 
          title="${colName}"
          role="radio"
          aria-checked="${idx === 0 ? 'true' : 'false'}">
        </button>
      `;
    });
    colorsHTML += `</div>`;
  } else {
    colorsHTML = `<div class="product-colors" style="visibility: hidden;"></div>`;
  }
  
  // Initial WhatsApp URL
  const initialWaUrl = buildWhatsAppLink({ product, color: defaultColor });
  
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card-img-wrap img-fallback-wrapper">
        <a href="${detailLink}" tabindex="-1" aria-hidden="true">
          <img 
            src="${initialImage}" 
            alt="${title}" 
            class="product-card-img" 
            loading="lazy" 
            id="card-img-${product.id}"
            onerror="this.onerror=null; this.src='${STORE_SETTINGS.HERO_POSTER}';"
          />
        </a>
        ${badgeHTML}
      </div>
      
      <div class="product-card-body">
        <div class="product-rating">
          <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span style="font-weight: 700; color: var(--color-text);">${product.rating.toFixed(1)}</span>
          <span>(${product.reviewCount})</span>
        </div>
        
        <h3 class="product-title">
          <a href="${detailLink}">${title}</a>
        </h3>
        
        <div class="product-price">
          ${priceFormatted} <span class="product-price-currency">${currency}</span>
        </div>
        
        ${colorsHTML}
        
        <a href="${initialWaUrl}" target="_blank" rel="noopener noreferrer" class="btn-order-wa" id="card-wa-btn-${product.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          <span>${t('order_via_whatsapp', lang)}</span>
        </a>
      </div>
    </article>
  `;
}

// Attach interactive listeners to color circles on cards
export function bindProductCardColors() {
  document.querySelectorAll('.product-card').forEach(card => {
    const productId = card.getAttribute('data-product-id');
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const imgElem = card.querySelector(`#card-img-${productId}`);
    const waBtn = card.querySelector(`#card-wa-btn-${productId}`);
    const colorButtons = card.querySelectorAll('.color-circle');
    
    colorButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const colorId = btn.getAttribute('data-color-id');
        const colorObj = product.colors.find(c => c.id === colorId);
        if (!colorObj) return;
        
        // Update active class
        colorButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        
        // Update image seamlessly
        if (imgElem) {
          imgElem.src = colorObj.image;
        }
        
        // Update WhatsApp button link
        if (waBtn) {
          waBtn.href = buildWhatsAppLink({ product, color: colorObj });
        }
      });
    });
  });
}

// ==========================================================================
// 6. Features & Testimonials Renderers
// ==========================================================================

export function renderFeatures(containerId = 'features-container') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const lang = getCurrentLang();
  
  container.innerHTML = STORE_FEATURES.map(feat => `
    <div class="feature-item">
      <div class="feature-icon-wrap" aria-hidden="true">${feat.icon}</div>
      <div>
        <h3 class="feature-title">${lang === 'en' ? feat.title_en : feat.title_ar}</h3>
        <p class="feature-desc">${lang === 'en' ? feat.desc_en : feat.desc_ar}</p>
      </div>
    </div>
  `).join('');
}

export function renderTestimonials(containerId = 'testimonials-container') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const lang = getCurrentLang();
  
  container.innerHTML = TESTIMONIALS.map(rev => `
    <div class="testimonial-card">
      <div class="testimonial-stars" aria-label="${rev.rating} stars">
        ${Array(rev.rating).fill('<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>').join('')}
      </div>
      <p class="testimonial-comment">"${lang === 'en' ? rev.comment_en : rev.comment_ar}"</p>
      <div class="testimonial-author">
        <span class="testimonial-name">${lang === 'en' ? rev.name_en : rev.name_ar}</span>
        <span class="testimonial-city">${lang === 'en' ? rev.city_en : rev.city_ar}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 7. Global Bootstrap on DOM Ready
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLang();
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  
  renderHeader();
  renderFooter();
  updatePageTranslations(currentLang);
  initHeroVideo();
});
