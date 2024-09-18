// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    fetch('https://formsubmit.co/azece45@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Mesajınız başarıyla gönderildi!');
            form.reset();
        } else {
            throw new Error('Sunucu yanıtı başarısız');
        }
    }).catch(error => {
        console.error('Hata:', error);
        alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    });
});