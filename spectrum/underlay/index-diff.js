export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Underlay {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Underlay.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}`;
    }
}