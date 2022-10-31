export class Component {
  constructor(tagRenderId, isRendered = true) {
    this.tagRenderId = tagRenderId;

    if (isRendered) {
      this.render();
    }
  }

  render() {
    console.log('Calling method render...');
  }

  createRootElement(tag, cssClass, attributes) {
    const rootElement = document.createElement(tag);

    if (cssClass) {
      rootElement.className = cssClass;
    }

    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        // {name: "..", value: "..."}
        rootElement.setAttribute(attribute.name, attribute.value);
      }
    }

    document.getElementById(this.tagRenderId).append(rootElement);

    return rootElement;
  }
}
