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
.spectrum--light .spectrum-TreeView-itemLink {
  color: rgb(75, 75, 75);
}
.spectrum--light .spectrum-TreeView-itemLink:hover,
  .spectrum--light .spectrum-TreeView-itemLink.is-selected {
    color: rgb(44, 44, 44);
  }
.spectrum--light .spectrum-TreeView-itemLink:hover::before, .spectrum--light .spectrum-TreeView-itemLink.is-selected::before {
      background-color: rgba(44,44,44,0.04);
    }
.spectrum--light .spectrum-TreeView-itemLink.focus-ring {
    color: rgb(44, 44, 44);
  }
.spectrum--light .spectrum-TreeView-itemLink.focus-ring::before {
      background-color: rgba(44,44,44,0.04);

      /* we cannot achieve rounded corners with outline so we use box-shadow instead */
      box-shadow: 0px 0px 0px 2px rgb(38, 128, 235) inset;
    }
.spectrum--light .spectrum-TreeView-itemLink.is-drop-target::before {
      background-color: rgba(20,115,230,0.1);
      box-shadow: 0px 0px 0px 2px rgb(38, 128, 235) inset;
    }`;
    }
}