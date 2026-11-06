// AJTech.dev reusable developer branding
// Edit your details and links here.
(() => {
  const config = {
    brand: "AJTech.dev",
    name: "Rana Asad Arshad",
    portfolio: "https://ranaasad-dev.github.io/rana_Asad_Portfolio/",
    github: "https://github.com/ranaasad-dev",
    linkedin: "https://www.linkedin.com/in/rana-asad-arshad-pk/",
    email: "ranaasad.cs17@gmail.com",
    whatsapp: "923401640693"
  };

  function addBranding() {
    // Prevent the feature from being added twice.
    if (document.getElementById("ajtech-branding")) return;

    const container = document.createElement("div");
    container.id = "ajtech-branding";

    container.innerHTML = `
      <style>
        #ajtech-branding {
          font-family: Arial, sans-serif;
        }

        .ajtech-credit {
          padding: 20px;
          text-align: center;
        }

        .ajtech-open {
          padding: 9px 16px;
          border: 1px solid #c9a85c;
          border-radius: 30px;
          background: #10263b;
          color: #fff;
          font: inherit;
          font-size: 14px;
          cursor: pointer;
        }

        .ajtech-open:hover {
          background: #c9a85c;
          color: #10263b;
        }

        .ajtech-dialog {
          width: min(90%, 420px);
          padding: 0;
          border: 1px solid #c9a85c;
          border-radius: 20px;
          background: #10263b;
          color: #fff;
          box-shadow: 0 20px 60px rgba(0, 0, 0, .35);
        }

        .ajtech-dialog::backdrop {
          background: rgba(0, 0, 0, .7);
        }

        .ajtech-content {
          position: relative;
          padding: 32px 24px;
          text-align: center;
        }

        .ajtech-close {
          position: absolute;
          top: 10px;
          right: 15px;
          border: 0;
          background: transparent;
          color: #fff;
          font-size: 28px;
          cursor: pointer;
        }

        .ajtech-content h2 {
          margin: 0 0 8px;
          color: #e2c277;
          font-size: 26px;
        }

        .ajtech-content p {
          margin: 0 0 20px;
          color: #e4e9ef;
          line-height: 1.6;
        }

        .ajtech-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .ajtech-links a {
          padding: 12px 8px;
          border: 1px solid #587085;
          border-radius: 10px;
          background: #19374f;
          color: #fff;
          font-size: 14px;
          text-decoration: none;
        }

        .ajtech-links a:hover {
          border-color: #e2c277;
          background: #244660;
        }

        .ajtech-links a:last-child {
          grid-column: 1 / -1;
        }
      </style>

      <div class="ajtech-credit">
        <button class="ajtech-open" type="button" aria-haspopup="dialog">
          Made by ${config.brand} 💻
        </button>
      </div>

      <dialog class="ajtech-dialog" aria-labelledby="ajtech-title">
        <div class="ajtech-content">
          <button class="ajtech-close" type="button"
                  aria-label="Close developer details">&times;</button>

          <h2 id="ajtech-title">${config.brand}</h2>
          <p>Designed &amp; developed by<br><strong>${config.name}</strong></p>

          <div class="ajtech-links">
            <a href="${config.portfolio}" target="_blank"
               rel="noopener noreferrer">Portfolio</a>

            <a href="${config.github}" target="_blank"
               rel="noopener noreferrer">GitHub</a>

            <a href="${config.linkedin}" target="_blank"
               rel="noopener noreferrer">LinkedIn</a>

            <a href="mailto:${config.email}">Email</a>

            <a href="https://wa.me/${config.whatsapp}" target="_blank"
               rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </dialog>
    `;

    document.body.appendChild(container);

    const dialog = container.querySelector(".ajtech-dialog");
    const openButton = container.querySelector(".ajtech-open");
    const closeButton = container.querySelector(".ajtech-close");

    openButton.addEventListener("click", () => dialog.showModal());
    closeButton.addEventListener("click", () => dialog.close());

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addBranding);
  } else {
    addBranding();
  }
})();
