export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Accordion-itemIndicator {
  left: 16px;
  top: 14.5px;

  transition: transform ease 130ms;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Accordion-item {

  border-bottom: 1px solid transparent;
}
.spectrum--large .spectrum-Accordion-item:first-of-type {
    border-top: 1px solid transparent;
  }
.spectrum--large .spectrum-Accordion-itemHeader {
  padding: 0 16px 0 34px;

  height: 39px;

  font-size: 13px;
  line-height: 39px;
  letter-spacing: 0.0006em;
}
.spectrum--large .spectrum-Accordion-itemHeader:focus::after {
      top: -1px;
      bottom: -1px;

      width: 2px;
    }
.spectrum--large .spectrum-Accordion-itemContent {
  padding: 0 20px 20px 20px;
}
.spectrum--large .spectrum-Accordion-item.is-open > .spectrum-Accordion-itemHeader::after {
      height: 39px;
    }`;
    }
}