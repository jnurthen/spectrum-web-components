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
/* topdoc
{{ sidenav/sidenav-multilevel.yml }}
*/
.spectrum--light .spectrum-SideNav-item.is-selected > .spectrum-SideNav-itemLink {
      color: rgb(44, 44, 44);
      background-color: rgba(44,44,44,0.06);
    }
.spectrum--light .spectrum-SideNav-item .is-active > .spectrum-SideNav-itemLink {
      background-color: rgba(44,44,44,0.06);
    }
/* Disable all children */
.spectrum--light .spectrum-SideNav-item.is-disabled .spectrum-SideNav-itemLink {
      background-color: rgba(0, 0, 0, 0);
      color: rgb(179, 179, 179);

      cursor: default;
      pointer-events: none;
    }
/* topdoc
{{ sidenav/sidenav.yml }}
*/
.spectrum--light .spectrum-SideNav-itemLink {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(75, 75, 75);
}
.spectrum--light .spectrum-SideNav-itemLink:hover {
    background-color: rgba(44,44,44,0.06);
    color: rgb(44, 44, 44);
  }
.spectrum--light .spectrum-SideNav-itemLink:active {
    background-color: rgba(44,44,44,0.06);
  }
.spectrum--light .spectrum-SideNav-itemLink.focus-ring {
    background-color: rgba(44,44,44,0.06);
    color: rgb(44, 44, 44);
  }
.spectrum--light .spectrum-SideNav-itemLink.focus-ring::before {
      border-color: rgb(38, 128, 235);
    }
.spectrum--light .spectrum-SideNav-heading {
  color: rgb(110, 110, 110);
}`;
    }
}