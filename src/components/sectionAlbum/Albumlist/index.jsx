import React from 'react';
import PropTypes from 'prop-types';
import Albumitem from '../Albumitem';
import './style.scss';

Albumlist.propTypes = {
    Albumlist: PropTypes.array
};

Albumlist.defaultProps = {
    albumList: [],
}
function Albumlist(props) {
    const albumList1 = props.albumList;
    return (
        <ul className="albums-list">
            {albumList1.map(album => (
                <li key={album.id}>
                    <Albumitem Albumitem={album} />
                </li>
            ))}
        </ul>
    );
}

export default Albumlist;