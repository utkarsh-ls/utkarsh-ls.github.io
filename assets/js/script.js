// ====================== Particle Background ======================
function initParticles() {
    const canvas = document.getElementById('particle-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ====================== Sunrays Background =======================
function initRays() {
    const canvas = document.getElementById('rays-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const centerX = width / 2;
    const centerY = height / 2;
    const rayCount = 40; // Number of rays
    const rayLength = Math.max(width, height) * 1.5; // Extend beyond screen
    let rotation = 0; // Initial rotation

    function drawRays() {
        ctx.clearRect(0, 0, width, height);

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);

        for (let i = 0; i < rayCount; i++) {
            const angle = (Math.PI * 2 / rayCount) * i;
            ctx.save();
            ctx.rotate(angle);

            // Create gradient for glow
            const gradient = ctx.createLinearGradient(0, 0, rayLength, 0);
            gradient.addColorStop(0, 'rgba(102,126,234,0.25)'); // start glow
            gradient.addColorStop(0.8, 'rgba(102,126,234,0.05)'); // fade out
            gradient.addColorStop(1, 'rgba(0,0,0,0)'); // invisible at end

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.shadowColor = 'rgba(102,126,234,0.5)';
            ctx.shadowBlur = 20;

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(rayLength, 0);
            ctx.stroke();

            ctx.restore();
        }

        ctx.restore();

        // Update rotation for slow spinning
        rotation += 0.001; // Adjust for speed (smaller = slower)

        requestAnimationFrame(drawRays);
    }

    drawRays();

    // Handle window resize
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

// ====================== Typing Animation for Roles ======================
function initTypingAnimation() {
    const roles = [
        'Machine Learning Engineer',
        'Software Engineer',
        'Backend Developer',
        'Applied AI Engineer'
    ];
    const typedElement = document.getElementById('typed-role');
    if (!typedElement) return;

    let currentRole = 0;
    let typedText = '';

    function type() {
        const currentRoleText = roles[currentRole];
        if (typedText.length < currentRoleText.length) {
            typedText = currentRoleText.slice(0, typedText.length + 1);
            typedElement.textContent = typedText;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                typedText = '';
                currentRole = (currentRole + 1) % roles.length;
                type();
            }, 2000);
        }
    }

    type();
}

// ====================== Initialize ======================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    // initRays();
    initTypingAnimation();
    
    // Load the proper profile image or alt-text
    const img = document.getElementById("profile-img");
    const fallback = img.nextElementSibling;

    function showFallback() {
        img.style.display = "none";
        fallback.style.display = "flex";
    }

    function hideFallback() {
        img.style.display = "block";
        fallback.style.display = "none";
    }

    img.addEventListener("load", hideFallback);
    img.addEventListener("error", showFallback);

    // Initial check (handles cached image or broken link)
    if (img.complete && img.naturalWidth !== 0) {
        hideFallback();
    } else {
        showFallback();
    }
});
