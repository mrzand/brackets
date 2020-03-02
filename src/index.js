module.exports = function check(str, bracketsConfig) {
    var bracketsLength = bracketsConfig.length;

    for (var i = 0; i < bracketsLength; ) {
        var brackets = bracketsConfig[i].join("");
        if (str.includes(brackets)) {
            var str = str.replace(brackets, "");
            i = 0;
        } else {
            i++;
        }
    }

    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
};
