import React from "react";

const Table = ({ data, columns }) => {
  // format date like yyyy, mm ,day
  console.log("data=>", data)
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columns.map((column) => (
            <th className="" key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className="" key={rowIndex}>
            {columns.map((column) => (
              <td className="text-sm" key={column.key}>
                {column.key === "start_date" || column.key === "end_date"
                  ? formatDate(row[column.key])
                  : column.key === "action" && column.render
                  ? column.render(row)
                  : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
