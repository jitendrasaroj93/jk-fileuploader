import React from 'react';
import PropTypes from 'prop-types';

const FileUploader = props => {
    return (
        <div style={style.uploaderContainer}>
            FileUploader
        </div>
    );
};

FileUploader.propTypes = {
    allowedTypes: PropTypes.string,
};

const style = {
    uploaderContainer: {
        height: 200,
        width: 700,
        display: "flex",
        background: "#fff",
        color: "#000",
        alignItems: "center",
        justifyContent: "center"
    }
}
export default FileUploader;