import Vue from 'vue';

const dialog = Vue.observable({showDialog: false});

export function getShowDialog(){
    return dialog.showDialog;
}

export function changeShowDialog(){
    return dialog.showDialog = !dialog.showDialog;
}