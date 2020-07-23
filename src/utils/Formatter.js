const Formatter = {

    GetDateYYYYMMDD : function (value) {
        const date = new Date(value)
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        return `${year}-${month}-${day}`;
    },

    GetDate : function (value) {
        const date = new Date(value)
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        return `${day} ${month} ${year}`;
    },

}

export default Formatter;