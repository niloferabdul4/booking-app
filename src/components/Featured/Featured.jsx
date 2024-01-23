import './featured.css'
import featuredItems from '../../contents/featuredItems'
const Featured = () => {

    return (

        <div className="featured">
            {featuredItems.map((item, index) => {
                return <>
                    <div key={index} className="featuredItem">
                        <img
                            src={item.img}
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h2>{item.title}</h2>
                            <h3>{item.agency}</h3>
                        </div>
                    </div>



                </>
            })}

        </div>
    )
}

export default Featured
