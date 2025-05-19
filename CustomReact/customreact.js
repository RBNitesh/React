function customRender(reactElement, container) {
  const domEle = document.createElement(reactElement.type);
  domEle.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    //this line is optional
    if (prop === "children") continue;
    domEle.setAttribute(prop, reactElement.props[prop]);
  }

  //   domEle.setAttribute("href", reactElement.props.href);
  //   domEle.setAttribute("target", reactElement.props.target);

  mainContainer.appendChild(domEle);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
