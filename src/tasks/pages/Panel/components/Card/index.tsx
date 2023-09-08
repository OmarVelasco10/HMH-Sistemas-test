import { NavLink } from "react-router-dom";
import { MainContainer, NavLinkCustom } from "./styled";

interface CardProps {
  title: string;
  description: string;
  url: string;
}

const Component = (props: CardProps) => {
  const { title, description, url } = props;
  return (
    <MainContainer className="card w-50">
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">
          { description }
        </p>
        <NavLinkCustom to={url} className="btn">
              Ir
        </NavLinkCustom>
      
      </div>
    </MainContainer>
  );
};

export { Component as Card };
export default Component;
