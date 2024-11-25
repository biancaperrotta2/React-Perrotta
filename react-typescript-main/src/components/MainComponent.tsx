import { FC } from "react"

interface IPropsMainComponent {
  text: string;
  color: string;
  fontSize?: number;
}

export const MainComponent: FC<IPropsMainComponent> = ({ text, color, fontSize }) => {
  return (
    <div style={{width:"60%", border:'3px solid Red', padding:'20px'}}>
      <h1>Uso de props tipadas por parametros</h1>
      <div style={{ color: `${color}`, fontSize: `${fontSize}px` }}>
        <p>{text}</p>
      </div>
    </div>
  )
}