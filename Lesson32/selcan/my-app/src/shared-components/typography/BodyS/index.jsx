import "./styles.css";

export const BodyS = ({ title, bold }) => {
  return <p className={bold ? "bold" : ""}>{title}</p>;
};
