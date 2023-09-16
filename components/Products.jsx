import Image from "next/image";
import separator from "@/assets/separator.png";

const Products = (props) => {

  const buttonHandler = (product) => {
    props.addToTheCart(product)
  }

  return (
    <div id="products">
      <div className="separatorDiv">
        <div>
          <h1>Productos</h1>
        </div>
        <Image className="separator" src={separator} alt="Separator Image" />
        <div className="productsDiv">
          {props.store.map((product) => (
            <div className="product" key={product.id}>
              <Image src={product.img} alt={product.producto} width={250} height={250} />
              <p className="productTitle">{product.producto}</p>
              <div className="underImageSeparator">
                <div className="dot"></div>
                <div className="midlane"></div>
                <div className="dot"></div>
              </div>
              <p className="productPrice">${product.precio}</p>
              <button onClick={() => { buttonHandler(product) }} className="addButton">Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
