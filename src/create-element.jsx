// const createElement = (tagName, attrs = {}, ...children) => {
//   if (tagName === 'fragment') return children;
//   const elem = Object.assign(document.createElement(tagName), attrs)
//   children.map(child => {
//     if (Array.isArray(child)) {
//       elem.append(...child)
//     } else {
//       elem.append(child)
//     }
//   })
//   return elem;
// }
//
// export default createElement;


export const createElement = (tag, props, ...children) => {
  if (typeof tag === "function") return tag(props, children)

  const element = document.createElement(tag)

  Object.entries(props || {}).forEach(([name, value]) => {
    element.setAttribute(name, value.toString())
  })

  children.forEach(child => {
    appendChild(element, child);
  });

  return element
}

const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach(nestedChild => appendChild(parent, nestedChild));
  else
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

export default createElement;