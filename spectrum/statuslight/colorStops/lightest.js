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
.spectrum-StatusLight {
  color: rgb(80, 80, 80);
}
.spectrum-StatusLight[disabled],
  .spectrum-StatusLight.is-disabled {
    color: rgb(188, 188, 188);
  }
.spectrum-StatusLight[disabled]::before, .spectrum-StatusLight.is-disabled::before {
      background-color: rgb(211, 211, 211);
    }
.spectrum-StatusLight--negative::before {
  background-color: rgb(236, 91, 98);
}
.spectrum-StatusLight--notice::before {
  background-color: rgb(242, 148, 35);
}
.spectrum-StatusLight--positive::before {
  background-color: rgb(51, 171, 132);
}
.spectrum-StatusLight--info::before,
/** @depreacted */.spectrum-StatusLight--active::before {
  background-color: rgb(55, 142, 240);
}
.spectrum-StatusLight--neutral {
  color: rgb(116, 116, 116);
}
.spectrum-StatusLight--neutral::before {
    background-color: rgb(188, 188, 188);
  }
.spectrum-StatusLight--celery::before {
  background-color: rgb(75, 195, 95);
}
.spectrum-StatusLight--yellow::before {
  background-color: rgb(237, 204, 0);
}
.spectrum-StatusLight--fuchsia::before {
  background-color: rgb(207, 62, 220);
}
.spectrum-StatusLight--indigo::before {
  background-color: rgb(117, 117, 241);
}
.spectrum-StatusLight--seafoam::before {
  background-color: rgb(32, 163, 168);
}
.spectrum-StatusLight--chartreuse::before {
  background-color: rgb(142, 222, 73);
}
.spectrum-StatusLight--magenta::before {
  background-color: rgb(226, 73, 157);
}
.spectrum-StatusLight--purple::before {
  background-color: rgb(157, 100, 225);
}`;
    }
}