import { OverviewmapAPI } from './api/overviewmap';
import { overviewmap } from './store/index';
import type { OverviewmapConfig } from './store/index';
import OverviewmapV from './overviewmap.vue';
import messages from './lang/lang.csv?raw';

class OverviewmapFixture extends OverviewmapAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('overviewmap', overviewmap());

        Object.entries(messages).forEach(value =>
            (<any>this.$vApp.$i18n).mergeLocaleMessage(...value)
        );

        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            (value: OverviewmapConfig | undefined) => this._parseConfig(value)
        );

        const { vNode, destroy, el } = this.mount(OverviewmapV, {
            app: this.$element
        });
        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);
    }

    removed() {
        console.log(`[fixture] ${this.id} removed`);
        this.$vApp.$store.unregisterModule('overviewmap');
    }
}

export default OverviewmapFixture;