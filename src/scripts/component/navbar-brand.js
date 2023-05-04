class NavbarBrand extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style> nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #00adb5;
          padding: 1.2em;
          color: white;
          width: 100%;
          box-sizing: border-box;
        }
        
        .brand {
          font-size: 30px;
        }
        
        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        li {
          margin: 10px 0;
          display: flex;
          align-items: center;
        }
        
        li:first-child {
          margin-left: 0;
        }
        
        a {
          color: white;
          padding: 1em;
          display: block;
          height: 44px;
        }
        
        .btnsamping {
          display: none;
        }
        
        @media only screen and (max-width: 767px) {
          .brand {
            font-size: 24px;
          }
        
          li {
            margin: 10px 0;
          }
        
          .btnsamping {
            min-width: 44px;
            min-height: 44px;
            border: none;
            display: block;
            font-size: 1.6em;
            color: white;
            cursor: pointer;

          }
        
          ul {
            display: none;
            flex-direction: column;
            padding: 0;
            margin: 0;
            position: absolute;
            top: 4em;
            left: 0;
            width: 100%;
            background-color: #00adb5;
            color: white;
          }
        
          li {
            margin: 0;
          }
        
          li:first-child {
            margin-top: 1em;
          }
        
          a {
            color: white;
          padding: 1em;
          display: block;
          min-width: 44px
          min-height: 44px;
          }
        }
        
        @media only screen and (min-width: 768px) {
          .brand {
            font-size: 30px;
          }
        
          ul {
            display: flex !important;
            flex-direction: row !important;
            align-items: center;
            margin: 0;
            padding: 0;
          }
        
          li {
            margin-left: 20px;
          }
        
          li:first-child {
            margin-left: 0;
          }
        
          .btnsamping {
            display: none;
          }
        }
        
        @media only screen and (min-width: 992px) {
          .brand {
            font-size: 36px;
          }
        
          li {
            margin-left: 30px;
          }
        }
        
          </style>
          <nav>
        <div class="brand">
          <h1>Jaya Apps</h1>
        </div>
        <button class="btnsamping" aria-label="tombol untuk membuka menu samping">☰</button>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Favorite</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chndrwali/">About Us</a>
          </li>
        </ul>
      </nav> 
      `;
  }
}

customElements.define('navbar-brand', NavbarBrand);
