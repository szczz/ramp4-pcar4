import { markRaw } from 'vue';
import { SettingsAPI } from './api/settings';
import SettingsAppbarButtonV from './appbar-button.vue';

import SettingsScreenV from './screen.vue';

import messages from './lang/lang.csv?raw';

class SettingsFixture extends SettingsAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'settings-panel': {
                    screens: {
                        'settings-screen-content': markRaw(SettingsScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    alertName: 'settings.title'
                }
            },
            { i18n: { messages } }
        );

        this.$iApi.component('settings-appbar-button', SettingsAppbarButtonV);
    }
}

export default SettingsFixture;