import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";


function Arrow(props) {
  const { className, style, onClick } = props;
  const arrowStyle = {
    display: "block",
    background: '#855DEF',
    borderRadius: "65%", // Hace que el div sea redondo
    ...style, // Asegúrate de combinar el estilo pasado a través de las props
  };

  return (
    <div
      className={className}
      style={arrowStyle} // Usa el objeto arrowStyle que contiene el estilo combinado
      onClick={onClick}
    />
  );
}

export default function TestimonialSlider({ themeState }) {
  const settings = {
    lazyLoad: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const QA = [
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      author: "Pregunta 1"
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      author: "Pregunta 2"
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      author: "Pregunta 3"
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      author: "Pregunta 4"
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      author: "Pregunta 5"
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      author: "Pregunta 6"
    },
  ]

  const Q = [
    {
      id: 1,
      question: "¿Qué es EmprendeHoy?",
      answers: "EmprendeHoy es una organización dedicada a brindar educación y capacitación en transformación digital para estudiantes, empleados, programadores y emprendedores."
    },
    {
      id: 2,
      question: "¿Quiénes pueden beneficiarse de los programas de EmprendeHoy?**",
      answers: "Estudiantes, empleados, programadores, emprendedores y cualquier persona interesada en desarrollar sus habilidades digitales pueden beneficiarse de nuestros programas."
    },
    {
      id: 3,
      question: "¿Qué es el Código de Ética?",
      answers: "Nuestro enfoque es capacitar a individuos en habilidades digitales clave para el éxito en la era moderna, abarcando áreas como programación, gestión de proyectos y ciberseguridad."
    },
    {
      id: 4,
      question: "¿Cuáles son los proyectos en desarrollo en EmprendeHoy?",
      answers: "Estamos trabajando en proyectos como Asistentes de Métricas, Project Manager Junior, Programador Backend Junior, Programador Backend Senior, Analista de Ciberseguridad Junior y Analista de Hardware y Procesos TI, todos con un enfoque 100% digital."
    },
    {
      id: 5,
      question: "¿Cómo son los programas de capacitación estructurados?",
      answers: "Nuestros programas cuentan con módulos de aprendizaje que van desde lo básico hasta niveles más avanzados, permitiendo a los participantes progresar a su propio ritmo."
    },
    {
      id: 6,
      question: "¿Ofrecen certificados al completar los programas?",
      answers: "Sí, otorgamos certificados reconocidos al finalizar con éxito nuestros programas de capacitación."
    },
    {
      id: 7,
      question: "¿Cómo accedo a los cursos de EmprendeHoy?",
      answers: "Puede acceder a nuestros cursos a través de nuestra plataforma en línea una vez que se haya registrado en nuestro sitio web."
    },
    {
      id: 8,
      question: "¿Qué son los Asistentes de Métricas?",
      answers: "Los Asistentes de Métricas son herramientas digitales que ayudan a medir y analizar datos para tomar decisiones informadas en proyectos digitales."
    },
    {
      id: 9,
      question: "¿En qué consiste el Programa de Project Manager Junior?",
      answers: "Este programa se enfoca en desarrollar habilidades de gestión de proyectos digitales para aquellos que desean iniciar sus carreras en la gestión de proyectos."
    },
    {
      id: 10,
      question: "¿Cuál es la diferencia entre los Programadores Backend Junior y Senior?",
      answers: "El programa de Programador Backend Junior es para principiantes, mientras que el de Senior es para aquellos con experiencia que desean mejorar y especializarse."
    },
    {
      id: 11,
      question: "¿Qué implica el rol de Analista de Ciberseguridad Junior?",
      answers: "El Analista de Ciberseguridad Junior se dedica a proteger sistemas y datos digitales contra amenazas y vulnerabilidades."
    },
    {
      id: 12,
      question: "¿En qué consiste el proyecto de Analista de Hardware y Procesos TI?",
      answers: "Este proyecto se enfoca en la comprensión y optimización de hardware y procesos tecnológicos en entornos digitales."
    },
    {
      id: 13,
      question: "¿Los programas incluyen oportunidades de práctica?",
      answers: "Sí, muchos de nuestros programas ofrecen oportunidades de práctica y ejercicios para aplicar los conocimientos adquiridos."
    },
    {
      id: 14,
      question: "¿Los programas son auto pace o tienen horarios específicos?",
      answers: "Nuestros programas son de autoaprendizaje, lo que significa que puede avanzar a su propio ritmo y en horarios flexibles"
    },
    {
      id: 15,
      question: "¿Ofrecen opciones de soporte o tutoría?",
      answers: "Sí, proporcionamos soporte a través de foros de discusión y, en algunos casos, opciones de tutoría en línea."
    },
    {
      id: 16,
      question: "¿Los programas de EmprendeHoy son gratuitos?",
      answers: "Algunos recursos y cursos pueden ser gratuitos, pero la mayoría de los programas completos tienen un costo asociado."
    },
    {
      id: 17,
      question: "¿Cómo puedo inscribirme en un programa?",
      answers: "respuesta"
    },
    {
      id: 18,
      question: "¿Tienen alianzas con empresas del sector?",
      answers: "Sí, colaboramos con empresas digitales para ofrecer oportunidades de pasantías y vinculación laboral a nuestros participantes destacados"
    },
    {
      id: 19,
      question: "¿Los programas garantizan empleo al finalizar?",
      answers: "No podemos garantizar empleo, pero proporcionamos las habilidades y conocimientos necesarios para aumentar las oportunidades de empleo."
    },
    {
      id: 20,
      question: "¿EmprendeHoy ofrece opciones de aprendizaje en línea en tiempo real?",
      answers: "La mayoría de nuestros programas son de aprendizaje en línea a su propio ritmo, pero ocasionalmente podemos ofrecer webinars en tiempo real."
    },
    {
      id: 21,
      question: ". ¿Los programas incluyen proyectos prácticos?",
      answers: "Sí, muchos programas incluyen proyectos prácticos que permiten a los participantes aplicar lo aprendido en situaciones reales."
    },
    {
      id: 22,
      question: ". ¿Cómo puedo ponerme en contacto con el equipo de soporte?",
      answers: "Puede ponerse en contacto con nuestro equipo de soporte a través de la sección de 'Contacto' en nuestro sitio web."
    },
    {
      id: 23,
      question: "¿EmprendeHoy ofrece programas personalizados para empresas?",
      answers: "Sí, podemos adaptar programas de capacitación para satisfacer las necesidades específicas de las empresas"
    },
    {
      id: 24,
      question: "¿Puedo acceder al material del curso después de completar un programa?",
      answers: "Sí, los participantes pueden acceder al material del curso incluso después de completar el programa."
    },
    {
      id: 25,
      question: "¿Los programas requieren conocimientos técnicos previos?",
      answers: "Algunos programas son adecuados para principiantes, mientras que otros pueden requerir conocimientos técnicos básicos."
    },
    {
      id: 26,
      question: "¿Qué es la transformación digital y por qué es importante?",
      answers: "La transformación digital se refiere a la integración de tecnologías digitales en todas las áreas de una organización para mejorar la eficiencia y la experiencia del cliente."
    },
    {
      id: 27,
      question: "¿Cómo se actualizan los contenidos de los programas?",
      answers: "Actualizamos regularmente los contenidos de nuestros programas para asegurarnos de que reflejen las últimas tendencias y avances en el mundo digital."
    },
    {
      id: 28,
      question: "¿Puedo acceder a los materiales del curso en cualquier momento?",
      answers: "Sí, nuestros materiales de curso están disponibles las 24 horas del día, los 7 días de la semana, para que pueda acceder a ellos según su conveniencia."
    },
    {
      id: 29,
      question: "¿EmprendeHoy ofrece algún programa de becas?",
      answers: "Sí, ofrecemos programas de becas en ocasiones especiales para brindar oportunidades a personas con limitaciones financieras."
    },
    {
      id: 30,
      question: " ¿Cómo puedo mantenerme informado sobre las novedades de EmprendeHoy?",
      answers: "Puede suscribirse a nuestro boletín informativo en línea para recibir actualizaciones regulares sobre nuestros programas y proyectos en desarrollo."
    },
  ]
  return (
    <div id="FAQ">
      <div className={themeState ? "darkTheme" : 'lightTheme'}>

        <div className="container ">
          <HeaderInfo>
            <h1 className="font40 extraBold">Preguntas frecuentes</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
        </div>
        <div style={{ padding: "10px 50px 10px" }} >
          <Slider {...settings} >


            {
              Q.map((item, index) => (
                <LogoWrapper className="flexCenter" >
                  <TestimonialBox
                    key={item.id}
                    text={item.answers}
                    author={item.question}
                    themeState={themeState}
                  />
                </LogoWrapper>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const HeaderInfo = styled.div`
  margin-bottom: 20px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;