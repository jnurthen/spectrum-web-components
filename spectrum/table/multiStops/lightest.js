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
.spectrum--lightest .spectrum-Table-headCell {
  color: rgb(116, 116, 116);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--lightest .spectrum-Table-headCell.is-sortable .spectrum-Table-sortedIcon {
      color: rgb(149, 149, 149);
    }
.spectrum--lightest .spectrum-Table-headCell.is-sortable:hover {
      color: rgb(50, 50, 50);
    }
.spectrum--lightest .spectrum-Table-headCell.is-sortable:hover .spectrum-Table-sortedIcon {
        color: rgb(50, 50, 50);
      }
.spectrum--lightest .spectrum-Table-headCell.is-sortable.focus-ring,
    .spectrum--lightest .spectrum-Table-headCell.is-sortable.is-focused {
      color: rgb(50, 50, 50);
    }
.spectrum--lightest .spectrum-Table-headCell.is-sortable.focus-ring .spectrum-Table-sortedIcon, .spectrum--lightest .spectrum-Table-headCell.is-sortable.is-focused .spectrum-Table-sortedIcon {
        color: rgb(50, 50, 50);
      }
.spectrum--lightest .spectrum-Table-headCell.is-sortable:active {
      color: rgb(50, 50, 50);
    }
.spectrum--lightest .spectrum-Table-headCell.is-sortable:active .spectrum-Table-sortedIcon {
        color: rgb(50, 50, 50);
      }
/* Helper for shared drop target overlay */
.spectrum--lightest .spectrum-Table-cell.focus-ring::before, .spectrum--lightest .spectrum-Table-cell .is-focused::before, .spectrum--lightest .spectrum-Table-headCell.focus-ring::before, .spectrum--lightest .spectrum-Table-headCell .is-focused::before {
      box-shadow: inset 0 0 0 2px rgb(55, 142, 240);
    }
.spectrum--lightest .spectrum-Table-body {
  border-style: solid;
  border-color: rgb(234, 234, 234);
  background-color: rgb(255, 255, 255);
}
.spectrum--lightest .spectrum-Table-body.is-drop-target {
    border-color: rgb(55, 142, 240);
    box-shadow: 0 0 0 1px rgb(55, 142, 240);
  }
.spectrum--lightest .spectrum-Table-body.is-drop-target::before {
      background-color: rgba(38,128,235,0.1);
    }
/* The tbody tag doesn't allow setting a border-radius, so these hacks are to make that work
   by putting the border on the individual cells instead. */
.spectrum--lightest tbody.spectrum-Table-body {
  border: none;
}
.spectrum--lightest tbody.spectrum-Table-body .spectrum-Table-row {
    border-top: none;
  }
.spectrum--lightest tbody.spectrum-Table-body .spectrum-Table-cell {
    border-top: 1px solid rgb(234, 234, 234);
  }
.spectrum--lightest tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child {
    border-left: 1px solid rgb(234, 234, 234);
  }
.spectrum--lightest tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
    border-right: 1px solid rgb(234, 234, 234);
  }
.spectrum--lightest tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell {
    border-bottom: 1px solid rgb(234, 234, 234);
  }
.spectrum--lightest .spectrum-Table-row {
  border-bottom: 1px solid rgb(234, 234, 234);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--lightest .spectrum-Table-row:hover {
    background-color: rgba(50,50,50,0.06);
  }
.spectrum--lightest .spectrum-Table-row.focus-ring,
  .spectrum--lightest .spectrum-Table-row.is-focused {
    background-color: rgba(50,50,50,0.06);
  }
.spectrum--lightest .spectrum-Table-row:active {
    background-color: rgba(50,50,50,0.1);
  }
.spectrum--lightest .spectrum-Table-row.is-selected {
    background-color: rgba(38,128,235,0.1);
  }
.spectrum--lightest .spectrum-Table-row.is-selected:hover {
      background-color: rgba(38,128,235,0.2);
    }
.spectrum--lightest .spectrum-Table-row.is-selected.focus-ring,
    .spectrum--lightest .spectrum-Table-row.is-selected.is-focused {
      background-color: rgba(38,128,235,0.2);
    }
.spectrum--lightest .spectrum-Table-row.is-drop-target::before {
      box-shadow: inset 0 0 0 2px rgb(55, 142, 240);
      background-color: rgba(38,128,235,0.1);
    }
.spectrum--lightest .spectrum-Table-cell {
  color: rgb(80, 80, 80);
  background-color: rgba(0, 0, 0, 0);
}
.spectrum--lightest .spectrum-Table-cell--divider {
  border-right-style: solid;
  border-right-color: rgb(234, 234, 234);
}
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-body {
    border-width: 1px 0;
    background-color: rgba(0, 0, 0, 0);
  }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-body.is-drop-target {
      box-shadow: none;
      border-color: transparent;
    }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-body.is-drop-target::before {
        box-shadow: inset 0 0 0 2px rgb(55, 142, 240);
      }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row {
    background-color: rgba(0, 0, 0, 0);
  }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row:hover {
      background-color: rgba(50,50,50,0.06);
    }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row.focus-ring,
    .spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row.is-focused {
      background-color: rgba(50,50,50,0.06);
    }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row:active {
      background-color: rgba(50,50,50,0.1);
    }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row.is-selected {
      background-color: rgba(38,128,235,0.1);
    }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row.is-selected:hover {
        background-color: rgba(38,128,235,0.2);
      }
.spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row.is-selected.focus-ring,
      .spectrum--lightest .spectrum-Table--quiet .spectrum-Table-row.is-selected.is-focused {
        background-color: rgba(38,128,235,0.2);
      }
.spectrum--lightest .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child,
    .spectrum--lightest .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
      border-left: none;
      border-right: none;
    }`;
    }
}