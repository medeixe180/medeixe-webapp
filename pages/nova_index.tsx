import type { NextPage } from 'next';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faAppStore, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: NextPage = () => {
  return (
    <div>

      <header className={"header"}>
        <nav className={"navbar navbar-light navbar-expand-lg fixed-top"} id={"navbar"}>
          <div className={"container"}>
            <a className={"navbar-brand"} href={"nova_index"}>
              <img src={"img/logo.svg"} alt={""} width={110}/>
            </a>
            <button className={"navbar-toggler navbar-toggler-end"} type={"button"} data-bs-toggle={"collapse"} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={ faBars } />
            </button>
            <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link link-scroll active" href="#hero">Home <span className="sr-only">(current)</span></a></li>
                <li className="nav-item"><a className="nav-link link-scroll" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link link-scroll" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link link-scroll" href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className={"hero bg-top py-5"} id={"hero"} style={{ background: "url(img/banner-4.png) no-repeat", backgroundSize: "100% 80%" }}>
        <div className={"container py-5"}>
          <div className={"row py-5"}>
            <div className={"col-lg-5 py-5"}>
              <h1>Download your best app</h1>
              <p className={"my-4 text-muted"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
              <ul className={"list-inline mb-0"}>
                <li className={"list-inline-item mb-2 mb-lg-0"}>
                  <a className={"btn btn-primary btn-lg px-4"} href="#!">
                    <FontAwesomeIcon icon={ faGooglePlay } className={"me-3"} />
                    Google Play
                  </a>
                </li>
                <li className={"list-inline-item"}>
                  <a className={"btn btn-primary btn-lg px-4"} href="#!">
                    <FontAwesomeIcon icon={ faAppStore } className={"me-3"} />
                    App Store
                  </a>
                </li>
              </ul>
            </div>
            <div className={"col-lg-6 ml-auto"}>
              <div className={"device-wrapper mx-auto"}>
                <div className={"device shadow"} data-device="iPhoneX" data-orientation="portrait" data-color="white">
                  <div className={"screen"}>
                    <img className={"img-fluid"} src="img/mobile.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ height:"500px"}}>QUalquer coisa...</section>

    </div>
  )
}

export default Home
