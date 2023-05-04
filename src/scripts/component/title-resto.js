class TitleResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style> 
        .page-title {
            text-align: center;
            margin-bottom: 50px;
            margin-top: 50px;
          }
         </style>
        <h1 class="page-title">List Restaurant Indonesia</h1>`;
  }
}

customElements.define('title-resto', TitleResto);
