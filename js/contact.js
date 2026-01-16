// ========================
// Contact Form Handler
// ========================

// Initialize EmailJS
(function() {
    emailjs.init({
        publicKey: "vHrtD8pHSz_KfXh1Q",
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('.form-submit');
    const buttonText = submitButton.querySelector('span');
    const originalText = buttonText.textContent;
    
    // Get form data
    const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        subject: form.querySelector('#subject').value,
        message: form.querySelector('#message').value
    };
    
    // Remove any existing messages
    const existingMessage = form.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Update button state
    submitButton.disabled = true;
    buttonText.textContent = 'Envoi en cours...';
    
    try {
        // Simulate API call (replace with your actual endpoint)
        await sendContactEmail(formData);
        
        // Show success message
        showMessage(form, 'success', 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
        
        // Reset form
        form.reset();
        
    } catch (error) {
        // Show error message
        showMessage(form, 'error', 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
        console.error('Form submission error:', error);
        
    } finally {
        // Reset button state
        submitButton.disabled = false;
        buttonText.textContent = originalText;
    }
}

function showMessage(form, type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-${type}`;
    messageDiv.textContent = text;
    form.appendChild(messageDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

async function sendContactEmail(data) {
    // Send email using EmailJS
    const templateParams = {
        subject: data.subject,
        name: data.name,
        email: data.email,
        message: data.message
    };

    try {
        const response = await emailjs.send("service_56fk69r", "template_sn9g6gh", templateParams);
        return response;
    } catch (error) {
        console.error('EmailJS error:', error);
        throw new Error('Failed to send email');
    }
}

// ========================
// Form Validation
// ========================

const inputs = document.querySelectorAll('.form-input, .form-textarea');

inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateInput({ target: input });
        }
    });
});

function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    // Remove existing error
    input.classList.remove('error');
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Validate based on type
    let isValid = true;
    let errorMessage = '';
    
    if (input.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Ce champ est requis';
    } else if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Email invalide';
        }
    }
    
    if (!isValid) {
        input.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.cssText = 'color: rgb(252, 165, 165); font-size: 0.8rem; margin-top: 4px;';
        input.parentElement.appendChild(errorDiv);
    }
    
    return isValid;
}

// ========================
// Smooth Animations
// ========================

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe form and info cards
document.querySelectorAll('.form-container, .info-card, .social-links').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
