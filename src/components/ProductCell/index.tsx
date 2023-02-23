import PropTypes from 'prop-types';

// Soft UI Dashboard PRO React components
import SoftBox from '@/components/SoftBox';

function ProductCell({ image }: any) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftBox
        display="flex"
        mx={2}
        width="3.6rem"
        bgColor="info"
        borderRadius="xl"
        justifyContent="center"
        px={1}
        py={1}
      >
        <SoftBox component="img" src={image} width="100%" />
      </SoftBox>
    </SoftBox>
  );
}

// Setting default value for the props of ProductCell
ProductCell.defaultProps = {
  checked: false,
};

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProductCell;
