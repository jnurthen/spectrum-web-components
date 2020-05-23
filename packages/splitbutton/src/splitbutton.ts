/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
    html,
    CSSResultArray,
    TemplateResult,
    property,
    PropertyValues,
    query,
} from 'lit-element';

import { ButtonVariants, ButtonBase } from '@spectrum-web-components/button';
import '@spectrum-web-components/icon';
import {
    ChevronDownMediumIcon,
    MoreIcon,
} from '@spectrum-web-components/icons-ui';
import '@spectrum-web-components/overlay';
import { OverlayTrigger, Placement } from '@spectrum-web-components/overlay';

import buttonStyles from '@spectrum-web-components/button/lib/button.css.js';
import ChevronDownMediumStyle from '@spectrum-web-components/icon/lib/spectrum-icon-chevron-down-medium.css.js';
import styles from './splitbutton.css.js';

/**
 * @element sp-splitbutton
 */
export class Splitbutton extends ButtonBase {
    public static get styles(): CSSResultArray {
        return [...super.styles, buttonStyles, styles, ChevronDownMediumStyle];
    }

    @property({ type: Boolean, reflect: true })
    public left = false;

    @property({ reflect: true })
    public placement: Placement = 'bottom-start';

    @query('#trigger')
    private trigger!: OverlayTrigger;

    @property({ type: String })
    public type: 'field' | 'more' = 'field';

    /**
     * The visual variant to apply to this button.
     */
    @property({ reflect: true })
    public variant: ButtonVariants = 'cta';

    protected render(): TemplateResult {
        return html`
            ${super.render()}
            <overlay-trigger
                id="trigger"
                placement=${this.placement}
                offset="0"
            >
                <button
                    slot="trigger"
                    class="button trigger ${this.variant}"
                    tabindex="-1"
                >
                    <sp-icon class="icon chevron-down-medium">
                        ${this.type === 'field'
                            ? ChevronDownMediumIcon({ hidden: true })
                            : MoreIcon({ hidden: true })}
                    </sp-icon>
                </button>
                <slot name="more" slot="click-content"></slot>
            </overlay-trigger>
        `;
    }

    protected firstUpdated(changes: PropertyValues): void {
        super.firstUpdated(changes);
        requestAnimationFrame(() => this.trigger.overloadTarget(this));
    }
}
