export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
:root {

  /* Todo fix in DNA */

  /* Todo: DNA uses incorrect font family "Adobe Clean" */
}
.spectrum-Textfield {
  /* box */
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 4px;

  /* Apply padding by default to center text, giving consistency between input and textfield */
  padding: 3px 12px 5px 12px;
  /* Use padding instead of text-indent because text-indent does not left align the text in Edge browser  */
  text-indent: 0;

  min-width: 72px;
  height: 32px;
  width: 192px;

  vertical-align: top; /* used to align them correctly in forms. */

  /* Remove the margin for input in Firefox and Safari. */
  margin: 0;

  /* Show the overflow for input in Edge. */
  overflow: visible;

  /* Change the input font styles in all browsers */
  font-family: adobe-clean, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  text-overflow: ellipsis;

  transition: border-color 130ms ease-in-out, box-shadow 130ms ease-in-out;

  outline: none;

  /* removes the native spin buttons in firefox. -mox-appearance: none has no effect */
  /* http://stackoverflow.com/questions/23372903/hide-spinner-in-input-number-firefox-29 */
  -moz-appearance: textfield;

  /* Normalize is adding a specific selector that resets this, so be important */
  -webkit-appearance: none !important;
}
.spectrum-Textfield::placeholder {
    font-weight: 400;
    font-style: italic;
    transition: color 130ms ease-in-out;
  }
/* added to work with Edge, note, it needs double ::
   * not single : which is what autoprefixer will add
   */
.spectrum-Textfield::-ms-input-placeholder {
    font-weight: 400;
    font-style: italic;
    transition: color 130ms ease-in-out;
  }
.spectrum-Textfield:lang(ja)::placeholder, .spectrum-Textfield:lang(zh)::placeholder, .spectrum-Textfield:lang(ko)::placeholder {
       font-style: normal;
    }
.spectrum-Textfield:lang(ja)::-ms-input-placeholder, .spectrum-Textfield:lang(zh)::-ms-input-placeholder, .spectrum-Textfield:lang(ko)::-ms-input-placeholder { /* added to work with Edge, same as above */
       font-style: normal;
    }
.spectrum-Textfield:hover::placeholder {
      font-weight: 400;
    }
.spectrum-Textfield:disabled {
    /* The opacity must be set to 1 */
    opacity: 1;
  }
.spectrum-Textfield:disabled::placeholder {
      font-weight: 400;
    }
/* http://stackoverflow.com/questions/14007655/remove-ie10s-clear-field-x-button-on-certain-inputs */
.spectrum-Textfield::-ms-clear {
    width: 0;
    height: 0;
  }
/* http://stackoverflow.com/questions/23372903/hide-spinner-in-input-number-firefox-29 */
.spectrum-Textfield::-webkit-inner-spin-button,
  .spectrum-Textfield::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
/* removes the red border that appears in Firefox */
.spectrum-Textfield:-moz-ui-invalid {
    box-shadow: none;
  }
/* removes the native spin buttons */
.spectrum-Textfield.is-invalid,
  .spectrum-Textfield:invalid,
  .spectrum-Textfield.is-valid {
    background-repeat: no-repeat;
  }
/* Remove the native clear button in IE */
.spectrum-Textfield.is-invalid,
  .spectrum-Textfield:invalid {
    background-size: 18px 18px;
    background-position: calc(100% - 12px) 50%;
    padding-right: 42px;
  }
.spectrum-Textfield.is-valid {
    background-size: 12px 12px;
    background-position: calc(100% - 12px) 50%;
    padding-right: 36px;
  }
.spectrum-Textfield--multiline {
  height: auto;
  padding: 4px 8px;

  /* Remove the default vertical scrollbar for textarea in IE. */
  overflow: auto;
}
.spectrum-Textfield--multiline.is-invalid,
  .spectrum-Textfield--multiline:invalid,
  .spectrum-Textfield--multiline.is-valid {
    background-position: calc(100% - 9px) calc(100% - 9px);
  }
.spectrum-Textfield--quiet {
  border-radius: 0;
  border-width: 0 0 1px 0;

  /* removes the side padding to align the text properly */
  padding-left: 0;
  padding-right: 0;

  /* Treat all quiet inputs and textareas the same */
  resize: none;
  overflow-y: hidden;
}
.spectrum-Textfield--quiet.is-invalid,
  .spectrum-Textfield--quiet:invalid,
  .spectrum-Textfield--quiet.is-valid {
    background-position: 100% 50%;
  }`;
    }
}