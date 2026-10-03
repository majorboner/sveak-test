import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

// Количество карточек
const TOTAL_CARDS = 11;
// Количество кнопок в меню
const TOTAL_MENU_BUTTONS = 24;

const FISH_TEXT = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  'Lorem ipsum.',
];

const CARDS_CONTENT = Array.from({ length: TOTAL_CARDS }, (_, i) => ({
  title: i % 3 === 1
    ? 'Loremipsumdolorsitamet'
    : `Lorem ipsum ${i + 1}`,
  text: FISH_TEXT[i % FISH_TEXT.length],
}));

const MENU_CONTENT = Array.from({ length: TOTAL_MENU_BUTTONS }, (_, i) => ({
  label: i % 5 === 4 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' : `Lorem ipsum ${i + 1}`,
  active: i === 0,
}));

export default defineConfig({
  base: '/sveak-test/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [handlebars({ context: { cards: CARDS_CONTENT, menu: MENU_CONTENT } })],
});
