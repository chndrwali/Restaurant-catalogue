class Drawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  }

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }

  render() {
    this.innerHTML = `
            <style>
            .drawer {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #eee;
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
                z-index: 1;
              }
              
              .drawer.open {
                transform: translateX(0);
              }
              
              .drawer p {
                font-size: 30px;
                margin: 0;
                padding: 20px;
                background-color: #00adb5;
                color: white;
              }
              
              .drawer-list {
                list-style: none;
                margin: 0;
                padding: 0;
                font-size: 20px;
                text-align: center;
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 20px;
              }
              
              .drawer-item {
                display: block;
                padding: 15px 0;
                color: #222;
                text-decoration: none;
              }
              
              .drawer-item:hover {
                background-color: #00adb5;
                color: white;
              }
              
              hr {
                border: none;
                height: 1px;
                margin: 0;
                padding: 0;
                background-color: #ccc;
              }

              .drawer .close-btn {
                 display: block;
                 position: absolute;
                 top: 0;
                 right: 0;
                 padding: 10px;
                 font-size: 20px;
                 color: white;
                 background-color: #222;
                 cursor: pointer
                 min-width: 44px;
                 min-height: 44px;
              }

              .drawer.open .close-btn {
                display: block;
                min-width: 44px;
                min-height: 44px;
              }
              @media screen and (min-width: 768px) {
                .drawer-list {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              
            </style>
            <div class="drawer">
                <p>Jaya Apps</p>
                <button class="close-btn">X</button>
                <ul class="drawer-list">
                    <hr>
                    <li><a class="drawer-item" href="/">Home</a></li>
                    <hr>
                    <li><a class="drawer-item" href="#">Favorite</a></li>
                    <hr>
                    <li><a class="drawer-item" href="https://www.linkedin.com/in/chndrwali/">About Us</a></li>
                    <hr>
                </ul>
            </div>
        `;

    const drawer = this.querySelector('.drawer');
    const toggleButton = document.querySelector('.btnsamping');
    const closeButton = drawer.querySelector('.close-btn');

    if (toggleButton) {
      toggleButton.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
      });
    }

    if (closeButton) {
      closeButton.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    }
    document.addEventListener('click', (event) => {
      if (event.target !== drawer && event.target.closest('.drawer-list') === null) {
        this._closeDrawer(event, drawer);
      }
    });
  }
}

customElements.define('drawer-mobile', Drawer);
