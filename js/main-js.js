// Create floating money bill animation
function createMoneyBills() {
    const moneyBills = document.getElementById('moneyBills');
    const numberOfBills = 15;

    for (let i = 0; i < numberOfBills; i++) {
        const bill = document.createElement('div');
        bill.className = 'money-bill';
        bill.style.cssText = `
            position: absolute;
            width: 40px;
            height: 20px;
            background: #85bb65;
            opacity: 0.1;
            border-radius: 2px;
            left: ${Math.random() * 100}%;
            top: -20px;
            animation: floatBill ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        moneyBills.appendChild(bill);
    }
}

// Add floating animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatBill {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.1;
        }
        90% {
            opacity: 0.1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createMoneyBills();
});

// Smooth scroll for navigation links
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
