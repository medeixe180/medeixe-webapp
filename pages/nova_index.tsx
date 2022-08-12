import type { NextPage } from 'next';
import Head from 'next/head';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Me Deixe!</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all,follow" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

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

      <section className={"hero bg-top py-5"} id={"hero"} >
      </section>

    </div>
  )
}

export default Home
