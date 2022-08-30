function web_getFileSource(){
  return new Promise((resolve, reject) => {
    const fileInput = document.createElement('input')
    fileInput.accept = '.docx,.xlsx,.doc'
    fileInput.type = 'file'
    fileInput.onchange =  (val) => {

      console.dir(val, fileInput)
    };
    fileInput.click();
  })
}

export { web_getFileSource };
