export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* Temporary skin variables that need to be moved into origins */
:root {
  /* Icon Button*/

  /* Button */

  /* Shell */

  /* haha remove this */

  /* Custom selection color for placeholders using global blue-500 at 30% opacity. Should be updated in Spectrum-DNA */
}
.spectrum--darkest .spectrum-Accordion-item {
  border-color: rgb(45, 45, 45);
}
.spectrum--darkest .spectrum-Accordion-itemIndicator {
  color: rgb(105, 105, 105);
}
.spectrum--darkest .spectrum-Accordion-itemHeader {
  color: rgb(135, 135, 135);
}
.spectrum--darkest .spectrum-Accordion-itemHeader:focus,
  .spectrum--darkest .spectrum-Accordion-itemHeader:hover {
    color: rgb(226, 226, 226);

    background-color: rgb(38, 38, 38);
  }
.spectrum--darkest .spectrum-Accordion-itemHeader:focus + .spectrum-Accordion-itemIndicator, .spectrum--darkest .spectrum-Accordion-itemHeader:hover + .spectrum-Accordion-itemIndicator {
      color: rgb(180, 180, 180);
    }
.spectrum--darkest .spectrum-Accordion-itemHeader.focus-ring:after  {
      background-color: rgb(20, 115, 230);
    }
.spectrum--darkest .spectrum-Accordion-item.is-open .spectrum-Accordion-itemHeader:hover {
        background-color: transparent;
      }
.spectrum--darkest .spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader,
    .spectrum--darkest .spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader:hover,
    .spectrum--darkest .spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader:focus {
      color: rgb(73, 73, 73);
      background-color: transparent;
    }
.spectrum--darkest .spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader + .spectrum-Accordion-itemIndicator {
      color: rgb(60, 60, 60);
    }`;
    }
}