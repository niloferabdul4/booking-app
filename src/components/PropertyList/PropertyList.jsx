import React from 'react'
import propertyItems from '../../contents/propertyItems'
import './propertyList.css'

const PropertyList = () => {
    return (

        <div className="pList">
            {propertyItems.map((item, index) => {
                return <>
                    <div key={index} className="pListItem">
                        <img
                            src={item.img}
                            alt=""
                            className="pListImg"
                        />
                        <div className="pListTitles">
                            <h1>{item.type}</h1>
                            <h2>{item.agency}</h2>
                        </div>
                    </div>
                </>
            })}

        </div>

    )
}

export default PropertyList
