// =============================================
// CLEANSOLUCE - JAVASCRIPT PRINCIPAL
// =============================================

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== NAVIGATION MOBILE ==========
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu mobile
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // ========== HEADER SCROLL EFFECT ==========
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Ajouter/enlever la classe scrolled pour le style
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Masquer/afficher le header au scroll (mobile friendly)
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
    
    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== ANIMATIONS AU SCROLL ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les éléments avec les classes d'animation
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
    
    // ========== GESTION DES FORMULAIRES ==========
    // Sera implémenté plus tard avec les formulaires
    
    // ========== UTILITIES ==========
    
    // Fonction pour formater les numéros de téléphone
    function formatPhoneNumber(phoneNumber) {
        const cleaned = phoneNumber.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
        if (match) {
            return match[1] + ' ' + match[2] + ' ' + match[3] + ' ' + match[4] + ' ' + match[5];
        }
        return phoneNumber;
    }
    
    // Fonction pour valider l'email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // ========== PERFORMANCE ==========
    
    // Lazy loading pour les images (sera utilisé plus tard)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        // Observer toutes les images avec data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========== INIT ==========
    console.log('CleanSoluce - Site chargé avec succès');
    
    // ========== FIX VIDÉO MOBILE ==========
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        // Détection iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        
        if (isIOS) {
            // Sur iOS, utiliser une image GIF ou désactiver la vidéo
            console.log('iOS détecté - Problème de vidéo connu');
            
            // Option 1: Remplacer par l'image poster
            // heroVideo.style.display = 'none';
            
            // Option 2: Essayer de forcer la lecture courte
            let restartCount = 0;
            heroVideo.addEventListener('pause', function() {
                if (restartCount < 100) {
                    restartCount++;
                    setTimeout(() => {
                        heroVideo.currentTime = 0;
                        heroVideo.play();
                    }, 100);
                }
            });
            
            // Démarrer
            heroVideo.play();
            
        } else {
            // Autres navigateurs
            heroVideo.loop = true;
            heroVideo.play().catch(e => console.log('Autoplay bloqué'));
        }
        
        // Gestion du touchstart pour tous les navigateurs
        document.addEventListener('touchstart', function() {
            if (heroVideo.paused) {
                heroVideo.play().catch(e => console.log('Erreur play vidéo:', e));
            }
        }, { once: true });
        
        // Vérifier périodiquement si la vidéo s'est arrêtée
        setInterval(function() {
            if (heroVideo.paused && heroVideo.currentTime > 0) {
                heroVideo.play().catch(e => console.log('Erreur autoplay vidéo:', e));
            }
        }, 1000);
    }
});

// ========== FONCTION TOGGLE DETAILS ==========
function toggleDetails(button) {
    const detailsContent = button.nextElementSibling;
    const isOpen = detailsContent.classList.contains('show');
    
    // Toggle l'état
    if (isOpen) {
        detailsContent.classList.remove('show');
        button.classList.remove('active');
        button.querySelector('span').textContent = 'Voir plus de détails';
    } else {
        detailsContent.classList.add('show');
        button.classList.add('active');
        button.querySelector('span').textContent = 'Voir moins de détails';
    }
}

