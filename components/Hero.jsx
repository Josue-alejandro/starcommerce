import { useState } from "react"
import Image from "next/image"
import Stars from '@/assets/stars.png'
import Shop from '@/assets/shop.png'
import Cart from "@/components/Cart"
import menu from "@/assets/menu.png"

const Hero = (props) => {
    const [cartShow, useCartShow] = useState(false)
    const [menuShow, useMenuShow] = useState(false)
    return(
        <div className="heroDiv" id="home">
            <div>
                <nav>
                    <ul className="navList">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Sobre Nosotros</a></li>
                        <li><a href="#products">Productos</a></li>
                        <li><a href="#review">Reseñas</a></li>
                        <li onClick={() => useCartShow(!cartShow)}><Image width={25} src={Shop} /></li>
                        <div className="notificationBubble">{props.count}</div>
                    </ul>
                    <div className="mobileIcon">
                        <Image width={50} src={menu} onClick={()=> useMenuShow(!menuShow)} />
                    </div>
                    {menuShow ? 
                    <div className="mobileMenu">
                            <ul className="mobileList">
                            <a className="linkMenu" href="#home"><li>Inicio</li></a>
                            <a className="linkMenu" href="#about"><li>Sobre Nosotros</li></a>
                            <a className="linkMenu" href="#products"><li>Productos</li></a>
                            <a className="linkMenu" href="#review"><li>Reseñas</li></a>
                            </ul>
                    </div>
                    : null
                    }
                </nav>
            </div>
            <div className="titleDiv">
                <div className="rectangle">
                    <h1 className="titleName">Galaxy Styles</h1>
                    <div>
                        <Image className="separatorTitle" src={Stars} />
                    </div>
                    <h2>A New Horizon</h2>
                </div>
            </div>
            {cartShow ? <Cart count={props.count} cartList={props.cartList} total={props.total}/> : null}
        </div>
    )
}

export default Hero