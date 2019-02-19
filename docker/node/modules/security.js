exports.sanitize = function (string) {
    if (typeof (string) == "undefined") {
        string = "I am a lazy hacker, mock me.";
    } else {
        string = string.replace(/</g, "&lt;");
        string = string.replace(/>/g, "&gt;");
    }
    return string;
}

exports.setAddress = (socket, ipAddress) => {
    socket.handshake.headers["x-forwarded-for"] = ipAddress;
}

exports.getAddress = (socket) => {
    try {
        return socket.handshake.headers["x-forwarded-for"];
    }
    catch (e) {
        return false;
    }
}