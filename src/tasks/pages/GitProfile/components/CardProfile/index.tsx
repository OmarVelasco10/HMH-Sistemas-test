
import { DataProps } from "../..";
import { ImgProfile, MainContainer } from "./styled";



const Component = (props: {data:DataProps }) => {
 
const {name, location, avatarUrl, public_repos, followers} = props.data;

  return (
      <MainContainer className="card">
        <ImgProfile src={avatarUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Location:</b> {location}</li>
          <li className="list-group-item"><b>Public Repositories:</b>  {public_repos}</li>
          <li className="list-group-item"><b>Followers:</b> {followers}</li>
        </ul>
      </MainContainer>
  );
};

export { Component as CardProfile };
export default Component;
