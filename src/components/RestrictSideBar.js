import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const RestrictSideBar = ({children}) => {

    const location = useLocation()
    const [showSideBar, setShowSideBar] = useState(false)
    useEffect(() => {
        console.log("This is location", location);
        if(location.pathname === '/address'){
            setShowSideBar(false)
        }else{
            setShowSideBar(true)
        }
    }, [location])
    return (
        <div>{showSideBar && children}</div>
    )
}

RestrictSideBar.propTypes = {
    props: PropTypes.any,
    trigger: PropTypes.bool,
    children: PropTypes.object,
    setTrigger: PropTypes.func,
    text2: PropTypes.string,
    text3: PropTypes.string,
};

export default RestrictSideBar
