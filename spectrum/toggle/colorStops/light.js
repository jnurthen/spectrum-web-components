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
/* Default */
/* :before is used for the track of the switch */
.spectrum-ToggleSwitch-switch::before {
    background-color: rgb(225, 225, 225);
  }
/* :after is used for the handle of the switch */
.spectrum-ToggleSwitch-switch::after {
    background-color: rgb(250, 250, 250);
    border-color: rgb(142, 142, 142);
  }
.spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
  color: rgb(75, 75, 75);
}
/* Selected */
.spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(20, 115, 230);
    }
.spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(20, 115, 230);
    }
/* Hover */
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(110, 110, 110);
        box-shadow: none;
      }
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
      color: rgb(44, 44, 44);
    }
/* Selected Hover */
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(13, 102, 208);
      }
.spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(13, 102, 208);
      }
/* Down */
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(75, 75, 75);
      }
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input ~ .spectrum-ToggleSwitch-label {
      color: rgb(44, 44, 44);
    }
/* Selected Down */
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(9, 90, 186);
      }
.spectrum-ToggleSwitch:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(9, 90, 186);
      }
/* Disabled */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(225, 225, 225);
    }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(202, 202, 202);
    }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled ~ .spectrum-ToggleSwitch-label {
    color: rgb(179, 179, 179);
  }
/* Selected Disabled */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::before {
        background-color: rgb(202, 202, 202);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(202, 202, 202);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input:disabled:checked ~ .spectrum-ToggleSwitch-label {
      color: rgb(179, 179, 179);
    }
/* topdoc
{{ toggle/toggle-onoffquiet.yml }}
*/
/* Quiet */
/* Quiet Selected */
.spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(110, 110, 110);
    }
.spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(110, 110, 110);
    }
/* Quiet Selected Hover */
.spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(75, 75, 75);
    }
.spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(75, 75, 75);
    }
/* Quiet Selected Down */
.spectrum-ToggleSwitch.spectrum-ToggleSwitch--quiet:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
      background-color: rgb(44, 44, 44);
    }
.spectrum-ToggleSwitch.spectrum-ToggleSwitch--quiet:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
      border-color: rgb(44, 44, 44);
    }
/* Key Focus */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring + .spectrum-ToggleSwitch-switch::after {
        border-color: rgb(38, 128, 235);
        box-shadow: 0 0 0 1px rgb(38, 128, 235);
      }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring ~ .spectrum-ToggleSwitch-label {
      color: rgb(13, 102, 208);
    }
/* Selected Key Focus */
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(38, 128, 235);
        }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(38, 128, 235);
          box-shadow: 0 0 0 1px rgb(38, 128, 235);
        }
.spectrum-ToggleSwitch .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch:hover .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label, .spectrum-ToggleSwitch--quiet:hover .spectrum-ToggleSwitch-input.focus-ring:checked ~ .spectrum-ToggleSwitch-label {
        color: rgb(13, 102, 208);
      }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(225, 225, 225);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:checked + .spectrum-ToggleSwitch-switch::after {
        /* Don't be blue */
        border-color: rgb(142, 142, 142);
      }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(225, 225, 225);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input.focus-ring:checked + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(38, 128, 235);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled:checked + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(225, 225, 225);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(225, 225, 225);
        }
.spectrum-ToggleSwitch--ab .spectrum-ToggleSwitch-input:disabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(202, 202, 202);
        }
.spectrum-ToggleSwitch--ab:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(225, 225, 225);
        }
.spectrum-ToggleSwitch--ab:hover .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(110, 110, 110);
        }
.spectrum-ToggleSwitch--ab:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::before {
          background-color: rgb(225, 225, 225);
        }
.spectrum-ToggleSwitch--ab:active .spectrum-ToggleSwitch-input:checked:enabled + .spectrum-ToggleSwitch-switch::after {
          border-color: rgb(75, 75, 75);
        }`;
    }
}