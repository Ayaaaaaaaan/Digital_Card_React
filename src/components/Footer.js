import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li className="twitter">
          <a
            href="https://twitter.com/AyaanAhmdAnsari"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </li>
        <li className="facebook">
          <a
            href="https://www.facebook.com/ayaan"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li className="instagram">
          <a
            href="https://www.instagram.com/ayaan/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </li>
        <li className="github">
          <a href="https://github.com/Ayaaaaaaaan" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;