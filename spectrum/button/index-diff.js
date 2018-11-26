export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Button,
.spectrum--large .spectrum-ActionButton,
.spectrum--large .spectrum-LogicButton,
.spectrum--large .spectrum-FieldButton,
.spectrum--large .spectrum-ClearButton,
.spectrum--large .spectrum-Tool {

  transition: background 130ms ease-out,
              border-color 130ms ease-out,
              color 130ms ease-out,
              box-shadow 130ms ease-out;
  font-family: adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Button {

  border-width: 2px;
  border-radius: 20px;

  height: 40px;
  min-width: 90px;

  padding: 0 18px 0;

  font-size: 18px;
  font-weight: 700;
}
.spectrum--large .spectrum-Button .spectrum-Icon + .spectrum-Button-label {
    margin-left: 10px;
  }
.spectrum--large .spectrum-Button .spectrum-Button-label + .spectrum-Icon {
    margin-left: 5px;
  }
.spectrum--large .spectrum-ActionButton,
.spectrum--large .spectrum-Tool {

  height: 40px;
  min-width: 40px;
  padding: 0 8px;

  border-width: 1px;
  border-radius: 5px;

  font-size: 17px;
  font-weight: 400;
}
.spectrum--large .spectrum-ActionButton .spectrum-Icon + .spectrum-ActionButton-label,
.spectrum--large .spectrum-Tool .spectrum-Icon + .spectrum-ActionButton-label {
    padding-left: 9px;
    padding-right: 6px;
  }
.spectrum--large .spectrum-ActionButton .spectrum-Icon--sizeS:only-child,
.spectrum--large .spectrum-Tool .spectrum-Icon--sizeS:only-child {
    top: calc(50% - 11px);
    left: calc(50% - 11px);
  }
.spectrum--large .spectrum-ActionButton .spectrum-ActionButton-label:only-child,
.spectrum--large .spectrum-Tool .spectrum-ActionButton-label:only-child {
    padding: 0 6px;
  }
.spectrum--large .spectrum-ActionButton-hold {
  right: 4px;
  bottom: 4px;
}
.spectrum--large .spectrum-ActionButton--quiet,
.spectrum--large .spectrum-Tool {
  border-width: 1px;
  border-radius: 5px;

  font-size: 17px;
  font-weight: 400;
}
.spectrum--large .spectrum-LogicButton {

  height: 24px;
  padding: 10px;

  border-width: 2px;
  border-radius: 5px;

  font-size: 17px;
  font-weight: 700;
}
.spectrum--large .spectrum-FieldButton {

  height: 40px;

  padding: 0 15px;
  font-size: 17px;
}
.spectrum--large .spectrum-FieldButton {
  padding: 0 15px;

  border-width: 1px;
  border-radius: 5px;

  transition: background-color 130ms,
    box-shadow 130ms,
    border-color 130ms;
}
.spectrum--large .spectrum-FieldButton:disabled,
  .spectrum--large .spectrum-FieldButton.is-disabled {
    border-width: 0;
  }
.spectrum--large .spectrum-FieldButton.is-open {
    border-width: 1px;
  }
.spectrum--large .spectrum-FieldButton--quiet {
  margin: 0;
  padding: 0;

  border-width: 0;
  border-radius: 0px;
}
.spectrum--large .spectrum-ClearButton {

  width: 40px;
  height: 40px;
}
.spectrum--large .spectrum-ClearButton--small {
  width: 30px;
  height: 30px;
}
.spectrum--large .spectrum-Tool {

  width: 40px;
  height: 40px;
}
.spectrum--large .spectrum-Tool-hold {
  right: 4px;
  bottom: 4px;
}
.spectrum--large .spectrum-Button + .spectrum-Button {
  margin-left: 16px;
}
.spectrum--large .spectrum-ActionButton + .spectrum-ActionButton,
.spectrum--large .spectrum-Tool + .spectrum-Tool {
  margin-left: 10px;
}
.spectrum--large .spectrum-Tool + .spectrum-Tool {
  margin-left: 10px;
}`;
    }
}