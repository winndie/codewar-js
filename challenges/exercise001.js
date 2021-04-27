function isPangram(sentence) {
  return 'abcdefghijklmnopqrstuvwxyz'
         .split('')
         .every(v=>sentence
                   .toLowerCase()
                   .indexOf(v)>-1)
}

module.exports = {
  isPangram
}
