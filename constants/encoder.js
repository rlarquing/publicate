import Base64 from "./base64";

const encodeText = (message) => {
    let encryptedMessage = Base64.encode(message);
    // console.log(encryptedMessage);
    return encryptedMessage;
}

const decodeText = (encryptedMessage) => {
    let message = Base64.decode(encryptedMessage);
    // console.log(message);
    return message;
}

export default {
    encodeText,
    decodeText
}