const API_URL = "https://GorevYonetim-Backend-API.somee.com";

document.getElementById('login-form').addEventListener('submit', async function (e) {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('sifre').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken);
            window.location.href = "index.html";
        } else {
            alert("Giriş başarısız! E-posta veya şifre hatalı.");
        }

    } catch (error) {
        console.error("Bağlantı Hatası:", error);
        alert("Sunucuya ulaşılamadı!");
    }
});