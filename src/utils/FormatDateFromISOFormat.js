export function FormatDateFromISOFormat(ISO_date){
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric'
    };
    let date = new Date(ISO_date)
    return date.toLocaleString("en-US", options)
}
