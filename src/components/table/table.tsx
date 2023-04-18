import { Container, Image } from "./styles";
import TableHeader from "./tableHeader";
import TableRows from "./tableRows";


export default function Table({ data, column }) {
  return (
    <Container>
      <thead>
        <tr>
          {column.map((item, i) => (
            <TableHeader key={i} item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <TableRows key={i} item={item} column={column} />
        ))}
      </tbody>
    </Container>
  );
}
