import Alpine from 'alpinejs';
import { Swiper } from 'swiper/bundle';
import 'swiper/css/bundle';
import './styles/main.css';

// Initialize Alpine.js
window.Alpine = Alpine;

// Premium Theme Components
Alpine.data('navigation', () => ({
  open: false,
  toggle() {
    this.open = !this.open;
  },
  close() {
    this.open = false;
  }
}));

Alpine.data('productGallery', () => ({
  activeImage: 0,
  images: [],
  init() {
    // Initialize product image gallery
    this.images = Array.from(this.$el.querySelectorAll('[data-gallery-image]'));
  },
  setActiveImage(index) {
    this.activeImage = index;
  }
}));

Alpine.data('cart', () => ({
  isOpen: false,
  items: [],
  count: 0,
  total: 0,
  
  toggle() {
    this.isOpen = !this.isOpen;
  },
  
  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.updateCart();
  },
  
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.updateCart();
  },
  
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        this.removeItem(productId);
      }
    }
    this.updateCart();
  },
  
  updateCart() {
    this.count = this.items.reduce((sum, item) => sum + item.quantity, 0);
    this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}));

Alpine.data('search', () => ({
  query: '',
  results: [],
  isOpen: false,
  
  search() {
    if (this.query.length > 2) {
      // Implement search functionality
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  },
  
  close() {
    this.isOpen = false;
    this.query = '';
  }
}));

// Initialize Premium Features
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper for product carousels
  const productSwipers = document.querySelectorAll('.product-swiper');
  productSwipers.forEach(swiper => {
    new Swiper(swiper, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  });
  
  // Initialize hero banner swiper
  const heroSwiper = document.querySelector('.hero-swiper');
  if (heroSwiper) {
    new Swiper(heroSwiper, {
      slidesPerView: 1,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with animation class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
  
  // Lazy loading for images
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('opacity-0');
          img.classList.add('opacity-100');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
});

// Start Alpine
Alpine.start();

// Export for Shopify theme compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Alpine, Swiper };
}