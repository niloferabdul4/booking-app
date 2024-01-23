import { useState } from 'react';
import './header.css'
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from 'react-date-range'
import{ useNavigate} from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = ({type}) => {
    const navigate=useNavigate()
    const [destination,setDestination]=useState('')
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,   // options[name] == This will be equivalent to options.adult or children etc
            };
        });
    }
    const handleSearch=()=>{
        navigate('/hotels',{state:{destination,date,options}})
    }
    return (

        <div className="header">
            <div className={type==='list' ? 'headerContainer listMode' : 'headerContainer'}>

                <div className="headerList">
                    <div className="headerListItem active">
                        <HotelIcon />
                        <p>Stays</p>
                    </div>
                    <div className="headerListItem">
                        <FlightIcon />
                        <p>Flights</p>
                    </div>
                    <div className="headerListItem">
                        <DirectionsCarFilledIcon />
                        <p>Car Rentals</p>
                    </div>
                    <div className="headerListItem">
                        <AttractionsIcon />
                        <p>Attractions</p>
                    </div>

                </div>

                {type!=='list' &&
                    <>
                    <h1 className="headerTitle">
                    A lifetime of discounts? It's Genius.
                </h1>
                <p className="headerDesc">
                    Get rewarded for your travels – unlock instant savings of 10% or
                    more with a free Lamabooking account
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <HotelIcon color='primary' />
                        <input type='text'
                         placeholder='where are you going' 
                         className='headerSearchInput'
                         onChange={(e)=>setDestination(e.target.value)} />
                    </div>
                    <div className="headerSearchItem">
                        <CalendarMonthIcon color='primary' />
                        <span className='headerSearchText'
                         onClick={() => { setOpenDate(openDate => !openDate) }}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} )}`}</span>
                        {openDate && (<DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />)
                        }
                    </div>
                    <div className="headerSearchItem">
                        <PersonIcon color='primary' />
                        <span className='headerSearchText'
                            onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} room `}</span>
                        {openOptions &&
                            (<div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton"
                                            disabled={options.adult <= 1}
                                            onClick={() => handleOption('adult', 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton"
                                            onClick={() => handleOption('adult', 'i')}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 0}
                                            className="optionCounterButton"

                                            onClick={() => handleOption('children', 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton"
                                            onClick={() => handleOption('children', 'i')}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton"
                                            disabled={options.room <= 1}
                                            onClick={() => handleOption('room', 'd')}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="optionCounterButton"
                                            onClick={() => handleOption('room', 'i')}
                                        >+</button>
                                    </div>
                                </div>

                            </div>
                            )
                        }
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn"  onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
                </>
}
            </div>
        </div>



    )
}

export default Header
