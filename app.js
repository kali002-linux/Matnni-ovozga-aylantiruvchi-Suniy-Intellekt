document.getElementById('speak-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    if (text !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    } else {
        alert("Iltimos, matn kiriting.");
    }
});
