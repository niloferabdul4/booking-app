import './featuredProperties.css'
import featuredProperties from '../../contents/featuredproperties'

const FeaturedProperties = () => {
    return (

        <div className="fp">
            {featuredProperties.map((item,index) => {
                return <>
                    <div key={index} className="fpItem">
                        <img
                            src={item.img}
                            alt=""
                            className="fpImg"
                        />
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                      <span className="fpPrice">{item.price}</span>
                        <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>{item.review}</span>
                        </div>
                    </div>

                </>
            })}

        </div>

    )
}

export default FeaturedProperties
