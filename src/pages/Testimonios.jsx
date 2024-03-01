import { motion } from "framer-motion";
import React from "react";
import test1 from "../assets/person14.webp";
import stars from "../assets/stars.svg";
import user from "../assets/user.png";
import "../styles/testimonios.css";
export const Testimonios = () => {
  return (
    <div className="testimonios-cnt">
      <div className="testimonios-col">
        <div className="testimonios-title">
          <p>
            Algunos de mis <strong>clientes</strong>
          </p>
          <h2>
            Lleva tu negocio al siguiente nivel usando la poderosisima
            inteligencia artificial
          </h2>
        </div>
      </div>
      <div className="testimonios-col">
        <motion.div
          className="testimonios-card"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="stars">
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={stars} alt="" />
            <img src={stars} alt="" />
          </div>
          <p>
            Impecable experiencia con Francisco. Su capacidad para transformar
            videos ordinarios en obras maestras con IA es simplemente asombrosa.
            ¡Altamente recomendado para aquellos que buscan destacar en la
            creación de contenido audiovisual!
          </p>
          <hr />
          <div className="user">
            <img src={test1} alt="" />
            <label>
              <h2>Joaquin Barrena</h2>
              <p>CEO, The Boo Corp</p>
            </label>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="stars">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
        </div>
        <p>
          Desde que descubrí este mundo, mi experiencia como creador de
          contenido ha alcanzado un nuevo nivel. Sus videos con IA son
          increíblemente efectivos para captar la atención de mi audiencia y
          mejorar la calidad de mis producciones.
        </p>
        <hr />
        <div className="user">
          <img src={user} alt="" />
          <label>
            <h2>Marcos Carvalho</h2>
            <p>Creador de contenido</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="stars">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
        </div>
        <p>
          Fue un gran aliado en mi negocio. Sus videos con IA han generado un
          impacto significativo en mis ventas y en la forma en que mi marca es
          percibida en línea. ¡Definitivamente una inversión que vale la pena!
        </p>
        <hr />
        <div className="user">
          <img src={user} alt="" />
          <label>
            <h2>Cristina Olavarro</h2>
            <p>Creador de contenido</p>
          </label>
        </div>
      </motion.div>
    </div>
  );
};
