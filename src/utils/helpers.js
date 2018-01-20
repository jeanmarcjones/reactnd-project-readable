export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function uuid () {
  return 'xxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, (c) => {
    let r = Math.random() * 16 | 0,
        v = c === 'x' ? r : ((r & 0x3 )| 0x8)
    return v.toString(16)
  });
}
