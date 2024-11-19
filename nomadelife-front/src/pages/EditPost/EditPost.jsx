import styles from "./EditPost.module.css"

import { useState, useEffect } from "react"
import { useNavigate,useParams } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { userFetchDocument } from "../../hooks/useFetchDocument"
import { userUpdateDocument } from "../../hooks/useUpdateDocument"

const EditPost = () =>{
    const { id } = useParams()
    const { document: post } = userFetchDocument("post")
}