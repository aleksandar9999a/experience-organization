export default function timestampConverter(timestamp) {
    const date = timestamp.toDate();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}