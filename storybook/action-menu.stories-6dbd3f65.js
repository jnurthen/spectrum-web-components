import{h as e}from"./lit-html-6898710b.js";import{e as t,h as s,i,j as n}from"./index-2626287a.js";import{c as o,p as a}from"./lit-element-81619d09.js";import{_ as l}from"./tslib.es6-d9c764b6.js";import"./if-defined-a4bc040d.js";import{D as m}from"./index-1dd7cf0f.js";import"./index-8f46dbd8.js";import"./spectrum-icon-alert-small.css-eb5bae9d.js";import"./focusable-ee5c66f3.js";import"./iconset-svg-cf078571.js";import"./index-047233f1.js";import{O as r}from"./observe-slot-text-5194cee4.js";import"./index-7e76b33c.js";import"./index-9d9ec6e0.js";var c=o`#button{width:auto}.icon{width:18px;height:18px}#popover{width:auto;max-width:none}`;class d extends(r(m)){constructor(){super(...arguments),this.selected=!1,this.quiet=!0,this.listRole="menu",this.itemRole="menuitem"}static get styles(){return[...super.styles,c]}get hasLabel(){return this.slotHasContent}get buttonContent(){return[e` <slot name="icon"> <svg slot="icon" viewBox="0 0 36 36" class="icon" focusable="false" aria-hidden="true"> <circle cx="17.8" cy="18.2" r="3.4"></circle> <circle cx="29.5" cy="18.2" r="3.4"></circle> <circle cx="6.1" cy="18.2" r="3.4"></circle> </svg> </slot> <div id="label" ?hidden="${!this.hasLabel}"> <slot id="slot" @slotchange="${this.manageObservedSlot}"></slot> </div> `]}updated(e){super.updated(e),e.has("open")&&(this.selected=this.open),e.has("quiet")&&(this.quiet=!0),e.has("invalid")&&(this.invalid=!1)}}l([a({type:Boolean,reflect:!0})],d.prototype,"selected",void 0),l([a({type:Boolean,reflect:!0})],d.prototype,"quiet",void 0),customElements.get("sp-action-menu")||customElements.define("sp-action-menu",d);var p=({ariaLabel:t="More Actions",changeHandler:s=(()=>void 0),disabled:i=!1,visibleLabel:n=""}={})=>e` <sp-action-menu label="${t}" ?disabled="${i}" @change="${s}"> ${n} <sp-menu slot="options"> <sp-menu-item> Deselect </sp-menu-item> <sp-menu-item> Select Inverse </sp-menu-item> <sp-menu-item> Feather... </sp-menu-item> <sp-menu-item> Select and Mask... </sp-menu-item> <sp-menu-divider></sp-menu-divider> <sp-menu-item> Save Selection </sp-menu-item> <sp-menu-item disabled="disabled"> Make Work Path </sp-menu-item> </sp-menu> </sp-action-menu> `,u=()=>t`
    <style>
        sp-menu {
            min-width: 125px;
        }
    </style>
    ${p()}
`,h=()=>{var e=s("Arial Label","More Actions","Component"),t=s("Visible Label","More Actions","Component"),o=i("Is Disabled",!1,"Component");return p({ariaLabel:e,disabled:o,changeHandler:e=>{var t=e.target;n(`Change: ${t.value}`)()},visibleLabel:t})};export default{component:"sp-action-menu",title:"Action menu"};export{h as Default,u as iconOnly};
//# sourceMappingURL=action-menu.stories-6dbd3f65.js.map