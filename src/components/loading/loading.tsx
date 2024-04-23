import { CSSProperties } from "react";
import { Placeholder } from "react-bootstrap";

interface ILoading {
  size?: 'xs' | 'sm' | 'lg';
  style?: CSSProperties;
}

export default function loading({size, style }: ILoading) {
  return (
    <div className="loading">
      <Placeholder animation="wave" size={size} style={style ? style : null} />
    </div>
  )
}