// ========== BEFORE/AFTER SLIDER ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Initialisation du slider avant/après');
    const containers = document.querySelectorAll('.before-after-wrapper');
    console.log(`📊 Nombre de sliders trouvés: ${containers.length}`);
    
    containers.forEach((container, index) => {
        const slider = container.querySelector('.slider-handle');
        const imageAfter = container.querySelector('.image-after');
        const imageBefore = container.querySelector('.image-before');
        
        console.log(`🔧 Configuration du slider ${index + 1}`);
        console.log('- Container:', container);
        console.log('- Slider handle:', slider);
        console.log('- Image After:', imageAfter);
        console.log('- Image Before:', imageBefore);
        
        if (!slider || !imageAfter) {
            console.error('❌ Éléments manquants pour le slider');
            return;
        }
        
        // Vérifier les styles initiaux
        console.log('📐 Styles initiaux:');
        console.log('- Container dimensions:', container.offsetWidth, 'x', container.offsetHeight);
        console.log('- Container transform:', window.getComputedStyle(container).transform);
        console.log('- Image Before transform:', window.getComputedStyle(imageBefore).transform);
        console.log('- Image After transform:', window.getComputedStyle(imageAfter.querySelector('img')).transform);
        
        let isActive = false;
        
        function move(x) {
            console.log('🎮 Move appelé avec x =', x);
            
            const rect = container.getBoundingClientRect();
            console.log('📏 Container rect:', rect);
            
            let pos = ((x - rect.left) / rect.width) * 100;
            pos = Math.max(0, Math.min(100, pos));
            
            console.log(`📍 Position calculée: ${pos.toFixed(2)}%`);
            
            // Avant de modifier
            console.log('🔍 AVANT modification:');
            console.log('- Container transform:', window.getComputedStyle(container).transform);
            console.log('- Container dimensions:', container.offsetWidth, 'x', container.offsetHeight);
            console.log('- Image After width:', window.getComputedStyle(imageAfter).width);
            
            slider.style.left = pos + '%';
            imageAfter.style.clipPath = `inset(0 0 0 ${pos}%)`;
            imageAfter.style.webkitClipPath = `inset(0 0 0 ${pos}%)`; // Support Safari iOS
            
            // Après modification
            console.log('🔍 APRÈS modification:');
            console.log('- Container transform:', window.getComputedStyle(container).transform);
            console.log('- Container dimensions:', container.offsetWidth, 'x', container.offsetHeight);
            console.log('- Image After width:', window.getComputedStyle(imageAfter).width);
            console.log('- Y a-t-il un changement de taille?', container.offsetWidth, container.offsetHeight);
            console.log('---');
        }
        
        // PC - Souris
        slider.addEventListener('mousedown', function(e) {
            console.log('🖱️ Mousedown sur slider');
            isActive = true;
            e.preventDefault();
            e.stopPropagation();
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isActive) return;
            move(e.clientX);
        });
        
        document.addEventListener('mouseup', function() {
            if (isActive) {
                console.log('🖱️ Mouseup - fin du drag');
                isActive = false;
            }
        });
        
        // Mobile - Touch
        slider.addEventListener('touchstart', function(e) {
            console.log('👆 Touchstart sur slider');
            isActive = true;
            e.preventDefault();
        });
        
        container.addEventListener('touchmove', function(e) {
            if (!isActive) return;
            e.preventDefault();
            const touch = e.touches[0];
            move(touch.clientX);
        });
        
        container.addEventListener('touchend', function() {
            if (isActive) {
                console.log('👆 Touchend - fin du drag');
                isActive = false;
            }
        });
        
        // Clic direct sur le container
        container.addEventListener('click', function(e) {
            console.log('🖱️ Click direct sur container');
            move(e.clientX);
        });
    });
});

// ========== FAQ FUNCTIONS ==========
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.classList.contains('show');
    
    // Toggle current FAQ
    if (isOpen) {
        answer.classList.remove('show');
        element.classList.remove('active');
    } else {
        // Close all other FAQs
        document.querySelectorAll('.faq-answer.show').forEach(item => {
            item.classList.remove('show');
        });
        document.querySelectorAll('.faq-question.active').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked FAQ
        answer.classList.add('show');
        element.classList.add('active');
    }
}

// FAQ Category Filter
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.faq-category');
    const faqItems = document.querySelectorAll('.faq-item');
    const searchInput = document.getElementById('faqSearch');
    const noResults = document.querySelector('.faq-no-results');
    
    // Category filter
    categories.forEach(category => {
        category.addEventListener('click', function() {
            // Update active category
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.dataset.category;
            
            // Filter FAQ items
            faqItems.forEach(item => {
                if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Check if any items are visible
            checkNoResults();
        });
    });
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let hasResults = false;
            
            faqItems.forEach(item => {
                const question = item.querySelector('h3').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide no results message
            if (noResults) {
                noResults.style.display = hasResults ? 'none' : 'block';
            }
        });
    }
    
    // Check if no results
    function checkNoResults() {
        const visibleItems = Array.from(faqItems).filter(item => 
            item.style.display !== 'none'
        );
        
        if (noResults) {
            noResults.style.display = visibleItems.length === 0 ? 'block' : 'none';
        }
    }
});

