export default function TablePage() {
  return (
    <div className="table-container">
      <table className="table-style-1">
        <thead>
          <tr>
            <th scope="col">Product name</th>
            <th scope="col">Color</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple MacBook Pro 17"</td>
            <td>Silver</td>
            <td>Laptop</td>
            <td>$2999</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Apple MacBook Pro 17"</td>
            <td>Silver</td>
            <td>Laptop</td>
            <td>$2999</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}