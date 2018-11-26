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
{{ slider/slider-ramp.yml }}
*/
.spectrum--darkest .spectrum-Slider-track::before {
    background: rgb(45, 45, 45);
  }
/* topdoc
{{ slider/slider-tick-label.yml }}
*/
.spectrum--darkest .spectrum-Slider-labelContainer,
.spectrum--darkest .spectrum-Dial-labelContainer {
  color: rgb(135, 135, 135);
}
/* topdoc
{{ slider/slider-tick.yml }}
*/
.spectrum--darkest .spectrum-Slider--filled .spectrum-Slider-track:first-child::before {
      background: rgb(135, 135, 135);
    }
/* topdoc
{{ slider/slider-player.yml }}
*/
.spectrum--darkest .spectrum-Slider-buffer::before,
  .spectrum--darkest .spectrum-Slider-buffer::after {
    background: rgb(73, 73, 73);
  }
/* topdoc
{{ slider/slider-filled.yml }}
*/
.spectrum--darkest .spectrum-Slider-ramp path {
    fill: rgb(45, 45, 45);
  }
/* topdoc
{{ slider/slider-label.yml }}
*/
.spectrum--darkest .spectrum-Slider-handle {
  border-color: rgb(135, 135, 135);
  background: rgb(30, 30, 30);
}
.spectrum--darkest .spectrum-Slider-handle:hover {
    border-color: rgb(180, 180, 180);
  }
.spectrum--darkest .spectrum-Slider-handle.is-focused {
    border-color: rgb(20, 115, 230);
  }
.spectrum--darkest .spectrum-Slider-handle:active,
  .spectrum--darkest .spectrum-Slider-handle.is-dragged {
    border-color: rgb(180, 180, 180);
  }
/* topdoc
{{ slider/slider.yml }}
*/
.spectrum--darkest .spectrum-Slider--ramp .spectrum-Slider-handle {
    /* We can't draw this one correctly without this hack : ( */
    box-shadow: 0 0 0 4px rgb(30, 30, 30);
  }
.spectrum--darkest .spectrum-Slider-input {
  background: transparent;
}
.spectrum--darkest .spectrum-Slider-tick:after {
    background-color: rgb(45, 45, 45);
  }
.spectrum--darkest .spectrum-Slider-handle.is-focused {
    border-color: rgb(20, 115, 230);
    background: rgb(20, 115, 230);
  }
.spectrum--darkest .spectrum-Slider-handle.is-dragged {
    border-color: rgb(180, 180, 180);
    background: rgba(0, 0, 0, 0);
  }
/* topdoc
{{ slider/slider-range.yml }}
*/
.spectrum--darkest .spectrum-Slider--range .spectrum-Slider-track:not(:first-of-type):not(:last-of-type):before {
        background: rgb(135, 135, 135);
      }
/* topdoc
{{ slider/slider-colored.yml }}
*/
.spectrum--darkest .spectrum-Slider--color .spectrum-Slider-controls::before {
    background-color: rgb(255, 255, 255);
    /* Add a half-percent to fix diagonal line issue in Chrome on non-retina displays */
    background-image:
      linear-gradient(-45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(-45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%),
      linear-gradient(45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%);
    background-size:
      16px
      16px;
    background-position:
      0 0,
      0 8px,
      8px -8px,
      -8px 0;
    z-index: 0;
  }
.spectrum--darkest .spectrum-Slider--color .spectrum-Slider-track {
    background-color: transparent;
    background-image: linear-gradient(to right, rgb(20, 115, 230), rgb(75, 156, 245));
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
  }
.spectrum--darkest .spectrum-Slider--color .spectrum-Slider-track::before {
      display: none;
    }
.spectrum--darkest .spectrum-Slider--color .spectrum-Slider-handle {
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05);
    border-color: rgb(8, 8, 8);
    background: rgba(0, 0, 0, 0);
  }
.spectrum--darkest .spectrum-Slider--color .spectrum-Slider-handle.is-focused {
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
    }
/* topdoc
{{ slider/dial-label.yml }}
*/
/* topdoc
{{ slider/dial.yml }}
*/
.spectrum--darkest .spectrum-Dial-handle {
  box-shadow: none;
}
.spectrum--darkest .spectrum-Dial-handle::after {
    background-color: rgb(135, 135, 135);
  }
