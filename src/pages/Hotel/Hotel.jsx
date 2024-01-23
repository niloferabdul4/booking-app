import './hotel.css'
import hotelImages from '../../contents/hotelImages.'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CancelIcon from '@mui/icons-material/Cancel';

import { useState } from 'react'
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openSlide, setOpenSlide] = useState(false)
  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpenSlide(true)
  }
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'prev') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    
    }
    else if (direction === 'next') {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
      
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {openSlide && <div className='slider'>
          <CancelIcon className='close' onClick={() => { setOpenSlide(openSlide => !openSlide) }} />
          <ArrowCircleLeftIcon fontSize='large' className='arrow' onClick={() => { handleMove('prev') }} />
          <div className="sliderWrapper">
            <img src={hotelImages[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <ArrowCircleRightIcon fontSize='large' className='arrow' onClick={() => { handleMove('next') }} />
        </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <LocationOnIcon />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {hotelImages.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
