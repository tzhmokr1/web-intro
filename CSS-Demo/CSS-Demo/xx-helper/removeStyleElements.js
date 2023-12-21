function removeAllStyleElements () {
  const styleElements = document.getElementsByTagName("style");
  for (styleElement of styleElements) {
    styleElement.parentElement.removeChild(styleElement)
  }
}