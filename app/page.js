'use client'

import { useState } from "react"

//secciones de la pagina principal
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Description from "@/components/Description"
import Products from "@/components/Products"
import Review from "@/components/Review"
import Footer from "@/components/Footer"
//informacion de los productos
import store from "./store.json"

const Page = () => {
  //Numero de productos en el carrito
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  const addToTheCart = (data) => {
    setCart([...cart, data])
    setTotal(total + data.precio)
  }

  return(
    <div>
      <Hero count={cart.length} cartList={cart} total={total}/>
      <Features />
      <Description />
      <Products store={store} addToTheCart={addToTheCart} />
      <Review />
      <Footer />
    </div>
  )
}

export default Page