/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { html, select } from '@open-wc/demoing-storybook';
import { TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import '../';

export default {
    component: 'sp-textfield',
    title: 'Textfield',
};

export const Default = (): TemplateResult => {
    const dir = select(
        'Text direction',
        {
            None: 'none',
            'Left to right': 'ltr',
            'Right to left': 'rtl',
        },
        'ltr',
        'Element'
    );
    return html`
        <sp-textfield
            dir=${ifDefined(dir === 'none' ? undefined : dir)}
            placeholder="Enter your name"
        >
            <input placeholder="Enter your name" />
        </sp-textfield>
        <sp-textfield
            dir=${ifDefined(dir === 'none' ? undefined : dir)}
            disabled
            placeholder="Enter your name"
        >
            <input placeholder="Enter your name" />
        </sp-textfield>
        <sp-textfield
            dir=${ifDefined(dir === 'none' ? undefined : dir)}
            pattern="[\\w\\s]+"
            placeholder="Enter your name"
            required
            value="A valid input"
        >
            <input placeholder="Enter your name" />
        </sp-textfield>
        <sp-textfield
            dir=${ifDefined(dir === 'none' ? undefined : dir)}
            pattern="[\\w\\s]+"
            placeholder="Enter your name"
            required
            value="A valid input"
            disabled
        >
            <input placeholder="Enter your name" />
        </sp-textfield>
        <sp-textfield
            dir=${ifDefined(dir === 'none' ? undefined : dir)}
            pattern="[\\d]+"
            placeholder="Enter your name"
            required
            value="Not a valid input"
        >
            <input placeholder="Enter your name" />
        </sp-textfield>
        <sp-textfield
            dir=${ifDefined(dir === 'none' ? undefined : dir)}
            pattern="[\\d]+"
            placeholder="Enter your name"
            invalid
            required
            value="Not a valid input"
            disabled
        >
            <input placeholder="Enter your name" />
        </sp-textfield>
    `;
};
