import Image from "next/image"
import man from '@/assets/man.jpg'

const Description = () => {
    return(
        <div className="descriptionDiv" id="about">
            <div className="descriptionInnerDiv">
                <div>
                    <div className="imageContainer">
                    <Image alt="hombreDescripcion" width={220} src={man}/>
                    </div>
                </div>
                <div>
                    <h2>Sobre Nosotros</h2>
                    <p className="descriptionText">
                    En nuestra tienda de ropa, el sueño del creador se hizo realidad al fusionar su pasión por la moda con su fascinación por el universo. Cada prenda y diseño que encontrarás aquí es una manifestación de ese amor dual, donde la moda se convierte en una constelación de estilo y elegancia. Nuestro objetivo es llevar a cada cliente a un viaje estelar a través de la moda, permitiéndoles brillar con su propia luz mientras descubren la belleza de las estrellas en cada detalle de nuestras colecciones. ¡Bienvenidos a nuestro cosmos de la moda!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description