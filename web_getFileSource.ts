const GET_FILE_SOURCE = {
  accept: ['*'],
}

export function web_getFileSource(config = {}){
  const rConfig = Object.assign({}, GET_FILE_SOURCE, config)
  return new Promise((resolve, reject) => {
    const fileInput = document.createElement('input')
    fileInput.accept = rConfig.accept.join(',')
    fileInput.type = 'file'
    fileInput.onchange = function (val){
      const fileReader = new FileReader()
      const file = fileInput.files.item(0)
      if (!file){
        reject('未选择文件')
        return;
      }
      fileReader.readAsDataURL(file)
      fileReader.onload = function (){
        resolve({text: fileReader.result, file: file})
      }
      return;
    }
    fileInput.click()
  })
}
