export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Slider,
.spectrum--large .spectrum-Dial {
  min-height: 40px;
  min-width: 160px;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Slider-controls,
.spectrum--large .spectrum-Dial-controls {
  width: calc(100% - 20px);
  margin-left: 10px;
  min-height: 40px;
}
.spectrum--large .spectrum-Slider-track,
.spectrum--large .spectrum-Slider-buffer,
.spectrum--large .spectrum-Slider-ramp {
  height: 2px;
  top: 20px;

  margin-top: -1px;
}
.spectrum--large .spectrum-Slider-track,
.spectrum--large .spectrum-Slider-buffer {
  padding: 0 4px 0 0;
  margin-left: -10px;
}
.spectrum--large .spectrum-Slider-track::before, .spectrum--large .spectrum-Slider-buffer::before {

    border-radius: 1px;
  }
.spectrum--large .spectrum-Slider-buffer {
  padding: 0 4px 0 0;
}
.spectrum--large .spectrum-Slider-track ~ .spectrum-Slider-track,
.spectrum--large .spectrum-Slider-buffer ~ .spectrum-Slider-buffer {
  right: 0;
  padding: 0 0 0 4px;
  margin-left: 0;
  margin-right: -10px;
}
.spectrum--large .spectrum-Slider-buffer ~ .spectrum-Slider-buffer {
  margin-right: 0;
  padding: 0 0 0 14px
}
.spectrum--large .spectrum-Slider--range .spectrum-Slider-track:first-of-type {
      padding: 0 4px 0 0;
      left: 0;
      margin-left: -10px;
    }
.spectrum--large .spectrum-Slider--range .spectrum-Slider-track {
      padding: 0 14px 0 14px;
      margin: 0;
    }
.spectrum--large .spectrum-Slider--range .spectrum-Slider-track:last-of-type {
      padding: 0 0 0 4px;
      right: 0;
      margin-right: -10px;
    }
.spectrum--large .spectrum-Slider-ramp {
  margin-top: 0;
  height: 16px;
  left: -10px;
  right: -10px;
  top: 8px
}
.spectrum--large .spectrum-Slider-handle,
.spectrum--large .spectrum-Dial-handle {
  top: 20px;

  width: 20px;
  height: 20px;

  margin: -10px 0 0 -10px;

  border-width: 2px;

  border-radius: 10px;

  transition: border-width 130ms ease-in-out;
}
.spectrum--large .spectrum-Slider-handle:active,
.spectrum--large .spectrum-Slider-handle.is-focused,
.spectrum--large .spectrum-Slider-handle.is-dragged,
.spectrum--large .spectrum-Dial-handle:active {
    border-width: 8px;
  }
.spectrum--large .spectrum-Slider-input,
.spectrum--large .spectrum-Dial-input {

  width: 20px;
  height: 20px;
  top: -2.5px;
  left: -2.5px
}
.spectrum--large .spectrum-Slider-labelContainer,
.spectrum--large .spectrum-Dial-labelContainer {

  padding-top: 5px;

  font-size: 15px;
  line-height: 1.3;
}
.spectrum--large .spectrum-Slider-ticks {

  margin: 0 -10px;
  margin-top: 11px;
}
.spectrum--large .spectrum-Slider-tick {

  width: 2px;
}
.spectrum--large .spectrum-Slider-tick:after {
    left: calc(50% - 1px);
    width: 2px;
    height: 10px;

    border-radius: 1px;
  }
.spectrum--large .spectrum-Slider-tick .spectrum-Slider-tickLabel {

    margin: 20px -20px 0 -20px;

    font-size: 15px;
    line-height: 1.3;
  }
.spectrum--large .spectrum-Slider-tick:first-of-type .spectrum-Slider-tickLabel, .spectrum--large .spectrum-Slider-tick:last-of-type .spectrum-Slider-tickLabel {
      margin: 20px 0 0 0;
    }
.spectrum--large .spectrum-Slider--color .spectrum-Slider-labelContainer,
.spectrum--large .spectrum-Slider--color .spectrum-Dial-labelContainer {
    padding-bottom: 6px;
  }
.spectrum--large .spectrum-Slider--color .spectrum-Slider-controls,
.spectrum--large .spectrum-Slider--color .spectrum-Slider-controls::before,
.spectrum--large .spectrum-Slider--color .spectrum-Slider-track,
.spectrum--large .spectrum-Slider--color .spectrum-Dial-controls,
.spectrum--large .spectrum-Slider--color .spectrum-Dial-controls::before {
    min-height: auto;
    height: 24px;
    margin-left: 0;
  }
.spectrum--large .spectrum-Slider--color .spectrum-Slider-controls::before,
.spectrum--large .spectrum-Slider--color .spectrum-Slider-track,
.spectrum--large .spectrum-Slider--color .spectrum-Dial-controls::before {
    top: 0;
    padding: 0;
    margin-top: 0;
    margin-right: 0;
    border-radius: 5px;
  }
.spectrum--large .spectrum-Slider--color .spectrum-Slider-handle,
.spectrum--large .spectrum-Slider--color .spectrum-Dial-handle {
    top: 50%;
  }
.spectrum--large .spectrum-Dial {
  min-width: 0;
  min-height: 0;
  width: 48px;
}
.spectrum--large .spectrum-Dial-labelContainer {
  margin-bottom: 6px;
}
.spectrum--large .spectrum-Dial-controls {
  width: 40px;
  height: 40px;
  min-height: 0;

  border-radius: 20px;
  margin: 0;
}
.spectrum--large .spectrum-Dial-controls::before,
  .spectrum--large .spectrum-Dial-controls::after {
    width: 4px;
    height: 2px;
    border-radius: 1px;
  }
.spectrum--large .spectrum-Dial-controls::before {
    right: -2px;
    transform: rotate(45deg);
  }
.spectrum--large .spectrum-Dial-controls::after {
    left: -2px;
    transform: rotate(-45deg);
  }
.spectrum--large .spectrum-Dial-handle {
  width: 100%;
  height: 100%;
  border-width: 2px;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: 20px;
  transform: rotate(-45deg);

  transition: background-color 130ms ease-in-out;
}
.spectrum--large .spectrum-Dial-handle::after {
    left: -2px;
    width: 12px;
    height: 2px;
    border-radius: 1px;
    transition: background-color 130ms ease-in-out;
  }
.spectrum--large .spectrum-Dial-handle:active,
  .spectrum--large .spectrum-Dial-handle.is-focused,
  .spectrum--large .spectrum-Dial-handle.is-dragged {
    border-width: 2px;
  }
.spectrum--large .spectrum-Dial-input {
  width: 100%;
  height: 100%;
}
.spectrum--large .spectrum-Dial--small .spectrum-Dial-controls {
    width: 24px;
    height: 24px;
  }
.spectrum--large .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:hover,
.spectrum--large .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:active,
.spectrum--large .spectrum-Dial.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:hover,
.spectrum--large .spectrum-Dial.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:active,
.spectrum--large .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:hover,
.spectrum--large .spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:active,
.spectrum--large .spectrum-Dial.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:hover,
.spectrum--large .spectrum-Dial.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:active {
          border-width: 1px;
        }`;
    }
}