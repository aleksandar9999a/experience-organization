export let listOfNotifications = [];
let removeNotificationPerInterval = getInterval();

export function addNotification(message) {
    listOfNotifications.splice(1, 0, message);
    if (listOfNotifications.length === 1) {
        removeNotificationPerInterval = getInterval();
    }
}

export function removeNotificationByIndex(i) {
    listOfNotifications.splice(i, 1);
    checkList();
}

function removeLastNotification() {
    if (listOfNotifications.length > 0) {
        listOfNotifications.splice(listOfNotifications.length, 1);
    }

    checkList();
}

function checkList() {
    if (listOfNotifications.length === 0) {
        clearInterval(removeNotificationPerInterval);
    }
}

function getInterval() {
    return setInterval(removeLastNotification, 4000);
}