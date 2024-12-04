import { c$ as isBrowser, d1 as getAssetPath } from './main-ZcwzHdcj.js';
import { g as getSupportedLocale } from './locale-CzzRKlOK.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
    const key = `${component}_${lang}`;
    if (componentLangToMessageBundleCache[key]) {
        return componentLangToMessageBundleCache[key];
    }
    componentLangToMessageBundleCache[key] = fetch(getAssetPath(`./assets/${component}/t9n/messages_${lang}.json`))
        .then((resp) => {
        if (!resp.ok) {
            throwMessageFetchError();
        }
        return resp.json();
    })
        .catch(() => throwMessageFetchError());
    return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
    throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
    component.messages = {
        ...component.defaultMessages,
        ...component.messageOverrides,
    };
}
function noop() {
    // intentionally empty
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
    component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
    mergeMessages(component);
}
async function fetchMessages(component, lang) {
    if (!isBrowser()) {
        return {};
    }
    const { el } = component;
    const tag = el.tagName.toLowerCase();
    const componentName = tag.replace("calcite-", "");
    return getMessageBundle(getSupportedLocale(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
    component.defaultMessages = await fetchMessages(component, lang);
    mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
    component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
    // we set this to noop to for watchers triggered when components are disconnected
    component.onMessagesChange = noop;
}
function defaultOnMessagesChange() {
    mergeMessages(this);
}

export { connectMessages as c, disconnectMessages as d, setUpMessages as s, updateMessages as u };
