import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper-f8bb4967.js';

var SAMPLE_KEY = 'sample';
            var currentUrl = new URL(window.location.href);

            document
                .getElementById('selectConfig')
                .addEventListener('change', onConfigSelect);
            initialLoad();

            async function loadScript(scriptName) {
                // vite dynamic import. requires assigning to a variable to be recognized.
                await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"./starter-scripts/alternate.js": () => __vitePreload(() => import('./alternate-4c254994.js'),true?[]:void 0,import.meta.url),"./starter-scripts/basemap-fail.js": () => __vitePreload(() => import('./basemap-fail-d2500551.js'),true?["./basemap-fail-d2500551.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/basemap-only.js": () => __vitePreload(() => import('./basemap-only-faf131ba.js'),true?["./basemap-only-faf131ba.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/basemaps.js": () => __vitePreload(() => import('./basemaps-2c8d33a2.js'),true?["./basemaps-2c8d33a2.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cam.js": () => __vitePreload(() => import('./cam-dcc11a98.js'),true?["./cam-dcc11a98.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cccs.js": () => __vitePreload(() => import('./cccs-68fea109.js'),true?["./cccs-68fea109.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cesi.js": () => __vitePreload(() => import('./cesi-1e953985.js'),true?["./cesi-1e953985.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cumulative-effects.js": () => __vitePreload(() => import('./cumulative-effects-b6d217fe.js'),true?["./cumulative-effects-b6d217fe.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-appbar-button.js": () => __vitePreload(() => import('./custom-appbar-button-d967345f.js'),true?["./custom-appbar-button-d967345f.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-arrow.js": () => __vitePreload(() => import('./custom-arrow-7c43cd5f.js'),true?["./custom-arrow-7c43cd5f.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-grid-buttons.js": () => __vitePreload(() => import('./custom-grid-buttons-4f432e62.js'),true?["./custom-grid-buttons-4f432e62.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-overviewmap.js": () => __vitePreload(() => import('./custom-overviewmap-3131c205.js'),true?["./custom-overviewmap-3131c205.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-renderer.js": () => __vitePreload(() => import('./custom-renderer-59c6171a.js'),true?["./custom-renderer-59c6171a.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-store.js": () => __vitePreload(() => import('./custom-store-0e453a96.js'),true?["./custom-store-0e453a96.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./custom-store-6f829547.css"]:void 0,import.meta.url),"./starter-scripts/custom-symbology.js": () => __vitePreload(() => import('./custom-symbology-5fca5966.js'),true?["./custom-symbology-5fca5966.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/delayed-start.js": () => __vitePreload(() => import('./delayed-start-be95da9a.js'),true?["./delayed-start-be95da9a.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/disabled-options.js": () => __vitePreload(() => import('./disabled-options-f0e992cb.js'),true?["./disabled-options-f0e992cb.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/error-layers.js": () => __vitePreload(() => import('./error-layers-5da2a76e.js'),true?["./error-layers-5da2a76e.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/exclusive-fields.js": () => __vitePreload(() => import('./exclusive-fields-bff353ec.js'),true?["./exclusive-fields-bff353ec.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/export-custom-renderer.js": () => __vitePreload(() => import('./export-custom-renderer-b58cca96.js'),true?["./export-custom-renderer-b58cca96.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/fog-hilight.js": () => __vitePreload(() => import('./fog-hilight-7ae1e023.js'),true?["./fog-hilight-7ae1e023.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/form.js": () => __vitePreload(() => import('./form-96b360b4.js'),true?["./form-96b360b4.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/geosearch-filtered.js": () => __vitePreload(() => import('./geosearch-filtered-ebbb1ed1.js'),true?["./geosearch-filtered-ebbb1ed1.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/geosearch.js": () => __vitePreload(() => import('./geosearch-655ff067.js'),true?["./geosearch-655ff067.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid-config.js": () => __vitePreload(() => import('./grid-config-b702eb42.js'),true?["./grid-config-b702eb42.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid-custom-template.js": () => __vitePreload(() => import('./grid-custom-template-f3c99f18.js'),true?["./grid-custom-template-f3c99f18.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid.js": () => __vitePreload(() => import('./grid-0a2dde2c.js'),true?["./grid-0a2dde2c.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/help.js": () => __vitePreload(() => import('./help-42f8bf48.js'),true?["./help-42f8bf48.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/info-section.js": () => __vitePreload(() => import('./info-section-413d3739.js'),true?["./info-section-413d3739.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/lambert.js": () => __vitePreload(() => import('./lambert-44013773.js'),true?["./lambert-44013773.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/layer-metadata.js": () => __vitePreload(() => import('./layer-metadata-b6d45e32.js'),true?["./layer-metadata-b6d45e32.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/legend.js": () => __vitePreload(() => import('./legend-f021a845.js'),true?["./legend-f021a845.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/main.js": () => __vitePreload(() => import('./main-7251c444.js'),true?["./main-7251c444.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/map-image-layer.js": () => __vitePreload(() => import('./map-image-layer-1ae13a59.js'),true?["./map-image-layer-1ae13a59.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/mapnav.js": () => __vitePreload(() => import('./mapnav-2ae65b27.js'),true?["./mapnav-2ae65b27.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/merge-grid.js": () => __vitePreload(() => import('./merge-grid-52dab410.js'),true?["./merge-grid-52dab410.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/multi-instances.js": () => __vitePreload(() => import('./multi-instances-3b94a030.js'),true?["./multi-instances-3b94a030.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/multi-ramp.js": () => __vitePreload(() => import('./multi-ramp-d21d41c7.js'),true?["./multi-ramp-d21d41c7.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/no-layers.js": () => __vitePreload(() => import('./no-layers-338f9c65.js'),true?["./no-layers-338f9c65.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/offscale-layer.js": () => __vitePreload(() => import('./offscale-layer-4e5b5bc4.js'),true?["./offscale-layer-4e5b5bc4.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/old-main.js": () => __vitePreload(() => import('./old-main-806e663c.js'),true?["./old-main-806e663c.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/panel-party.js": () => __vitePreload(() => import('./panel-party-d6e9fc06.js'),true?["./panel-party-d6e9fc06.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/perm-filter.js": () => __vitePreload(() => import('./perm-filter-36ed1da7.js'),true?["./perm-filter-36ed1da7.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/r2-config-upgraded.js": () => __vitePreload(() => import('./r2-config-upgraded-f100ce74.js'),true?["./r2-config-upgraded-f100ce74.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/ramp-basic.js": () => __vitePreload(() => import('./ramp-basic-4b3f036b.js'),true?["./ramp-basic-4b3f036b.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/section-item.js": () => __vitePreload(() => import('./section-item-8d1741d9.js'),true?["./section-item-8d1741d9.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-data.js": () => __vitePreload(() => import('./simple-data-30aba86e.js'),true?["./simple-data-30aba86e.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-feature.js": () => __vitePreload(() => import('./simple-feature-81a86a4f.js'),true?["./simple-feature-81a86a4f.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-file.js": () => __vitePreload(() => import('./simple-file-a68e9705.js'),true?["./simple-file-a68e9705.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-mil.js": () => __vitePreload(() => import('./simple-mil-5ee27679.js'),true?["./simple-mil-5ee27679.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport-details.js": () => __vitePreload(() => import('./teleport-details-bdf23aea.js'),true?["./teleport-details-bdf23aea.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport-wet.js": () => __vitePreload(() => import('./teleport-wet-afdab5dc.js'),true?["./teleport-wet-afdab5dc.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport.js": () => __vitePreload(() => import('./teleport-e2a74259.js'),true?["./teleport-e2a74259.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/tree-grow.js": () => __vitePreload(() => import('./tree-grow-c3a65aa7.js'),true?["./tree-grow-c3a65aa7.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/wet.js": () => __vitePreload(() => import('./wet-642d88b6.js'),true?["./wet-642d88b6.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/wms-layer.js": () => __vitePreload(() => import('./wms-layer-3c27021a.js'),true?["./wms-layer-3c27021a.js","./main-75ed2508.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)})), `./starter-scripts/${scriptName}.js`);
            }

            function onConfigSelect(event) {
                // refresh page with new selection in URL
                currentUrl.searchParams.set(
                    SAMPLE_KEY,
                    document.getElementById('selectConfig').selectedIndex + 1
                );
                window.location.href = currentUrl;
            }

            function initialLoad() {
                var params = new URLSearchParams(currentUrl.search);
                var sampleIndex = params.get(SAMPLE_KEY) - 1;
                var selectElem = document.getElementById('selectConfig');
                if (
                    params.has(SAMPLE_KEY) &&
                    sampleIndex >= 1 &&
                    selectElem.item(sampleIndex)
                ) {
                    selectElem.options[sampleIndex].selected = 'selected';
                    loadScript(selectElem.options[sampleIndex].value);
                } else {
                    loadScript(selectElem.options[0].value);
                }
            }
