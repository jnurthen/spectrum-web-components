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
{{ rating/rating.yml }}
*/
.spectrum-Rating-icon {
  color: rgb(105, 105, 105);
}
/* Star */
.spectrum-Rating-icon .spectrum-Rating-starActive {
    display: block;
  }
.spectrum-Rating-icon .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) {
    color: rgb(105, 105, 105);
  }
/* StarOutline */
.spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
      display: none;
    }
.spectrum-Rating:not(:hover) .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
      display: block;
    }
.spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) {
  color: rgb(105, 105, 105);
}
/* StarOutline */
.spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
    display: none;
  }
.spectrum-Rating-icon:hover ~ .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
    display: block;
  }
/* topdoc
{{ rating/rating-active.yml }}
*/
.spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected {
  color: rgb(105, 105, 105);
}
/* Star */
.spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
    display: block;
  }
.spectrum-Rating-icon:hover ~ .spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum-Rating-icon.is-selected {
    color: rgb(180, 180, 180);
  }
/* Star */
.spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
      display: block;
    }
.spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
      display: none;
    }
/* topdoc
{{ rating/rating-disabled.yml }}
*/
.spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected {
  color: rgb(45, 45, 45);
}
/* Star */
.spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected .spectrum-Rating-starActive {
    display: block;
  }
.spectrum-Rating.is-disabled .spectrum-Rating-icon.is-selected .spectrum-Rating-starInactive {
    display: none;
  }
.spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) {
  color: rgb(45, 45, 45);
}
/* StarOutline */
.spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starActive {
    display: none;
  }
.spectrum-Rating:not(:hover).is-disabled .spectrum-Rating-icon:not(.is-selected) .spectrum-Rating-starInactive {
    display: block;
  }
.spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon,
      .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon:not(.is-selected),
      .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon.is-selected {
        color: rgb(20, 115, 230);

      }
.spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon > .spectrum-Icon, .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon:not(.is-selected) > .spectrum-Icon, .spectrum-Rating:not(:hover) .spectrum-Rating-input.focus-ring ~ .spectrum-Rating-icon.is-selected > .spectrum-Icon {
          stroke: currentColor;
          stroke-width: 1px;
        }`;
    }
}