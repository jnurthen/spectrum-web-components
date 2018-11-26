export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ toast/toast.yml }}
*/
.spectrum-Toast {
  box-sizing: border-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: row;
      flex-direction: row;
  -ms-flex-align: stretch;
      align-items: stretch;

  border-radius: 4px;

  padding: 8px 8px 8px 16px;

  font-size: 14px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
}
.spectrum-Toast-typeIcon {
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -ms-flex-positive: 0;
      flex-grow: 0;

  margin: 7px 12px 7px 0;
}
.spectrum-Toast-content {
  -ms-flex: 1;
      flex: 1;
  display: inline-block;
  box-sizing: border-box;
  padding: 5px 16px 5px 0;
  text-align: left;
}
.spectrum-Toast-buttons {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 0 0 auto;
      flex: 0 0 auto;
  -ms-flex-align: end;
      align-items: flex-end;
  -ms-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
}
.spectrum-Toast-buttons .spectrum-Button + .spectrum-Button,
    .spectrum-Toast-buttons .spectrum-Button + .spectrum-ClearButton,
    .spectrum-Toast-buttons .spectrum-ClearButton + .spectrum-Button,
    .spectrum-Toast-buttons .spectrum-ClearButton + .spectrum-ClearButton {
      margin-left: 8px;
    }
.spectrum-Toast-body {
  -ms-flex: 1;
      flex: 1;
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
}
.spectrum-Toast-body .spectrum-Button {
    float: right;
    margin-right: 11px;
  }
.spectrum-Toast-body + .spectrum-Toast-buttons {
    padding-left: 8px;

    border-left-width: 1px;
    border-left-style: solid;
  }`;
    }
}