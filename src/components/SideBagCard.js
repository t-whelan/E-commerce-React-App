import PropTypes from "prop-types";

const SideBagCard = ({ item }) => {
    return (
        <div className="bag-item">
            <img src={item.image} alt="" className="small-item"/>
        </div>
                        
    )
}

SideBagCard.propTypes = {
    item: PropTypes.object,
    productImageName: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
  };

export default SideBagCard