import { Card } from "./components/Card";
import { CardsContainer, MainContainer } from "./styled";

const InformationTask = [
    {
        title:'TODO List',
        url: '/todo',
        description: 'En esta sección podrás realizar un TODO List, permitiendote crear, editar y eliminar'
    },
    {
        title: 'Timer',
        url: '/timer',
        description: 'En esta sección podrás visualizar un timer en base al tiempo en segundo proporcionado'
    },
    {
        title: 'Git profile',
        url: '/git-profile',
        description: 'En esta sección podrás buscar usuario de git y ver su información relevante'
    }
]


const Component = () => {

  return (
   <MainContainer>
    <CardsContainer>
        {
            InformationTask.map( ({title, description, url}, index) => (
                <Card key={`${index}-${title}`} title={title} description={description} url={url}/>
            ) )
        }

    </CardsContainer>

   </MainContainer>
  );
};

export { Component as Panel };
export default Component;
