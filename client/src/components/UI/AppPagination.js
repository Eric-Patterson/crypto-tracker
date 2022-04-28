import { Pagination } from "@mui/material";
import { Fragment } from "react";

function AppPagination({ setPage, pageNumber }) {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <Fragment>
      <Pagination
        onChange={(e) => handleChange(e.target.textContent)}
        count={pageNumber}
      />
    </Fragment>
  );
}

export default AppPagination;
