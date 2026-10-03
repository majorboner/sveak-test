import './styles/main.scss';

const root = document.documentElement;
const unlockTransitions = () => root.classList.remove('no-transitions');

window.addEventListener('load', () => requestAnimationFrame(unlockTransitions));

matchMedia('(min-width: 1024px)').addEventListener('change', () => {
    root.classList.add('no-transitions');
    requestAnimationFrame(() => requestAnimationFrame(unlockTransitions));
});