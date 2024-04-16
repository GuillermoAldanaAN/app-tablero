import { Button, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPageNumbers = () => {
    const pageNumbers = [];// genero butones con los numeros de paginas
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant={currentPage === i ? "solid" : "outline"}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }
    return pageNumbers;
  };

  return <HStack>{renderPageNumbers()}</HStack>;
}
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;


