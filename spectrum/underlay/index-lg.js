export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Underlay {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
.spectrum-Underlay.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}
.spectrum-Underlay {

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Float above things by default */
  z-index: 1;

  overflow: hidden;
}`;
    }
}