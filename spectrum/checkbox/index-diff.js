export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Checkbox {

  height: 40px;

  margin-right: 20px;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Checkbox-input {
  left: -10px;
  width: calc(100% + 20px);
}
.spectrum--large .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-width: 9px
  }
.spectrum--large .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box,
  .spectrum--large .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {
    border-width: 9px
  }
.spectrum--large .spectrum-Checkbox-label {
  margin-left: 13px;
  font-size: 17px;
  font-weight: 400;
  transition: color 130ms ease-in-out;
}
.spectrum--large .spectrum-Checkbox-box {
  width: 18px;
  height: 18px;

  border-radius: 2px;
  border-width: 2px;

  transition: border 130ms ease-in-out, box-shadow 130ms ease-in-out;
}
.spectrum--large .spectrum-Checkbox-checkmark,
.spectrum--large .spectrum-Checkbox-partialCheckmark {

  margin-top: -6px;
  margin-left: -6px;

  transition: opacity 130ms ease-in-out, transform 130ms ease-in-out;
}`;
    }
}