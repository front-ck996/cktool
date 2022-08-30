function web_getFileSource(){
  const fileInput = document.createElement('input');
  fileInput.accept = '';
  fileInput.onchange = function (){

  };
  fileInput.click();
}

export { web_getFileSource };
