import Background from '../../public/images/heros/hero-image_3.jpg';

class JumbotronBg extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <style> 
        .jumbotron {
          background-image: url('${Background}');
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .containers {
          text-align: center;
          color: rgba(255, 255, 255, 0.63);
        }
        
        .containers h2 {
          font-size: 50px;
          color: #eeeeee;
          margin-bottom: 20px;
        }
        
        .containers p {
          font-size: 30px;
          line-height: 1.5;
          color: #eeeeee;
        }
        
        @media only screen and (max-width: 767px) {
          .jumbotron {
            height: 50vh;
          }
        
          .containers h2 {
            font-size: 30px;
          }
        
          .containers p {
            font-size: 20px;
          }
        }
        
        @media only screen and (min-width: 768px) and (max-width: 1023px) {
          .jumbotron {
            height: 60vh;
          }
        
          .containers h2 {
            font-size: 40px;
          }
        
          .containers p {
            font-size: 25px;
          }
        }
        
        @media only screen and (min-width: 1024px) {
          .jumbotron {
            height: 70vh;
          }
        
          .containers h2 {
            font-size: 50px;
          }
        
          .containers p {
            font-size: 30px;
          }
        }
         </style>
          <div class="jumbotron">
        <div class="containers">
          <h2>Jaya Apps</h2>
          <p>Sebuah Web Untuk Melihat Restaurant Terbaik di INDONESIA</p>
        </div>
      </div>`;
  }
}

customElements.define('jumbotron-bg', JumbotronBg);
