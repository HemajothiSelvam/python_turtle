// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
if (menuToggle && siteNav) {
	menuToggle.addEventListener('click', () => {
		const isOpen = siteNav.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
	});
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
	yearSpan.textContent = String(new Date().getFullYear());
}

// Simple contact form handling
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (form) {
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(form));
		// Fake send to illustrate UX
		formStatus.textContent = 'Sending…';
		try {
			await new Promise((res) => setTimeout(res, 900));
			formStatus.textContent = 'Thanks! We will reach out shortly.';
			form.reset();
		} catch (err) {
			formStatus.textContent = 'Something went wrong. Please try again.';
		}
	});
}

