<template>
    <div
        class="shadow-tm bg-white h-full xs:mr-0 sm:mr-12 last:mr-0 pointer-events-auto min-w-0 shrink-0"
        :class="panel.expanded ? 'flex-grow max-w-full' : ''"
        :style="panel.style"
        :data-cy="panel.id"
        ref="componentEl"
    >
        <!-- this renders a panel screen which is currently in view -->

        <!-- only perform transition on screen components that are not loaded yet; if already loaded, switch right away -->
        <transition @before-leave="beforeLeave" @leave="leave" @enter="enter">
            <component
                class="h-full"
                :is="panel.route.screen"
                v-bind="panel.route.props"
                :panel="panel"
                v-focus-container
            ></component>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { PropType } from 'vue';
import anime from 'animejs';
import type { PanelInstance } from '@/api';
import CustomResizeObserver from '@/scripts/resize-observer';

const componentEl = ref(null as unknown as Element);
const props = defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});

const skipTransition = ref(false);

onMounted(() => {
    // If this panel will be teleported elsewhere, apply tailwind styles directly on the panel.
    if (props.panel.teleport) {
        const ro = new CustomResizeObserver(
            // only need default breakpoints for mobile vs non mobile
            // TODO: Iron out defaulting. Should this be a complete override instead?
            { xs: 0, sm: 461, ...props.panel.teleport.breakpoints }
        );
        ro.observe(componentEl.value);
    }
});

const animateTransition = (el: Element, done: () => void, value: number[]): void => {
    if (skipTransition.value) {
        return done();
    }

    anime({
        targets: el,
        opacity: {
            value,
            duration: 400,
            easing: 'cubicBezier(.5, .05, .1, .3)'
        },
        complete: done
    });
};

const enter = (el: Element, done: () => void): void => {
    animateTransition(el, done, [0, 1]);
};

const beforeLeave = (el: Element): void => {
    // this will also trigger when the loading component is transitioning out; in such cases skip executing this function
    if (el.classList.contains('screen-spinner')) {
        return;
    }

    // if the screen component is already loaded; if so, skip the transition
    skipTransition.value = props.panel.isScreenLoaded(props.panel.route.screen);

    // with transition, even if it's instanteneous, there is that annoying flicker when the focus ring is set
    // just before the component is removed from DOM; supress the focus ring on the screen component just before `leave` event
    componentEl.value
        .querySelectorAll('[focus-item')
        .forEach((element: Element) => element.classList.remove('default-focus-style'));
};

const leave = (el: Element, done: () => void): void => {
    animateTransition(el, done, [0, 1]);
};
</script>

<style lang="scss" scoped></style>
