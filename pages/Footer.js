import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light py-3 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-center text-md-left">
            <p>© 2023 Raofin. All rights reserved.</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-right">
            <p>Github: <a href="https://github.com/Raofin">github.com/Raofin</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;