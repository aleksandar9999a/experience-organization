import Vue from 'vue';

export const loaderState = Vue.observable({ loader: false });

export function changeLoaderState() {
    loaderState.loader = !loaderState.loader;
}