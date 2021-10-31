import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Albumitem.propTypes = {
    albumItem2: PropTypes.object.isRequired,
};

function Albumitem( props) {
    const albumItem2 = props.Albumitem;
    return (
        <div>
            <div className="album-item">
                <div className="album-img">
                    <img src={albumItem2.imgURL} alt={albumItem2.name} />
                </div>
                <p className="album-name">{albumItem2.name}</p>
            </div>
        </div>
    );
}

export default Albumitem;