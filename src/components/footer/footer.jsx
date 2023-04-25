import "../footer/footer.css"

export default function Footer() {
  return (
    <footer className="container text-center">
      <nav className="redesocial mb-3">
        <a
          id="gmail"
          href="mailto:leodkvt@gmail.com"
          target="blank"
          aria-label="link do meu e-mail para contato"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/jose-leonardo-dev-front-end/"
          target="blank"
          aria-label="link do meu Linkedin "
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          id="github"
          href="https://github.com/LeoDKVT"
          target="blank"
          aria-label="link do meu Github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          id="whatsapp"
          href="https://api.whatsapp.com/send?phone=5511939275748"
          target="blank"
          aria-label="link do meu Whatsapp para contato"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </nav>
    </footer>
  );
}
