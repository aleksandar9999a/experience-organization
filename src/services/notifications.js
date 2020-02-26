import Vue from 'vue';

export const notifications = Vue.observable({list: []});
let removeNotificationPerInterval = getInterval();

export function addNotification(message) {
    notifications.list.splice(1, 0, message);
    if (notifications.list.length === 1) {
        removeNotificationPerInterval = getInterval();
    }
}

export function removeNotificationByIndex(i) {
    notifications.list.splice(i, 1);
    checkList();
}

function removeLastNotification() {
    if (notifications.list.length > 0) {
        notifications.list.splice(notifications.list.length - 1, 1);
    }

    checkList();
}

function checkList() {
    if (notifications.list.length === 0) {
        clearInterval(removeNotificationPerInterval);
    }
}

function getInterval() {
    return setInterval(removeLastNotification, 4000);
}