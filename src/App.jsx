import React, { useEffect } from "react";
import { useTable, useSortBy, usePagination } from "react-table";

const data = [
  {
    id: 1,
    name: "sagar",
    gender: "female",
    salary: 222,
  },
  {
    id: 2,
    name: "aaman",
    gender: "female",
    salary: 4222,
  },
  {
    id: 3,
    name: "deepak",
    gender: "male",
    salary: 655,
  },
  {
    id: 4,
    name: "monu",
    gender: "male",
    salary: 7555,
  },
  {
    id: 5,
    name: "shaili",
    gender: "male",
    salary: 3545,
  },
  {
    id: 6,
    name: "tulip",
    gender: "male",
    salary: 4343,
  },
  {
    id: 7,
    name: "sakshi",
    gender: "male",
    salary: 65656,
  },
  {
    id: 8,
    name: "hitesh",
    gender: "male",
    salary: 7676,
  },
  {
    id: 9,
    name: "mangal",
    gender: "male",
    salary: 76767,
  },
  {
    id: 10,
    name: "sagar",
    gender: "female",
    salary: 22442,
  },
  {
    id: 11,
    name: "aaman",
    gender: "female",
    salary: 555,
  },
  {
    id: 12,
    name: "deepak",
    gender: "male",
    salary: 54554,
  },
  {
    id: 13,
    name: "monu",
    gender: "male",
    salary: 656565,
  },
  {
    id: 14,
    name: "shaili",
    gender: "male",
    salary: 343434,
  },
  {
    id: 15,
    name: "tulip",
    gender: "male",
    salary: 333,
  },
  {
    id: 16,
    name: "sakshi",
    gender: "male",
    salary: 1111,
  },
  {
    id: 17,
    name: "hitesh",
    gender: "male",
    salary: 75433,
  },
  {
    id: 18,
    name: "mangal",
    gender: "male",
    salary: 777,
  },
];

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];

const App = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((header) => (
                <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                  {header.render("Header")}
                </th>
              ))}
            </tr>
          ))}

          {/* <tr>
            <th>Id</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr> */}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button disabled={!canPreviousPage} onClick={previousPage}>
          Previous
        </button>
        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
