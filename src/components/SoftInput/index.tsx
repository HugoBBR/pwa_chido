/* eslint-disable react/display-name */

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { forwardRef } from 'react';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

import SoftInputIconBoxRoot from '@/components/SoftInput/SoftInputIconBoxRoot';
import SoftInputIconRoot from '@/components/SoftInput/SoftInputIconRoot';
// Custom styles for SoftInput
import SoftInputRoot from '@/components/SoftInput/SoftInputRoot';
import SoftInputWithIconRoot from '@/components/SoftInput/SoftInputWithIconRoot';
// Soft UI Dashboard PRO React contexts
import { useSoftUIController } from '@/context';

const SoftInput = forwardRef(({ size, icon, error, success, disabled, ...rest }: any, ref) => {
  let template;
  const [controller] = useSoftUIController();
  const { direction } = controller;
  const iconDirection = icon.direction;

  if (icon.component && icon.direction === 'left') {
    template = (
      <SoftInputWithIconRoot {...rest} ref={ref} ownerState={{ error, success, disabled }}>
        <SoftInputIconBoxRoot ownerState={{ size }}>
          <SoftInputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </SoftInputIconRoot>
        </SoftInputIconBoxRoot>
        <SoftInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
      </SoftInputWithIconRoot>
    );
  } else if (icon.component && icon.direction === 'right') {
    template = (
      <SoftInputWithIconRoot {...rest} ref={ref} ownerState={{ error, success, disabled }}>
        <SoftInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
        <SoftInputIconBoxRoot ownerState={{ size }}>
          <SoftInputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </SoftInputIconRoot>
        </SoftInputIconBoxRoot>
      </SoftInputWithIconRoot>
    );
  } else {
    template = (
      <SoftInputWithIconRoot {...rest} ref={ref} ownerState={{ error, success, disabled, icon }}>
        <SoftInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled }} />
      </SoftInputWithIconRoot>
    );
  }

  return template;
});

// Setting default values for the props of SoftInput
SoftInput.defaultProps = {
  size: 'medium',
  icon: {
    component: false,
    direction: 'none',
  },
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the SoftInput
SoftInput.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    direction: PropTypes.oneOf(['none', 'left', 'right']),
  }),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SoftInput;
