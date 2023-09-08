import { useState } from "react";
import { getGitHubProfile } from "../../../tasks/provider";
import { CardProfile } from "./components/CardProfile";
import { Button, InputGitProfile, MainContainer, Title } from "./styled";
import Swal from "sweetalert2";

export interface DataProps {
    name: string;
    avatarUrl: string;
    location: string;
    public_repos: string;
    followers: number
}
const initialData: DataProps = {
    name: '',
    avatarUrl: '',
    location: '',
    public_repos: '',
    followers: 0
}

const Component = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState<DataProps>(initialData);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUser(value);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await getGitHubProfile(user);

    if(!response?.ok) {
        Swal.fire("Authentication error", response?.errorMessage, "error");

    } else {
        setData({
            name: response?.data.name,
            avatarUrl: response?.data.avatar_url,
            location: response?.data.location,
            public_repos: response?.data.public_repos,
            followers: response?.data.followers
        });
    }

  
    

  };

  return (
    <MainContainer>
      <Title>Busca un perfil en Github!</Title>
      <InputGitProfile
        type="text"
        className="form-control mb-2"
        placeholder="Busca un perfil"
        onChange={onInputChange}
      />
      <Button className="btn mb-3" onClick={onSubmit}>
        Buscar
      </Button>
      {
        data.name !== '' && (
            <CardProfile data={data}/>
        )
      }
 
    </MainContainer>
  );
};

export { Component as GitProfile };
export default Component;
