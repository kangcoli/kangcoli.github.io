var MeitanteiJSKudoJson = {
  'stringify': function (cipherParams) {
    var j = { ct: cipherParams.ciphertext.toString(MeitanteiJS.enc.Base64) }
    if (cipherParams.iv) j.iv = cipherParams.iv.toString()
    if (cipherParams.salt) j.s = cipherParams.salt.toString()
    return JSON.stringify(j).replace(/\s/g, '')
  },
  'parse': function (jsonStr) {
    var j = JSON.parse(jsonStr)
    var cipherParams = MeitanteiJS.lib.CipherParams.create({ ciphertext: MeitanteiJS.enc.Base64.parse(j.ct) })
    if (j.iv) cipherParams.iv = MeitanteiJS.enc.Hex.parse(j.iv)
    if (j.s) cipherParams.salt = MeitanteiJS.enc.Hex.parse(j.s)
    return cipherParams
  }
}
