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
.spectrum-Accordion-item {
  border-color: rgb(225, 225, 225);
}
.spectrum-Accordion-itemIndicator {
  color: rgb(142, 142, 142);
}
.spectrum-Accordion-itemHeader {
  color: rgb(110, 110, 110);
}
.spectrum-Accordion-itemHeader:focus,
  .spectrum-Accordion-itemHeader:hover {
    color: rgb(44, 44, 44);

    background-color: rgb(234, 234, 234);
  }
.spectrum-Accordion-itemHeader:focus + .spectrum-Accordion-itemIndicator, .spectrum-Accordion-itemHeader:hover + .spectrum-Accordion-itemIndicator {
      color: rgb(75, 75, 75);
    }
.spectrum-Accordion-itemHeader.focus-ring:after  {
      background-color: rgb(38, 128, 235);
    }
.spectrum-Accordion-item.is-open .spectrum-Accordion-itemHeader:hover {
        background-color: transparent;
      }
.spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader,
    .spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader:hover,
    .spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader:focus {
      color: rgb(179, 179, 179);
      background-color: transparent;
    }
.spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader + .spectrum-Accordion-itemIndicator {
      color: rgb(202, 202, 202);
    }`;
    }
}