import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import { es } from 'date-fns/locale'; // Importa el idioma que deseas utilizar (por ejemplo, español)
import { formatDistanceToNow } from 'date-fns';
//slider
import Slider from "react-slick";

export default function Blog({ themeState }) {

  //settings for slider
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const accessToken = 'EAAD9JrwCuZA0BO1mZCPuBZCT3aZB4yF89qDMyOZAhrGkSshwDkgkNcxRN8CAwsEUmIk61A5TlRwKRJjtGwUUgD9dqAs0lhvxXNDmLESTGtDVyqaGhUuQZA5fPp4XvFnEYdyQmKU1lT54Fckzp7UUZCymeZAwaAmEYX7NG7MxtF5F4gpHDpDQQMXwXZA4LInbaqGZCMOXRowBG85qiPG2AZD'
    const pageId = '111979705309346'; // Reemplaza con el ID o nombre de la página de Facebook

    // Obtener los datos básicos de los posts
    fetch(`https://graph.facebook.com/${pageId}/posts?fields=message,created_time,id&access_token=${accessToken}`)
      .then(response => response.json())
      .then(postData => {
        const postIds = postData.data.map(post => post.id);

        // Obtener las imágenes asociadas a los posts
        fetch(`https://graph.facebook.com/?ids=${postIds.join(',')}&fields=full_picture&access_token=${accessToken}`)
          .then(imageResponse => imageResponse.json())
          .then(imageData => {
            // Combinar los datos de los posts con las imágenes
            const postsWithImages = postData.data.map(post => ({
              ...post,
              image: imageData[post.id]?.full_picture || null,
            }));

            setPosts(postsWithImages);
          })
          .catch(error => {
            console.error('Error fetching images:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching Facebook posts:', error);
      });
  }, []);

  const getFormattedTimeAgo = (createdTime) => {
    const date = new Date(createdTime);
    return formatDistanceToNow(date, { locale: es });
  };
  return (
    <Wrapper id="blog">
      <div className={themeState ? "darkTheme" : 'lightWhiteTheme'}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Ultimas noticias</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="d-flex overflow-auto textCenter ">
            {
              posts.map(post => (
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <BlogBox
                    title="Nueva noticia!"
                    theme={themeState ? 'darkSecondaryTheme' : 'lightTheme'}
                    text={post.message}
                    tag="company"
                    author={getFormattedTimeAgo(post.created_time)}
                    imageUrl={post.image}
                    postUrl={post.id}
                  />
                </div>
              ))
            }
          </div>

          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Mostrar mas" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      {/**  <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div> */}
    </Wrapper>
  );
}
const BlogBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centrar horizontalmente los BlogBox */
  gap: 40%; /* Agregar espacio horizontal entre los BlogBox */
`;
const Wrapper = styled.section`
  width: 100%;
  
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;