document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    audio.play().catch(function(error) {
        console.log('Reproducción automática bloqueada:', error);
    });
});
