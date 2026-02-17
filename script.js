const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const btn = document.getElementById('btn');
const cancel = document.getElementById('cancel');
const sidebar = document.getElementById('sidebar');
const darkSidebarOverlay = document.getElementById('darkSidebarOverlay');
const links = sidebar.querySelectorAll('a');

function closeSidebar() {
    sidebar.classList.remove('active');
    btn.style.display = 'block';
    cancel.style.display = 'none';
    document.body.style.overflow = '';
    darkSidebarOverlay.style.display = 'none';
}

btn.addEventListener('click', () => {
    sidebar.classList.add('active');
    btn.style.display = 'none';
    cancel.style.display = 'block';
    darkSidebarOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

cancel.addEventListener('click', closeSidebar);
darkSidebarOverlay.addEventListener('click', closeSidebar);

links.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
