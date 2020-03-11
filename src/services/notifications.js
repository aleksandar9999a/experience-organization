import Vue from 'vue';

const notifications = Vue.observable({list: []});
let removeNotificationPerInterval = getInterval();

export function getNotificationsList() {
    return notifications.list;
}

export function addNotification(message) {
    notifications.list.unshift(message);
    if (notifications.list.length === 1) {
        removeNotificationPerInterval = getInterval();
    }
}

export function removeNotificationByIndex(i) {
    notifications.list.splice(i, 1);
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

function removeLastNotification() {
    if (notifications.list.length > 0) {
        notifications.list.pop();
    }

    checkList();
}