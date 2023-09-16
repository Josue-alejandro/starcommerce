import Image from "next/image"

const Cart = (props) => {
    return(
        <div className="carritoDiv">
            <div className="carritoHeader">
                <h2>Carrito</h2>
                <p>{props.count} Items</p>
            </div>
            <div className="productsList">
                <div className="item">
                    <p className="compesation"><b></b></p>
                    <p><b>Producto</b></p>
                    <p><b>Precio</b></p>
                </div>
                {props.cartList.map((li) => (
                    <div className="item" key={li.producto}>
                        <Image alt={li.producto} width={150} height={150} src={li.img} />
                        <p>{li.producto}</p>
                        <p>{li.precio}</p>
                    </div>
                ))}
            </div>
            <div className="totalPrice">
                <p><b>Total: ${props.total.toFixed(2)}</b></p>
            </div>
        </div>
    )
}

export default Cart