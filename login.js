const API_URL = "https://localhost:7094/api";

document.getElementById('login-form').addEventListener('submit', async function (e) {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('sifre').value;

    try {
        // İŞTE BURAYI DEĞİŞTİRDİK: Aradaki /api kısmını atlayıp direkt adresi verdik
        const response = await fetch('https://localhost:7094/login', {
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