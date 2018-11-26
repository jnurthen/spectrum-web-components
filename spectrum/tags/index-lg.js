export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ tags/tags.yml }}
*/
/* topdoc
{{ tags/tags-deletable.yml }}
*/
.spectrum-Tags {
  display: inline-block;

  margin: 0;
  padding: 0;
  list-style: none;
}
.spectrum-Tags:after {
    content: "";
    display: table;
    clear: both;
  }
.spectrum-Tags-item {
  float: left;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
      align-items: center;
  box-sizing: border-box;

  margin: 5px 5px;
  padding: 0 12px;
  height: 30px;
  max-width: 100%;

  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  outline: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;

  transition: border-color 130ms ease-in-out,
    color 130ms ease-in-out,
    box-shadow 130ms ease-in-out,
    background-color 130ms ease-in-out;
}
.spectrum-Tags-item.is-disabled {
    pointer-events: none;
  }
.spectrum-Tags-item > .spectrum-Icon,
  .spectrum-Tags-item > .spectrum-Avatar {
    margin-right: 10px;

    /* Add padding for "avatar" variant */
    margin-left: -3px;
  }
.spectrum-Tags-item > .spectrum-Icon ~ .spectrum-Tags-itemLabel, .spectrum-Tags-item > .spectrum-Avatar ~ .spectrum-Tags-itemLabel {
      margin-right: -3px;
    }
.spectrum-Tags-item .spectrum-ClearButton {
    margin-right: -13px;
  }
.spectrum-Tags-itemLabel {
  height: 100%;
  line-height: 28px;
  -ms-flex: 1 1 auto;
      flex: 1 1 auto;
  font-size: 15px;
  cursor: default;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}`;
    }
}