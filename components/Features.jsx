import Cards from './Cards'
import Offers from '@/assets/offers.png'
import quality from '@/assets/quality.png'
import categories from '@/assets/categories.png'

const Features = () => {
    return(
        <div className='featuresDiv'>
            <div>
                <Cards 
                title={'PRECIOS'} 
                text={'los buenos precios brillan como las estrellas en el cielo nocturno.'} 
                icon={Offers}
                size={40}/>
            </div>
            <div>
                <Cards 
                title={'CALIDAD'} 
                text={'La calidad tan elevada como el infinito espacio, siempre en busca de la excelencia.'} 
                icon={quality}
                size={70}/>
            </div>
            <div>
                <Cards 
                title={'VARIEDAD'} 
                text={'Descubre una galaxia de opciones en nuestra selección de productos.'} 
                icon={categories}
                size={108}/>
            </div>
        </div>
    )
}

export default Features