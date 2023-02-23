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
// prop-types is a library for typechecking of props
// @mui material components
import PropTypes from 'prop-types';

// Soft UI Dashboard PRO React components
import SoftBox from '@/components/SoftBox';
import borders from '@/theme/base/borders';
// Soft UI Dashboard PRO React base styles
import colors from '@/theme/base/colors';

function DataTableHeadCell({
  width,
  children,
  sorted,
  align,
  ...rest
}: {
  width?: string | number;
  children: React.ReactNode;
  sorted?: any;
  align?: any;
}) {
  const { light } = colors;
  const { borderWidth } = borders;

  return (
    <SoftBox
      component="th"
      width={width}
      borderBottom={`${borderWidth[1]} solid ${light.main}`}
      py={1.5}
      px={1}
    >
      <SoftBox
        {...rest}
        position="relative"
        textAlign={align}
        color="secondary"
        opacity={0.7}
        sx={({ typography: { size, fontWeightBold } }) => ({
          fontSize: size.xxs,
          fontWeight: fontWeightBold,
          textTransform: 'uppercase',
          cursor: sorted && 'pointer',
          userSelect: sorted && 'none',
        })}
      >
        {children}
        {sorted && (
          <SoftBox
            position="absolute"
            top={0}
            right={align !== 'right' ? '16px' : 0}
            left={align === 'right' ? '-5px' : 'unset'}
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            <SoftBox
              position="absolute"
              top={-6}
              color={sorted === 'asce' ? 'text' : 'secondary'}
              opacity={sorted === 'asce' ? 1 : 0.5}
            ></SoftBox>
            <SoftBox
              position="absolute"
              top={0}
              color={sorted === 'desc' ? 'text' : 'secondary'}
              opacity={sorted === 'desc' ? 1 : 0.5}
            ></SoftBox>
          </SoftBox>
        )}
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of DataTableHeadCell
DataTableHeadCell.defaultProps = {
  width: 'auto',
  sorted: 'none',
  align: 'left',
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  sorted: PropTypes.oneOf([false, 'none', 'asce', 'desc']),
  align: PropTypes.oneOf(['left', 'right', 'center']),
};

export default DataTableHeadCell;