// ========== RESERVATION FORM ==========
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    if (!form) return;
    
    const steps = form.querySelectorAll('.form-step');
    const nextBtn = form.querySelector('.btn-next');
    const prevBtn = form.querySelector('.btn-prev');
    const submitBtn = form.querySelector('.btn-submit');
    let currentStep = 1;
    
    // Set minimum date to today
    const dateInput = form.querySelector('#date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
    
    // Update summary
    function updateSummary() {
        const formula = form.querySelector('input[name="formula"]:checked');
        const date = form.querySelector('#date').value;
        const time = form.querySelector('input[name="time"]:checked');
        
        const summaryFormula = document.querySelector('.summary-formula span');
        const summaryDate = document.querySelector('.summary-date span');
        const summaryTime = document.querySelector('.summary-time span');
        const summaryPrice = document.querySelector('.summary-price span');
        
        if (formula) {
            const formulaName = formula.parentElement.querySelector('h4').textContent;
            const price = formula.dataset.price;
            summaryFormula.textContent = formulaName;
            summaryPrice.textContent = price + '€';
        }
        
        if (date) {
            const dateObj = new Date(date);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            summaryDate.textContent = dateObj.toLocaleDateString('fr-FR', options);
        }
        
        if (time) {
            summaryTime.textContent = time.value;
        }
    }
    
    // Listen for changes
    form.addEventListener('change', updateSummary);
    
    // Navigation
    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle('active', index + 1 === step);
        });
        
        // Update buttons
        prevBtn.style.display = step === 1 ? 'none' : 'block';
        nextBtn.style.display = step === 3 ? 'none' : 'block';
        submitBtn.style.display = step === 3 ? 'block' : 'none';
        
        // Scroll to top of form
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Validate current step
    function validateStep() {
        const activeStep = form.querySelector('.form-step.active');
        const requiredFields = activeStep.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value && field.type !== 'radio') {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        // Check radio buttons
        const radioGroups = activeStep.querySelectorAll('input[type="radio"][required]');
        const checkedRadios = activeStep.querySelectorAll('input[type="radio"]:checked');
        
        if (currentStep === 1 && !form.querySelector('input[name="formula"]:checked')) {
            isValid = false;
            alert('Veuillez choisir une formule');
        }
        
        if (currentStep === 2 && !form.querySelector('input[name="time"]:checked')) {
            isValid = false;
            alert('Veuillez choisir un créneau horaire');
        }
        
        return isValid;
    }
    
    // Next button
    nextBtn.addEventListener('click', function() {
        if (validateStep()) {
            currentStep++;
            showStep(currentStep);
        }
    });
    
    // Previous button
    prevBtn.addEventListener('click', function() {
        currentStep--;
        showStep(currentStep);
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateStep()) return;
        
        // Here you would normally send the data to a server
        // For now, we'll just show the success message
        
        const formData = new FormData(form);
        console.log('Réservation:', Object.fromEntries(formData));
        
        // Show success message
        form.style.display = 'none';
        document.querySelector('.reservation-success').style.display = 'block';
        
        // Reset form after 5 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            document.querySelector('.reservation-success').style.display = 'none';
            currentStep = 1;
            showStep(currentStep);
        }, 5000);
    });
});

// ========== TESTIMONIALS STATS ANIMATION ==========
document.addEventListener('DOMContentLoaded', function() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                
                statNumbers.forEach(stat => {
                    const target = parseFloat(stat.getAttribute('data-count'));
                    const isDecimal = target % 1 !== 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateNumber = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
                            requestAnimationFrame(updateNumber);
                        } else {
                            stat.textContent = isDecimal ? target.toFixed(1) : target;
                        }
                    };
                    
                    updateNumber();
                });
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.testimonials-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// ========== STYLES DYNAMIQUES POUR LE HEADER ==========
const style = document.createElement('style');
style.textContent = `
    .header.scrolled {
        background-color: rgba(255, 255, 255, 0.98);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .header.hidden {
        transform: translateY(-100%);
    }
    
    body.menu-open {
        overflow: hidden;
    }
    
    @media (max-width: 768px) {
        body.menu-open::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
    }
`;
document.head.appendChild(style);