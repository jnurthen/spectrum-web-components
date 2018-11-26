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
{{ textfield/textarea.yml }}
*/
/* topdoc
{{ textfield/textarea-quiet.yml }}
*/
/* topdoc
{{ textfield/textfield.yml }}
*/
.spectrum-Textfield {
  background-color: rgb(255, 255, 255);
  border-color: rgb(234, 234, 234);
  color: rgb(80, 80, 80);
}
.spectrum-Textfield::placeholder {
    color: rgb(149, 149, 149);
  }
.spectrum-Textfield:hover {
    border-color: rgb(211, 211, 211);
    box-shadow: none;
  }
.spectrum-Textfield:hover::placeholder {
      color: rgb(50, 50, 50);
    }
.spectrum-Textfield:focus {
    border-color: rgb(38, 128, 235);
  }
.spectrum-Textfield.focus-ring:not(:active) {
      border-color: rgb(55, 142, 240);
      box-shadow: 0 0 0 1px rgb(55, 142, 240);
    }
.spectrum-Textfield[disabled] {
    background-color: rgb(244, 244, 244);
    border-color: rgba(0, 0, 0, 0);
    color: rgb(188, 188, 188);

    /* For safari mobile browser */
    -webkit-text-fill-color: rgb(188, 188, 188);
  }
.spectrum-Textfield[disabled]::placeholder {
      color: rgb(188, 188, 188);
    }
.spectrum-Textfield.is-invalid,
  .spectrum-Textfield:invalid {
    border-color: rgb(227, 72, 80);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18' viewBox='0 0 18 18' width='18'%3E%3Cpath style='fill:rgb%28236%2C 91%2C 98%29' d='M8.564 1.289L.2 16.256A.5.5 0 0 0 .636 17h16.728a.5.5 0 0 0 .5-.5.494.494 0 0 0-.064-.244L9.436 1.289a.5.5 0 0 0-.872 0zM10 14.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25zm0-3a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25z'/%3E%3C/svg%3E");
  }
/* might break things due to pre-defined focus-ring */
.spectrum-Textfield.is-invalid.focus-ring:not(:active), .spectrum-Textfield:invalid.focus-ring:not(:active) {
        border-color: rgb(227, 72, 80);
        box-shadow: 0 0 0 1px rgb(227, 72, 80);
      }
.spectrum-Textfield.is-valid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='12' viewBox='0 0 12 12' width='12'%3E%3Cpath style='fill:rgb%2838%2C 142%2C 108%29' d='M4.5 10a1.023 1.023 0 0 1-.8-.384l-2.488-3a1 1 0 0 1 1.577-1.233L4.5 7.376l4.712-5.991a1 1 0 1 1 1.576 1.23l-5.511 7A.977.977 0 0 1 4.5 10z'/%3E%3C/svg%3E");
  }
/* topdoc
{{ textfield/textfield-quiet.yml }}
*/
.spectrum-Textfield--quiet {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(234, 234, 234);
}
.spectrum-Textfield--quiet:hover {
    border-color: rgb(211, 211, 211);
  }
.spectrum-Textfield--quiet:active {
    border-color: rgb(38, 128, 235);
  }
.spectrum-Textfield--quiet:focus {
    border-color: rgb(55, 142, 240);
    box-shadow: 0 1px 0 rgb(55, 142, 240);
  }
.spectrum-Textfield--quiet.focus-ring:not(:active) {
      border-color: rgb(55, 142, 240);
      box-shadow: 0 1px 0 rgb(55, 142, 240);
    }
.spectrum-Textfield--quiet:disabled {
    background-color: rgba(0, 0, 0, 0);
    border-color:  rgb(234, 234, 234);
  }
.spectrum-Textfield--quiet.is-invalid,
  .spectrum-Textfield--quiet:invalid {
    border-color: rgb(227, 72, 80);
  }
.spectrum-Textfield--quiet.is-invalid:focus, .spectrum-Textfield--quiet:invalid:focus {
      box-shadow: 0 1px 0 rgb(227, 72, 80);
    }
/* might break things due to pre-defined focus-ring */
.spectrum-Textfield--quiet.is-invalid.focus-ring:not(:active), .spectrum-Textfield--quiet:invalid.focus-ring:not(:active) {
        border-color: rgb(227, 72, 80);
        box-shadow: 0 1px 0 rgb(227, 72, 80);
      }`;
    }
}