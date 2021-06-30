function handleCreateQrCode() {
  var text = document.getElementById("url")

  var blackSvg = createQrCodeByColor(true).svg()
  var whiteSvg = createQrCodeByColor(false).svg()
  document.getElementById('qrcode_black').innerHTML = blackSvg
  document.getElementById('qrcode_white').innerHTML = whiteSvg
  document.getElementById('buttons-container').classList.remove("buttons-container-hidden")
  
  function createQrCodeByColor(isBlack) {
    return new QRCode({
      content: text.value,
      padding: 4,
      width: 256,
      height: 256,
      color: isBlack ? "#FFFFFF" : "#000000",
      background: isBlack ? "#000000" : "#FFFFFF",
      ecl: "M",
    });
  }
}

function downloadSVGAsText(isBlack) {
  const svg = document.getElementsByTagName("svg")[isBlack ? 0 : 1]
  const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
  const a = document.createElement('a');
  const e = new MouseEvent('click');
  a.download = 'download.svg';
  a.href = 'data:image/svg+xml;base64,' + base64doc;
  a.dispatchEvent(e);
}