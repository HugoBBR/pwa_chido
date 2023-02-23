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
import { ResponsiveStyleValue } from '@mui/system';

// Soft UI Dashboard PRO React components
import SoftBox from '@/components/SoftBox';
import borders from '@/theme/base/borders';
// Soft UI Dashboard PRO React base styles
import colors from '@/theme/base/colors';
import typography from '@/theme/base/typography';

function DataTableBodyCell({
  noBorder,
  align,
  children,
}: {
  noBorder?: boolean;
  align?: ResponsiveStyleValue<undefined>;
  children: React.ReactNode;
}) {
  const { light } = colors;
  const { size } = typography;
  const { borderWidth } = borders;

  return (
    <SoftBox
      component="td"
      textAlign={align}
      fontSize={size.md}
      borderBottom={noBorder ? 'none' : `${borderWidth[1]} solid ${light.main}`}
      py={1.5}
      px={2}
      sx={{ verticalAlign: 'middle', overflowWrap: 'normal' }}
    >
      <SoftBox
        display="inline-block"
        width="100%"
        color="text"
        sx={{ verticalAlign: 'middle', overflowWrap: 'normal', whiteSpace: 'break-spaces' }}
      >
        {children}
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: 'left',
};

// Typechecking props for the DataTableBodyCell

export default DataTableBodyCell;
