
export default function TableRows({ item, column }) {
  return <tr>
  {column.map((columnItem, i) => {

    if(columnItem.value.includes('.')) {
      const itemSplit = columnItem.value.split('.') //['address', 'city']
      return <td key={i}>{item[itemSplit[0]][itemSplit[1]]}</td>
    }

    return <td>{item[`${columnItem.value}`]}</td>
  })}
</tr>
}
