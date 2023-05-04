class FooterGoks extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style> 
    .footer-container {
          margin-top: 50px;
          background-color: #00ADB5;
          padding: 1.3em;
          text-align: center;
          font-weight: bold;
          color: white;
  }
    </style>
    <div class="footer-container" tabindex="0">
     <span>Submission Front End Expert ke 1 &#169; 2023, Jaya Apps</span> 
     </div>
     `;
  }
}

customElements.define('footer-goks', FooterGoks);
