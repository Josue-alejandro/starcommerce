import Image from "next/image"
import Review1 from '@/assets/review1.jpg'

const Review = () => {
    return(
        <div className="reviewDiv" id="review">
            <h2 className="reviewTitle">Nuestros Clientes</h2>
            <div className="review">
                <Image className="pic" src={Review1} width={140} />
                <p className="reviewText">
                Es una tienda de moda con un estilo realmente único. Su selección de prendas de diseñadores emergentes y su atención al detalle la hacen destacar en el mundo de la moda.
                </p>
                <div className="underImageSeparator">
                <div className="dot"></div>
                <div className="midlane"></div>
                <div className="dot"></div>
              </div>
            </div>
        </div>
    )
}

export default Review