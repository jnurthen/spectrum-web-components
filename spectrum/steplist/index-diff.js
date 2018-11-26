export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Steplist {
  padding-top: 22px;
  padding-left: 60px;
  padding-right: 60px;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Steplist--small {
  padding: 11px 0;
}
.spectrum--large .spectrum-Steplist-item {
  width: 80px;
  padding: 0 40px 0 0;
}
.spectrum--large .spectrum-Steplist-item.is-complete + .spectrum-Steplist-item .spectrum-Steplist-segment {
      border-bottom-width: 2px;
    }
.spectrum--large .spectrum-Steplist-label {
  bottom: 10px;
  width: 120px;

  font-size: 12px;
}
.spectrum--large .spectrum-Steplist-markerContainer {

  width: 20px;
  height: 20px;

  margin-left: -10px;
}
.spectrum--large .spectrum-Steplist-marker {
  margin-top: -4px;
  margin-left: -4px;

  width: 8px;
  height: 8px;

  border-radius: 8px;
}
.spectrum--large .spectrum-Steplist-segment {
  right: 68px;
  width: 104px;
  bottom: -1px;
  border-bottom-width: 2px;
}
.spectrum--large .spectrum-Steplist-item:last-child .spectrum-Steplist-markerContainer {
    margin-right: -10px;
  }
.spectrum--large .spectrum-Steplist-item:last-child .spectrum-Steplist-segment {
    right: 8px;
  }
.spectrum--large .spectrum-Steplist-item:first-child,
.spectrum--large .spectrum-Steplist-item:last-child {
  width: 20px;
}
.spectrum--large .spectrum-Steplist-item:only-child .spectrum-Steplist-markerContainer {
    margin-left: -10px;
  }`;
    }
}