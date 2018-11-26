export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ table/table-standard.yml }}
*/
/* topdoc
{{ table/table-divs.yml }}
*/
/* topdoc
{{ table/table-divs-quiet.yml }}
*/
/* topdoc
{{ table/table-dropzone.yml }}
*/
.spectrum-Table {
  border-collapse: separate;
  border-spacing: 0;
}
.spectrum-Table-sortedIcon {
  display: none;
  margin-left: 10px;

  vertical-align: middle;

  transition: transform 130ms ease-in-out;
}
.spectrum-Table-headCell {
  box-sizing: border-box;
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.3;
  min-height: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 10px 16px;
  transition: color 130ms ease-in-out;
  cursor: default;
  outline: 0;
  border-radius: 0px;
}
.spectrum-Table-headCell.is-sortable {
    cursor: pointer;
  }
.spectrum-Table-headCell.is-sorted-asc .spectrum-Table-sortedIcon, .spectrum-Table-headCell.is-sorted-desc .spectrum-Table-sortedIcon {
      display: inline-block;
      /* offset icon because it's not properly aligned */
      margin-top: -2px;
    }
.spectrum-Table-headCell.is-sorted-asc .spectrum-Table-sortedIcon {
      transform: rotateZ(180deg);
    }
.spectrum-Table-cell--alignCenter {
  text-align: center;
}
.spectrum-Table-cell--alignRight {
  text-align: right;
}
/* Helper for shared drop target overlay */
.spectrum-Table-body.is-drop-target::before,
.spectrum-Table-row.is-drop-target::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
.spectrum-Table-body {
  position: relative;

  border-width: 1px;
  border-radius: 4px;
  overflow: auto;
  vertical-align: top;
}
/* The tbody tag doesn't allow setting a border-radius, so these hacks are to make that work
   by putting it on the individual cells instead. */
.spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body {
    border-width: 1px;
    border-radius: 4px;
  }
.spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:first-child {
      border-top-left-radius: 4px;
    }
.spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:last-child {
      border-top-right-radius: 4px;
    }
.spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:first-child {
      border-bottom-left-radius: 4px;
    }
.spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:last-child {
      border-bottom-right-radius: 4px;
    }
.spectrum-Table-cell {
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 14px 16px;
  /* Subtract top/bottom padding for this value to be correct in this implementation */
  min-height: 20px;
}
.spectrum-Table-cell,
.spectrum-Table-headCell {
  position: relative;
}
.spectrum-Table-cell.focus-ring,
  .spectrum-Table-cell .is-focused,
  .spectrum-Table-headCell.focus-ring,
  .spectrum-Table-headCell .is-focused {
    outline: none;
  }
.spectrum-Table-cell.focus-ring::before, .spectrum-Table-cell .is-focused::before, .spectrum-Table-headCell.focus-ring::before, .spectrum-Table-headCell .is-focused::before {
      content: '';

      /* Float above border */
      z-index: 1;
      position: absolute;

      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      border-radius: 3px;
    }
.spectrum-Table-headCell.focus-ring::before, .spectrum-Table-headCell .is-focused::before {
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px;
    }
.spectrum-Table-cell--divider {
  border-right-width: 1px;
}
.spectrum-Table-row {
  position: relative;
  cursor: pointer;
  transition: background-color 130ms ease-in-out;
}
.spectrum-Table-row:focus {
    outline: 0;
  }
.spectrum-Table > .spectrum-Table-body > .spectrum-Table-row:last-of-type {
  border-bottom-style: none;
}
/* topdoc
{{ table/table-quiet.yml }}
*/
.spectrum-Table--quiet .spectrum-Table-body {
    border-radius: 0px;
  }
.spectrum-Table--quiet .spectrum-Table-body.is-drop-target::before, .spectrum-Table--quiet .spectrum-Table-row.is-drop-target::before {
        border-radius: 4px;
      }
/* topdoc
{{ table/table-standard-multiselect.yml }}
*/
.spectrum-Table-checkboxCell {
  padding-right: 8px;
  /* have to eliminate vertical padding to allow proper vertical alignment */
  padding-top: 0px;
  padding-bottom: 0px;
  vertical-align: middle;
}
.spectrum-Table-checkbox {
  vertical-align: super;
}
/* topdoc
{{ table/table-quiet-multiselect.yml }}
*/
/* topdoc
{{ table/table-dividers.yml }}
*/`;
    }
}