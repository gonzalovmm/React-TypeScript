import { FC } from "react";

interface IPropsMIPrimerComponent {
  text: String;
  color: string;
  fontSize: number
}
export const MiPrimerComponent: FC<IPropsMIPrimerComponent> = ({ text, color, fontSize }) => {
  return (
    <div style={{ color: `${color}`, fontSize: `${fontSize}rem` } }>
      <p></p>
      {text}</div>
  )
}

