export function web_getFileSource(){
  const fileInput = document.createElement('input')
  fileInput.accept = '.docx'
  fileInput.type = 'file'
  fileInput.onchange = function (val :Event){
    const fileReader = new FileReader()
    console.log(val)
  }
  fileInput.click()
}
