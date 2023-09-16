import Image from "next/image"

const Cards = (props) => {
    return(
        <div className="Card-Star">
            <div className="inner-Card">
                <div className="card-item">
                    <Image width={props.size} src={props.icon} />
                </div>
                <div className="card-item">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-item">
                    <p className="featureDescription">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards