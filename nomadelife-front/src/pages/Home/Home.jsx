import styles from './Home.module.css'
import logo from '/logo-quadrada.png'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'

import  PostDetail from '../../components/PostDetail'

const Home = () => {
  const { document: posts, loading } = useFetchDocuments("posts")

  const navigate = useNavigate()

  const [query, setQuery] = useState("")

  const handlerSubmit = (e) => {
    e.preventDefault()

    if(query){
      return navigate('/search?q=${query}')
    }
  }

  console.log(loading)

  return (
    <div className='{styles.home}'>
      <h1>veja os nossos posts recentes</h1>
      <form className={styles.search_form} onSubmit={handlerSubmit}>
        <input type='text'
          placeholder='Busque posts aqui'
          onChange={(e)=>setQuery(e.target.value)}
        />
      </form>
      <div className='post-list'>
        {loading && <p>Carregando...</p>}
        {post && post.lenght === 0 &&(
          <div className={styles.noposts}>Não encontramos postagens
          <Link to={"/posts/create"} className='btn'>
            Crie Este Post
          </Link>
          </div>
        )}
        {posts && posts.map((post)=><PostDetail key={post.id} post={post}/>)}
      </div>
    </div>
  )
}

export default Home