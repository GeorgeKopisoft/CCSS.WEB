
const Pattern = {
    AlphaNumeric: function() {
        return /^[a-zA-Z0-9-ñÑ]*$/;
    },

    AlphaNumSpaceUTF8: function() {
        return /^[A-Za-z0-9ÁÉÍÓÚáéíóúñÑ., ]+$/;
    },
}

export default Pattern;