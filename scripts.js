const btns = document.querySelectorAll('.btns-projects button[data-video]');
const video = document.getElementById('project-video');
const videoSrc = document.getElementById('project-video-src');
const videoMap = {
    lavagem: './src/assets/video/lavagem.mp4',
    polimento: './src/assets/video/polimento.mp4',
    higienizacao: './src/assets/video/higienizacao.mp4',
    limpeza: './src/assets/video/limpeza.mp4'
};

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.video;
        if (!videoMap[key]) return;
        videoSrc.src = videoMap[key];
        video.load();
        video.play();
        video.classList.add('ativo');
    });
});