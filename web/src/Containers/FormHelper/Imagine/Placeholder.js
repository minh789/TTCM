import React from "react";
import PropTypes from "prop-types";
import { MdCloudUpload } from "react-icons/md";
import Typography from '@material-ui/core/Typography';

const Placeholder = ({ getInputProps, getRootProps, error, touched }) => (
  <div
    {...getRootProps()}
    className={`placeholder-preview ${error && touched ? "has-error" : ""}`}
  >
    <input {...getInputProps()} />
    <MdCloudUpload style={{ fontSize: 150 }} />
    <Typography style={{ fontSize: 30 }}>
    Chọn ảnh
    </Typography>
  </div>
);

Placeholder.propTypes = {
  error: PropTypes.string,
  getInputProps: PropTypes.func.isRequired,
  getRootProps: PropTypes.func.isRequired,
  touched: PropTypes.bool
};

export default Placeholder;
