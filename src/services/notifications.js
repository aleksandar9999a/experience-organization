export let listOfNotifications = [];
let removeNotificationPerInterval = getInterval();

export function addNotification(message) {
    listOfNotifications.unshift(message);
    if (listOfNotifications.length === 1) {
        removeNotificationPerInterval = getInterval();
    }
}

export function removeNotificationByIndex(i){
    listOfNotifications.splice(i, 1);
}

function removeLastNotification() {
    if (listOfNotifications.length > 0) {
        listOfNotifications.pop();
    } else {
        clearInterval(removeNotificationPerInterval);
    }
}

function getInterval() {
    return setInterval(removeLastNotification, 3000);
}