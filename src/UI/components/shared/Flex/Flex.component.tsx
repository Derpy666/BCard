import { FlexProps } from "./Flex.props";

const Flex = (props: FlexProps) => {
  const {
    children,
    dir = "row",
    rtl = false,
    justify = "center",
    items = "center",
    className = "",
    onClick = () => {},
  } = props;

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className={`flex flex-${dir} justify-${justify} items-${items} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Flex;
