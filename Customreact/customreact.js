function customRender(reactElement, container) {
  /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=domElement.child
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
*/
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.child;
  for (const prop in reactElement.props) {
    if (prop === "children") continue
      domElement.setAttribute(prop, reactElement.props[prop]);
    
    container.appendChild(domElement)
  }
  
}

const reactElement = {
  type: 'a',
  props: { href: "https://google.com", target: "_blank" },
  child: 'This is lord shiva devote webpage'
}

const mainContainer = document.querySelector("#root")
customRender(reactElement, mainContainer)
