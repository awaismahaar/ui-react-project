import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="nav_bar">
        <div
          className="logo" >
          WDM
          <div>
            
          </div>
        </div>
        <div
          className="search">
          <div className="left">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
           Search here...
          </div>
          <div className="right">
          <FontAwesomeIcon icon={faArrowDownWideShort} />
             Filters
          </div>
        </div>
        <div
          className="seller"    >
          Become a Seller
        </div>
      </div>
  )
}

export default Navbar