.spectrum--darkest .spectrum-Dial-handle:hover::after {
      background-color: rgb(180, 180, 180);
    }
.spectrum--darkest .spectrum-Dial-handle.is-focused {
    background-color: rgb(20, 115, 230);

    border-color: rgb(20, 115, 230);
  }
.spectrum--darkest .spectrum-Dial-handle.is-focused::after {
      background-color: rgb(8, 8, 8);
    }
.spectrum--darkest .spectrum-Dial-handle:active,
  .spectrum--darkest .spectrum-Dial-handle.is-dragged {
    background-color: rgb(180, 180, 180);

    border-color: rgb(180, 180, 180);
  }
.spectrum--darkest .spectrum-Dial-handle:active::after, .spectrum--darkest .spectrum-Dial-handle.is-dragged::after {
      background-color: rgb(8, 8, 8);
    }
.spectrum--darkest .spectrum-Dial-controls::before,
  .spectrum--darkest .spectrum-Dial-controls::after {
    background-color: rgb(105, 105, 105);
  }
.spectrum--darkest .spectrum-Dial.is-disabled .spectrum-Dial-labelContainer {
      color: rgb(73, 73, 73);
    }
.spectrum--darkest .spectrum-Dial.is-disabled .spectrum-Dial-controls::after,
      .spectrum--darkest .spectrum-Dial.is-disabled .spectrum-Dial-controls::before {
        background-color: rgb(60, 60, 60);
      }
.spectrum--darkest .spectrum-Dial.is-disabled .spectrum-Dial-handle {
      border-color: rgb(60, 60, 60);
      background: rgb(30, 30, 30);
    }
.spectrum--darkest .spectrum-Dial.is-disabled .spectrum-Dial-handle:hover,
      .spectrum--darkest .spectrum-Dial.is-disabled .spectrum-Dial-handle:active {
        border-color: rgb(60, 60, 60);
        background: rgba(0, 0, 0, 0);
      }
.spectrum--darkest .spectrum-Dial.is-disabled .spectrum-Dial-handle::after,
      .spectrum--darkest .spectrum-Dial.is-disabled .spectrum-Dial-handle::before {
        background-color: rgb(45, 45, 45);
      }
.spectrum--darkest .spectrum-Slider.is-disabled .spectrum-Slider-labelContainer,
.spectrum--darkest .spectrum-Slider.is-disabled .spectrum--darkest .spectrum-Dial-labelContainer {
      color: rgb(73, 73, 73);
    }
.spectrum--darkest .spectrum-Slider.is-disabled .spectrum-Slider-handle {
      border-color: rgb(60, 60, 60);
      background: rgb(30, 30, 30);
    }
.spectrum--darkest .spectrum-Slider.is-disabled .spectrum-Slider-handle:hover,
      .spectrum--darkest .spectrum-Slider.is-disabled .spectrum-Slider-handle:active {
        border-color: rgb(60, 60, 60);
        background: rgba(0, 0, 0, 0);
      }
.spectrum--darkest .spectrum-Slider.is-disabled .spectrum-Slider-track::before {
        background: rgb(45, 45, 45);
      }
.spectrum--darkest .spectrum-Slider.is-disabled.spectrum-Slider--filled .spectrum-Slider-track:first-child::before {
          background: rgb(45, 45, 45);
        }
.spectrum--darkest .spectrum-Slider.is-disabled .spectrum-Slider-buffer::before {
        background: rgb(45, 45, 45);
      }
.spectrum--darkest .spectrum-Slider.is-disabled .spectrum-Slider-ramp path {
        fill: rgb(38, 38, 38);
      }
.spectrum--darkest .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-track {
        background: rgb(38, 38, 38) !important;
        box-shadow: none;
      }
.spectrum--darkest .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle {
        background: rgba(0, 0, 0, 0);
        box-shadow: none;
        border-color: rgb(60, 60, 60);
      }
.spectrum--darkest .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:hover,
        .spectrum--darkest .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:active {
          background: rgba(0, 0, 0, 0);
          box-shadow: none;
          border-color: rgb(60, 60, 60);
        }
.spectrum--darkest .spectrum-Slider.is-disabled.spectrum-Slider--range .spectrum-Slider-track:not(:first-of-type):not(:last-of-type):before {
            background: rgb(45, 45, 45);
          }`;
    }
}