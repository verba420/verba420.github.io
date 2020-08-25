window.addEventListener('DOMContentLoaded', () => {
    const spis_head = document.querySelector('.spis_head'),
    el_nav = document.querySelectorAll('.el_nav'),
    humburger = document.querySelector('.humburger');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        spis_head.classList.toggle('spis_head_active');
    });

    el_nav.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('humburger_active');
            spis_head.classList.toggle('spis_head_active');
        })
    })
})