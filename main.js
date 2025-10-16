import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css';
import '@catppuccin/highlightjs/css/catppuccin-latte.css'
import './styles.css'
import './transitions.css'
import './layout.css'

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
  //
  width: 1920,
  height: 1080,
  margin: 0.04,
  // view: 'scroll',
  // scrollProgress: true,
  // transition: 'fade',
  pdfSeparateFragments: false
});
