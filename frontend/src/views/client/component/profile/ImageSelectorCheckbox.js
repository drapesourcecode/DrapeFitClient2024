import PropTypes from 'prop-types';
import { FormControl, FormHelperText, FormControlLabel, Checkbox, Typography, Grid, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import DFnewImgTag from 'utils/DFnewImgTag';
import GenS3Link from 'utils/GenS3Link';

const ImageSelectorCheckbox = (props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {props.content?.title && (
            <Typography className="basic-info-title">
              {props.content?.title} {props.content?.mandatory && <span style={{ color: 'red' }}>*</span>}
            </Typography>
          )}
          {props.content?.subtitle && (
            <Typography className="basic-info-title-gray">{props.content?.subtitle}</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            {props.touched[`${props.name}`] && props.errors[`${props.name}`] && (
              <FormHelperText id="standard-weight-helper-text--signup" error>
                {props.errors[`${props.name}`]}
              </FormHelperText>
            )}
            <Grid container spacing={1} className="custom-hidden-image-checkbox">
              {props.content?.gallery.map((item, index) => (
                <Grid key={index} item xs={6} sm={3} xl={2.4}>
                  {item?.title && <Typography className="basic-info-sub-title">{item?.title}</Typography>}
                  <FormControlLabel
                    control={
                      <Checkbox
                        disabled={props.disabled}
                        onBlur={props.handleBlur}
                        value={index + 1}
                        onChange={props.handleChange}
                        name={props.name}
                      />
                    }
                    label={
                      <Box
                        component="div"
                        className="body-shape-box"
                        style={{ borderColor: props?.value?.includes(`${index + 1}`) ? '#ff6c00' : '#eee' }}
                      >
                        <FontAwesomeIcon
                          className="check-icon"
                          icon={faCircleCheck}
                          style={{ display: props?.value?.includes(`${index + 1}`) ? 'block' : 'none' }}
                        />

                        <DFnewImgTag
                          src={`${GenS3Link(item.image)}.webp`}
                          fallback={`${GenS3Link(item.image)}.jpg`}
                          width="100%"
                          lzheight={`auto`}
                          style={{ minHeight: '160px', minWidth: '50px' }}
                          alt="Select Style Fit Image"
                        />
                      </Box>
                    }
                    style={{ margin: 0 }}
                  />
                  {item.content && <Typography className="basic-info-content">{item.content}</Typography>}
                </Grid>
              ))}
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

ImageSelectorCheckbox.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  value: PropTypes.array,
  disabled: PropTypes.bool,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func
};

export default ImageSelectorCheckbox;
