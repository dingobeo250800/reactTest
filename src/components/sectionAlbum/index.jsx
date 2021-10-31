import React from 'react';
import PropTypes from 'prop-types';
import img1 from "../../assets/img/IMG_5560.JPG"
import Albumlist from './Albumlist';


function Albumn(props) {
    const albumList = [
        {
            id: 1,
            name: "ảnh 1",
            imgURL: "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        }, {
            id: 2,
            name: "ảnh 2",
            imgURL: "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        }, {
            id: 3,
            name: "ảnh 3",
            imgURL: "https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <Albumlist albumList = {albumList} />
        </div>
    );
}

export default Albumn;