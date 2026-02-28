/* ============================================
   CHARM Corporation - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ---------- Loading Screen ----------
    window.addEventListener('load', function () {
        setTimeout(function () {
            const loader = document.getElementById('loader');
            if (loader) loader.classList.add('hidden');
        }, 1200);
    });

    // ---------- Particles.js ----------
    if (window.particlesJS && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 900 } },
                color: { value: '#4A90A4' },
                shape: { type: 'circle' },
                opacity: { value: 0.25, random: true },
                size: { value: 2.5, random: true },
                line_linked: {
                    enable: true,
                    distance: 160,
                    color: '#7BC9A6',
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: 'none',
                    random: true,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' }
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.4 } },
                    push: { particles_nb: 3 }
                }
            }
        });
    }

    // ---------- Custom Cursor ----------
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (cursor && follower && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        var hoverTargets = document.querySelectorAll('a, button, .badge, .card, .card-glass, .service-card, .btn, [data-hover]');
        hoverTargets.forEach(function (el) {
            el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
            el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
        });
    }

    // ---------- Scroll Progress Bar ----------
    var progressBar = document.getElementById('progressBar');
    if (progressBar) {
        window.addEventListener('scroll', function () {
            var scrollTop = window.pageYOffset;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = percent + '%';
        });
    }

    // ---------- Header Scroll Effect ----------
    var header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ---------- Mobile Menu ----------
    var menuToggle = document.querySelector('.menu-toggle');
    var navMobile = document.querySelector('.nav-mobile');
    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            navMobile.classList.toggle('open');
            document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
        });

        navMobile.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                navMobile.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ---------- Scroll Reveal Animations ----------
    var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (revealElements.length > 0) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px'
        });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    // ---------- Counter Animation ----------
    var counters = document.querySelectorAll('[data-count]');
    if (counters.length > 0) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = 'true';
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (el) {
            counterObserver.observe(el);
        });
    }

    function animateCounter(el) {
        var target = parseInt(el.dataset.count, 10);
        var duration = 2000;
        var start = 0;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);
            el.textContent = current.toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target.toLocaleString();
            }
        }
        requestAnimationFrame(step);
    }

    // ---------- FAQ Accordion ----------
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function () {
                var isActive = item.classList.contains('active');
                // Close all
                faqItems.forEach(function (i) { i.classList.remove('active'); });
                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ---------- Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height-scrolled')) || 70;
                var top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // ---------- Parallax on hero ----------
    var heroSection = document.querySelector('.home-hero, .page-hero');
    if (heroSection && window.innerWidth > 768) {
        window.addEventListener('scroll', function () {
            var scrolled = window.pageYOffset;
            var rate = scrolled * 0.3;
            heroSection.style.backgroundPositionY = rate + 'px';
        });
    }

    // ---------- Active nav link ----------
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

});
