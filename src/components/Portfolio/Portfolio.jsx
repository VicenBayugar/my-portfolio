import React from "react";
import "./Portfolio.css";
import AppleStore from "../../assets/applestore.jpg";
import Ecommerce from "../../assets/ecommerce.jpg";
import TodoRubro from "../../assets/todorubro.jpg";
import CRUD from "../../assets/crud.jpg";
import NC from "../../assets/nccinema.jpg";
import MyPortfolio from "../../assets/portfolio.jpg";
import weatherapp from "../../assets/weatherapp.jpg";
import todolist from "../../assets/todolist.jpg";
import reserbar from "../../assets/reserbar.jpg";
import usersapi from "../../assets/usersapi.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={reserbar} alt="" width={640} height={360} />
          </div>
          <h3>ReserBar</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/ReserBar"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://reserbar.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={usersapi} alt="" width={640} height={360} />
          </div>
          <h3>Users API</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/Users-API"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://documenter.getpostman.com/view/21281685/Uz5Gmb6y"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={weatherapp} alt="" width={640} height={360} />
          </div>
          <h3>WeatherApp</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/weather-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://expo.dev/@vicenbayugar/weather-app?serviceType=classic&di"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={NC} alt="" width={640} height={360} />
          </div>
          <h3>NC Cinema</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/NC-Cinema"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://nccinema.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={AppleStore} alt="" width={640} height={360} />
          </div>
          <h3>AppleStore</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/proyecto-react-coder"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://appstorevbayugar.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={todolist} alt="" width={640} height={360} />
          </div>
          <h3>Shopping List</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/react-native-lista-compras"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={MyPortfolio} alt="" width={640} height={360} />
          </div>
          <h3>My Portfolio</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/my-portfolio"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={Ecommerce} alt="" width={640} height={360} />
          </div>
          <h3>Electronic Store</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/e-commerce-react"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://ecommerbayugar.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={TodoRubro} alt="" width={640} height={360} />
          </div>
          <h3>TodoRubro - Ecommerce</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/javascript-project"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://vicenbayugar.github.io/javascript-project/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={CRUD} alt="" width={640} height={360} />
          </div>
          <h3>CRUD</h3>
          <div className="portfolio_item_links">
            <a
              href="https://github.com/VicenBayugar/CRUD"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://listadotareasvb.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
