export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Popover {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
.spectrum-Popover.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}
.spectrum-Popover--bottom.is-open {
  transform: translateY(6px);
}
.spectrum-Popover--top.is-open {
  transform: translateY(-6px);
}
.spectrum-Popover--right.is-open {
  transform: translateX(6px);
}
.spectrum-Popover--left.is-open {
  transform: translateX(-6px);
}
/* topdoc
{{ popover/popover.yml }}
*/
.spectrum-Popover {

  /* Be a flexbox to allow a full sized content area that scrolls */
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: column;
      flex-direction: column;
  box-sizing: border-box;

  min-width: 32px;
  min-height: 32px;

  position: absolute;

  border-style: solid;
  border-width: 1px;
  border-radius: 4px;

  outline: none;
}
/* Hide focus outline */
.spectrum-Popover-tip {
  position: absolute;
  /* This hides half of the tooltip, but it also crops the shadow slightly, which is undesireable */
  overflow: hidden;
  width: 21px;
  height: 11px;
}
.spectrum-Popover-tip::after {
    content: '';
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-style: solid;
    position: absolute;
    transform: rotate(45deg);
    top: -18px;
    left: -1px;
  }
.spectrum-Popover--dialog {
  min-width: 270px;
  padding: 30px 29px;
}
/* topdoc
{{ popover/popover-dialog.yml }}
*/
.spectrum-Popover--left.spectrum-Popover--withTip {
    margin-right: 13px;
  }
.spectrum-Popover--left .spectrum-Popover-tip {
    right: -16px;
    transform: rotate(-90deg);
  }
.spectrum-Popover--right.spectrum-Popover--withTip {
    margin-left: 13px;
  }
.spectrum-Popover--right .spectrum-Popover-tip {
    left: -16px;
    transform: rotate(90deg);
  }
/* Center the tip by default */
.spectrum-Popover--left .spectrum-Popover-tip, .spectrum-Popover--right .spectrum-Popover-tip {
    top: 50%;
    margin-top: -6px;
  }
.spectrum-Popover--bottom.spectrum-Popover--withTip {
    margin-top: 13px;
  }
.spectrum-Popover--bottom .spectrum-Popover-tip {
    top: -11px;
    transform: rotate(180deg);
  }
.spectrum-Popover--top.spectrum-Popover--withTip {
    margin-bottom: 13px;
  }
.spectrum-Popover--top .spectrum-Popover-tip {
    bottom: -11px;
  }
/* Center the tip by default */
.spectrum-Popover--bottom .spectrum-Popover-tip, .spectrum-Popover--top .spectrum-Popover-tip {
    left: 50%;
    margin-left: -12px;
  }`;
    }
}