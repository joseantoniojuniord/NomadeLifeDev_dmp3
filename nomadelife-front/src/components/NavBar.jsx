import { NavLink } from "react-router-dom"
import { useAuthentication } from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"
import React from 'react'
import styles from './NavBar.module.css'
 
 
const NavBar = () => {
  const { logout } = useAuthentication()
  const { user } = useAuthValue()
  console.log(user)
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          Nomade <span>DEV</span>
        </div>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/" className={(({ isActive }) => (isActive ? styles.active : ""))}>
              Home
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink to="/login" className={(({ isActive }) => (isActive ? styles.active : ""))}>
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className={(({ isActive }) => (isActive ? styles.active : ""))}>
                  Register
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink to="/post/create" className={(({ isActive }) => (isActive ? styles.active : ""))}>
                  Novo Post
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={(({ isActive }) => (isActive ? styles.active : ""))}>
                  Dashboard
                </NavLink>
              </li>
                <NavLink to="/about" className={(({ isActive }) => (isActive ? styles.active : ""))}>
                    Sobre
                </NavLink>
              <li>
                <button onClick={logout} className={styles.exit}>
                  Sair
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}
 
export default NavBar