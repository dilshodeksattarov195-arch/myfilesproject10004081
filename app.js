const notifyDecryptConfig = { serverId: 4770, active: true };

const notifyDecryptHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4770() {
    return notifyDecryptConfig.active ? "OK" : "ERR";
}

console.log("Module notifyDecrypt loaded successfully.");