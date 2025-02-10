
// Add click event listeners to not-available divs
document.addEventListener('DOMContentLoaded', () => {
    const notAvailableDivs = document.querySelectorAll('.not-available');
    
    notAvailableDivs.forEach(div => {
        div.addEventListener('click', () => {
            const comingSoonDiv = div.querySelector('.coming-soon');
            if (comingSoonDiv) {
                comingSoonDiv.classList.add('wiggle');
                
                // Remove the wiggle class after animation completes
                setTimeout(() => {
                    comingSoonDiv.classList.remove('wiggle');
                }, 500); // Adjust timing based on your CSS animation duration
            }
        });
    });


 // Handle link clicks for page transitions
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle links that lead to other pages (not external links)
            if (this.getAttribute('target') !== '_blank' && this.getAttribute('href')) {
                e.preventDefault(); // Prevent immediate navigation

                const destination = this.href;
                document.body.style.opacity = 0;

                // Navigate after the fade effect
                setTimeout(() => {
                    window.location.href = destination;
                }, 100); // Adjust timing based on your preference
            }
        });
    });
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 300ms ease-in-out';
    
    // Fade in the page
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 300);// Small delay to ensure the initial opacity is applied



    // Add a click event listener to the body to handle external link clicks// Lazy loading implementation
    const lazyLoadImages = () => {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Load the actual image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                    }
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            root: null, // viewport
            rootMargin: '50px', // start loading 50px before image enters viewport
            threshold: 0.1 // trigger when even 10% of the image is visible
        });

        // Target all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    };

    // Initialize lazy loading
    lazyLoadImages();
    });


