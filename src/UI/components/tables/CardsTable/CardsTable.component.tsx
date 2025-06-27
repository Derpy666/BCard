import { Table as FbTable } from "flowbite-react";
import Styles from "./CardsTable.style";
import { CardsTableProps } from "./CardsTable.props";

const CardsTable = (props: CardsTableProps) => {
  const { card, setSelected } = props;

  return (
    <FbTable.Row
      key={card._id}
      className={Styles.tableRow}
      onClick={() => setSelected(card)}
    >
      <FbTable.Cell className={Styles.tableCell}>{card.title}</FbTable.Cell>
      <FbTable.Cell className={Styles.tableCell}>{card.email}</FbTable.Cell>
      <FbTable.Cell className={Styles.tableCell}>{card.phone}</FbTable.Cell>
      <FbTable.Cell className={Styles.tableCell}>
        {card.createdAt.toString().split("T")[0]}
      </FbTable.Cell>
    </FbTable.Row>
  );
};

export default CardsTable;
