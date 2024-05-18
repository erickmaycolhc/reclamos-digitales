export default function reducer(state = any, action) {
  const { type, payload } = action;
  const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
  let data = [];
  const getChunksFromString = (st, chunkSize) =>
    st.match(new RegExp(`.{${chunkSize}}`, "g"));
  const convertHexUnitTo256 = (hexStr) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
  const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") {
      return a / 255;
    }
    if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
      return 1;
    }
    return alpha;
  };

  function primaryOpacityVaue() {
    let primaryColorVal = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary-bg-color")
      .trim();
    //get variable
    let myVarVal =
      localStorage.getItem("SpruhaprimaryColor") ||
      localStorage.getItem("SpruhadarkPrimary") ||
      primaryColorVal;

    let colorData05 = hexToRgba(myVarVal || primaryColorVal, 0.05);
    document
      .querySelector("html")
      .style.setProperty("--primary005", colorData05);

    let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2);
    document.querySelector("html").style.setProperty("--primary02", colorData1);

    let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3);
    document.querySelector("html").style.setProperty("--primary03", colorData2);

    let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.5);
    document.querySelector("html").style.setProperty("--primary05", colorData5);

    let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.7);
    document.querySelector("html").style.setProperty("--primary07", colorData3);

    let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.8);
    document.querySelector("html").style.setProperty("--primary08", colorData4);

    let colorData6 = hexToRgba(myVarVal || primaryColorVal, 0.1);
    document.querySelector("html").style.setProperty("--primary01", colorData6);

    let colorData9 = hexToRgba(myVarVal || primaryColorVal, 0.9);
    document.querySelector("html").style.setProperty("--primary09", colorData9);
  }
}
