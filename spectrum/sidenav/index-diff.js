export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-SideNav {
  width: 300px;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-SideNav-item {

  margin: 5px 0;
}
.spectrum--large .spectrum-SideNav-itemLink {
  min-height: 40px;

  padding: 6px 15px;

  border-radius: 5px;

  font-size: 17px;
  font-weight: 400;

  transition: background-color 130ms ease-out,
              color 130ms ease-out;
}
.spectrum--large .spectrum-SideNav-itemLink.focus-ring::before {

    border: 2px solid transparent;
    border-radius: 5px;
  }
.spectrum--large .spectrum-SideNav-heading {
  height: 40px;
  line-height: 40px;

  margin: 20px 0 5px 0;
  padding: 0 15px;

  border-radius: 5px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
}
.spectrum--large .spectrum-SideNav--multiLevel .spectrum-SideNav-itemLink {
    font-weight: 700;
  }
.spectrum--large .spectrum-SideNav--multiLevel .spectrum-SideNav .spectrum-SideNav-itemLink {
      font-weight: 400;

      padding-left: 30px;
    }
.spectrum--large .spectrum-SideNav--multiLevel .spectrum-SideNav .spectrum-SideNav .spectrum-SideNav-itemLink {
        padding-left: 45px;
      }`;
    }
}