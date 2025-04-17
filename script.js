// إضافة تأثيرات ظهور عند تحميل الصفحة
window.onload = function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150); // تأخير ظهور كل عنصر
    });
};

// وظيفة لإرسال الاستفسار إلى الذكاء الاصطناعي (مثال بسيط)
function sendToAI() {
    const aiFunction = document.getElementById('aiFunction').value;
    const userInput = document.getElementById('userInput').value;
    const aiResponse = document.getElementById('aiResponse');

    // هنا يمكنك إضافة كود لإرسال الاستفسار إلى خادم الذكاء الاصطناعي
    // واستقبال الرد وعرضه في aiResponse.innerHTML

    // مثال بسيط: عرض استجابة وهمية
    aiResponse.innerHTML = `الذكاء الاصطناعي: ${userInput} (${aiFunction})`;
}

// إضافة تأثيرات تفاعلية عند التمرير على الأقسام
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transition = 'transform 0.3s ease-in-out';
        section.style.transform = 'scale(1.02)';
    });
    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)';
    });
});

// إضافة تأثيرات تفاعلية عند النقر على البطاقات
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transition = 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out';
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        }, 300); // إعادة البطاقة إلى حالتها الأصلية
    });
});

// إضافة تأثيرات تحميل بسيطة عند انتظار الردود من الذكاء الاصطناعي
function sendToAI() {
    const aiFunction = document.getElementById('aiFunction').value;
    const userInput = document.getElementById('userInput').value;
    const aiResponse = document.getElementById('aiResponse');

    aiResponse.innerHTML = '<div class="loading">جارٍ التحميل...</div>'; // عرض مؤشر تحميل

    // هنا يمكنك إضافة كود لإرسال الاستفسار إلى خادم الذكاء الاصطناعي
    // واستقبال الرد وعرضه في aiResponse.innerHTML

    // مثال بسيط: محاكاة تأخير الرد
    setTimeout(() => {
        aiResponse.innerHTML = `الذكاء الاصطناعي: ${userInput} (${aiFunction})`;
    }, 2000); // تأخير 2 ثانية
}