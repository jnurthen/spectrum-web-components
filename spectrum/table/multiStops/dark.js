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
.spectrum--dark .spectrum-Table-headCell {
  color: rgb(157, 157, 157);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--dark .spectrum-Table-headCell.is-sortable .spectrum-Table-sortedIcon {
      color: rgb(123, 123, 123);
    }
.spectrum--dark .spectrum-Table-headCell.is-sortable:hover {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-Table-headCell.is-sortable:hover .spectrum-Table-sortedIcon {
        color: rgb(255, 255, 255);
      }
.spectrum--dark .spectrum-Table-headCell.is-sortable.focus-ring,
    .spectrum--dark .spectrum-Table-headCell.is-sortable.is-focused {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-Table-headCell.is-sortable.focus-ring .spectrum-Table-sortedIcon, .spectrum--dark .spectrum-Table-headCell.is-sortable.is-focused .spectrum-Table-sortedIcon {
        color: rgb(255, 255, 255);
      }
.spectrum--dark .spectrum-Table-headCell.is-sortable:active {
      color: rgb(255, 255, 255);
    }
.spectrum--dark .spectrum-Table-headCell.is-sortable:active .spectrum-Table-sortedIcon {
        color: rgb(255, 255, 255);
      }
/* Helper for shared drop target overlay */
.spectrum--dark .spectrum-Table-cell.focus-ring::before, .spectrum--dark .spectrum-Table-cell .is-focused::before, .spectrum--dark .spectrum-Table-headCell.focus-ring::before, .spectrum--dark .spectrum-Table-headCell .is-focused::before {
      box-shadow: inset 0 0 0 2px rgb(38, 128, 235);
    }
.spectrum--dark .spectrum-Table-body {
  border-style: solid;
  border-color: rgb(62, 62, 62);
  background-color: rgb(37, 37, 37);
}
.spectrum--dark .spectrum-Table-body.is-drop-target {
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
  }
.spectrum--dark .spectrum-Table-body.is-drop-target::before {
      background-color: rgba(55,142,240,0.1);
    }
/* The tbody tag doesn't allow setting a border-radius, so these hacks are to make that work
   by putting the border on the individual cells instead. */
.spectrum--dark tbody.spectrum-Table-body {
  border: none;
}
.spectrum--dark tbody.spectrum-Table-body .spectrum-Table-row {
    border-top: none;
  }
.spectrum--dark tbody.spectrum-Table-body .spectrum-Table-cell {
    border-top: 1px solid rgb(62, 62, 62);
  }
.spectrum--dark tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child {
    border-left: 1px solid rgb(62, 62, 62);
  }
.spectrum--dark tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
    border-right: 1px solid rgb(62, 62, 62);
  }
.spectrum--dark tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell {
    border-bottom: 1px solid rgb(62, 62, 62);
  }
.spectrum--dark .spectrum-Table-row {
  border-bottom: 1px solid rgb(62, 62, 62);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--dark .spectrum-Table-row:hover {
    background-color: rgba(255,255,255,0.06);
  }
.spectrum--dark .spectrum-Table-row.focus-ring,
  .spectrum--dark .spectrum-Table-row.is-focused {
    background-color: rgba(255,255,255,0.06);
  }
.spectrum--dark .spectrum-Table-row:active {
    background-color: rgba(255,255,255,0.1);
  }
.spectrum--dark .spectrum-Table-row.is-selected {
    background-color: rgba(55,142,240,0.1);
  }
.spectrum--dark .spectrum-Table-row.is-selected:hover {
      background-color: rgba(55,142,240,0.2);
    }
.spectrum--dark .spectrum-Table-row.is-selected.focus-ring,
    .spectrum--dark .spectrum-Table-row.is-selected.is-focused {
      background-color: rgba(55,142,240,0.2);
    }
.spectrum--dark .spectrum-Table-row.is-drop-target::before {
      box-shadow: inset 0 0 0 2px rgb(38, 128, 235);
      background-color: rgba(55,142,240,0.1);
    }
.spectrum--dark .spectrum-Table-cell {
  color: rgb(205, 205, 205);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--dark .spectrum-Table-cell--divider {
  border-right-style: solid;
  border-right-color: rgb(62, 62, 62);
}
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-body {
    border-width: 1px 0;
    background-color: rgba(0, 0, 0, 0);
  }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-body.is-drop-target {
      box-shadow: none;
      border-color: transparent;
    }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-body.is-drop-target::before {
        box-shadow: inset 0 0 0 2px rgb(38, 128, 235);
      }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-row {
    background-color: rgba(0, 0, 0, 0);
  }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-row:hover {
      background-color: rgba(255,255,255,0.06);
    }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-row.focus-ring,
    .spectrum--dark .spectrum-Table--quiet .spectrum-Table-row.is-focused {
      background-color: rgba(255,255,255,0.06);
    }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-row:active {
      background-color: rgba(255,255,255,0.1);
    }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-row.is-selected {
      background-color: rgba(55,142,240,0.1);
    }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-row.is-selected:hover {
        background-color: rgba(55,142,240,0.2);
      }
.spectrum--dark .spectrum-Table--quiet .spectrum-Table-row.is-selected.focus-ring,
      .spectrum--dark .spectrum-Table--quiet .spectrum-Table-row.is-selected.is-focused {
        background-color: rgba(55,142,240,0.2);
      }
.spectrum--dark .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child,
    .spectrum--dark .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
      border-left: none;
      border-right: none;
    }`;
    }
}