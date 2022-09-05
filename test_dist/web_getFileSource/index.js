var GET_FILE_SOURCE = {
    accept: ['*'],
};
function web_getFileSource(config) {
    if (config === void 0) { config = {}; }
    var rConfig = Object.assign({}, GET_FILE_SOURCE, config);
    return new Promise(function (resolve, reject) {
        var fileInput = document.createElement('input');
        fileInput.accept = rConfig.accept.join(',');
        fileInput.type = 'file';
        fileInput.onchange = function (val) {
            var fileReader = new FileReader();
            var file = fileInput.files.item(0);
            if (!file) {
                reject('未选择文件');
                return;
            }
            fileReader.readAsDataURL(file);
            fileReader.onload = function () {
                resolve({ text: fileReader.result, file: file });
            };
            return;
        };
        fileInput.click();
    });
}

export { web_getFileSource };
