import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css';
import '@catppuccin/highlightjs/css/catppuccin-latte.css'
import './styles.css'

import Reveal from 'reveal.js';
import RevealMath from 'reveal.js/plugin/math/math.esm';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm';

let deck = new Reveal({
  plugins: [RevealMath.MathJax3, RevealHighlight],
});
deck.initialize({
  slideNumber: 'c',
  showSlideNumber: 'all',
  controls: false,
  progress: false,
  width: 1500,
  height: 843.75,
  // view: 'scroll',
  // scrollProgress: true,
  // transition: 'fade',
  pdfSeparateFragments: false
});
