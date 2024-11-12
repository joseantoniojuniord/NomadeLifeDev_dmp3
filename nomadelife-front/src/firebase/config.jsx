import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCHLV2KC5Zr3Xrz4uWqVRgVbEcZhMTKIaw",
  authDomain: "nomadelife-jl.firebaseapp.com",
  projectId: "nomadelife-jl",
  storageBucket: "nomadelife-jl.firebasestorage.app",
  messagingSenderId: "982981949102",
  appId: "1:982981949102:web:faa63deab5ab44a8aa9f3f",
  measurementId: "G-CJXM2M55LW"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}