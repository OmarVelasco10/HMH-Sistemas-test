import { Card } from "./components/Card";
import { CardsContainer, MainContainer } from "./styled";

const InformationTask = [
    {
        title:'TODO List',
        url: '/todo',
        description:`Herramienta que te permite gestionar y organizar tus actividades y responsabilidades de manera efectiva. Puedes registrar, priorizar y dar seguimiento a tus tareas pendientes. Puedes establecer fechas límite, categorizar tus actividades, marcar las tareas completadas y mantener un registro claro de lo que debes hacer. Esta herramienta es útil para aumentar la productividad, reducir el estrés y asegurarte de que no se te pase por alto ninguna tarea importante. En resumen, un TODO List es una valiosa ayuda para la gestión del tiempo y la organización personal y profesional.`
    },
    {
        title: 'Timer',
        url: '/timer',
        description: ` Un temporizador, o timer en inglés, es una herramienta que se utiliza para medir intervalos de tiempo o para programar eventos en un momento específico. Los timers pueden ser útiles en una variedad de situaciones, como: controlar tareas, medir tiempos, estudiar, realizar recetas de cocina, realizar juegos, meditar, etc. En resumen, un temporizador es una herramienta versátil que se utiliza para medir y gestionar el tiempo en una variedad de contextos, lo que facilita la organización, el control y la eficiencia en diversas actividades de la vida cotidiana.`
    },
    {
        title: 'Git profile',
        url: '/git-profile',
        description: `Buscar perfiles en GitHub es una práctica común y esencial para una variedad de propósitos en el mundo del desarrollo de software y la colaboración en proyectos de código abierto. Buscar perfiles de GitHub permite: networking, seguimiento de perfiles, resolución de tareas,etc. En resumen, buscar perfiles de GitHub es una herramienta valiosa para conectar, colaborar, aprender y desarrollarse en la comunidad de desarrollo de software, tanto a nivel individual como en equipos y empresas. Facilita la identificación de talento, la colaboración efectiva y la construcción de relaciones en el mundo tecnológico. `
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
