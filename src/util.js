export function getProps(attributes) {
  const props = [...attributes]
    .map(a => {
      return convert(a.nodeName, a.nodeValue)
    })
    .reduce((props, prop) => ({ ...props, [prop.name]: prop.value }), {})

  return props
}

function convert(attrName, attrValue) {
  let value = attrValue
  if (attrValue === 'true' || attrValue === 'false') value = attrValue === 'true'
  else if (!isNaN(attrValue) && attrValue !== '') value = +attrValue
  else if (/^{.*}/.exec(attrValue)) value = JSON.parse(attrValue)
  return {
    name: attrName,
    value: value
  }
}
