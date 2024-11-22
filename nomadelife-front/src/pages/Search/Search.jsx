import styles from "./Search.module.css"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

import PostDetail from "../../components/PostDetail"
import { Link } from "react-router-dom"

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)

    return(
        <div className={styles.search_container}>
            <h1>Resultados encontrados para: {search}</h1>
            <div className="posts-list">
                {posts && posts.lenght === 0 &&(
                    <>
                    <p>Não foram encontradas posts a partir da sua busca...</p>
                     <Link to="/" className="btn btn-dark">
                        voltar
                    </Link>
                    </>
                )}
                {posts && posts.map((posts) => <PostDetail key={posts.id} post={post} />)}
            </div>
        </div>
    )
}

export default Search