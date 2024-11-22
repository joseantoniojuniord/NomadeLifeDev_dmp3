import styles from "./About.module.css"

import { Link } from "react-router-dom"
 
const About = () => {
  return (
    <div className={styles.About}>
       <h2>
          sobre o Mini <span>Blog</span>Developer 
       </h2>
       <p>
        Projeto criado para servir como base para aprendizagem de React, no terceiro do curso de Desenvolvimento de Sistemas Da fatec Matão
       </p>
       <Link to="/posts/create" className="btn">
        Criar Post
       </Link>
    </div>
  )
}

export default About