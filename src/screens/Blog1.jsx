import React, { useEffect, Component, useState, Suspense, lazy } from "react";
import styled from "styled-components";

import '../style/blogStyles/a.css'


import LazyTopNavbar from "../components/Nav/TopNavbar";
import FooterV2 from '../components/Sections/Footerv2'
export default function Blog1() {
  return (

    <Wrapper class="jeg_content jeg_singlepage" style={{
      transform: "none"
    }}>

      <div class="containerBlog" style={{
        transform: "none"
      }}>
        <div class="entry-header">
          <h1 class="jeg_post_title">
            Lanzan el ecosistema tecnológico Hammock Valley
          </h1>
          <h2 class="jeg_post_subtitle">
            La apuesta del Gobierno es crear el Sillicon Valley salvadoreño
            mediante el impulso de diversas iniciativas tecnológicas.
          </h2>
          <div class="jeg_meta_container">
            <div class="jeg_post_meta jeg_post_meta_2">
              <div class="meta_left">
                <div class="jeg_meta_author">
                  <span class="meta_text">por</span>
                  <a href="">Magaly Abarca</a>
                </div>
                <div class="jeg_meta_date">
                  <a href="index-1.htm">2 de agosto de 2023</a>
                </div>
                <div class="jeg_meta_category">
                  <span
                  ><span class="meta_text">En</span>
                    <a
                      href="https://diarioelsalvador.com/seccion/dedinero/"
                      rel="category tag"
                    >DeDinero</a
                    >
                  </span>
                </div>
              </div>
              <div class="meta_right">
                <div class="jeg_meta_zoom" data-in-step="3" data-out-step="2">
                  <div class="zoom-dropdown">
                    <div class="zoom-icon">
                      <span class="zoom-icon-small">A</span>
                      <span class="zoom-icon-big">A</span>
                    </div>
                    <div class="zoom-item-wrapper">
                      <div class="zoom-item">
                        <button class="zoom-out"><span>A</span></button>
                        <button class="zoom-in"><span>A</span></button>
                        <div class="zoom-bar-container">
                          <div class="zoom-bar" style={{ width: "40%" }}></div>
                        </div>
                        <button class="zoom-reset"><span>Reset</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rowBlog" style={{ transform: "none" }}>
          <div class="jeg_main_content col-md-8" style={{ transform: "none" }}>
            <div class="jeg_inner_content" style={{ transform: "none" }}>
              <div class="jeg_featured featured_image">
                <a
                  href="../../wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92.jpg"
                ><div
                  class="thumbnail-container animate-lazy"

                  style={{ paddingBottom: "50%" }}
                >
                    <img
                      width="750"
                      height="375"
                      src="https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92-750x375.jpg"
                      class="attachment-jnews-750x375 size-jnews-750x375 wp-post-image lazyautosizes lazyloaded"
                      alt="Lanzan el ecosistema tecnológico Hammock Valley"
                      decoding="async"
                      sizes="750px"
                      data-src="https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92-750x375.jpg"
                      data-srcset="https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92-750x375.jpg 750w, https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92-360x180.jpg 360w, https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92-1140x570.jpg 1140w"
                      data-sizes="auto"
                      data-expand="700"
                      srcset="
                        https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92-750x375.jpg   750w,
                        https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92-360x180.jpg   360w,
                        https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92-1140x570.jpg 1140w
                      "
                    />
                  </div>
                  <p class="wp-caption-text">
                    El presidente de Invest, Salvador Gómez Gochez reiteró que
                    Hammock Valley es una visión de futuro. / Foto: Edison
                    González
                  </p></a
                >
              </div>
              <div class="jeg_share_top_container">
                <div class="jeg_share_button clearfix">
                  <div class="jeg_share_stats">
                    <div class="jeg_share_count">
                      <div class="counts">53</div>
                      <span class="sharetext">COMPARTIDO</span>
                    </div>
                    <div class="jeg_views_count">
                      <div class="counts">353</div>
                      <span class="sharetext">VISTAS</span>
                    </div>
                  </div>
                  <div class="jeg_sharelist">
                    <a
                      href="../../login.php?u=https%3A%2F%2Fdiarioelsalvador.com%2Flanzan-el-ecosistema-tecnologico-hammock-valley%2F390331%2F"
                      rel="nofollow"
                      class="jeg_btn-facebook"
                    ><i class="fa fa-facebook-official"></i></a
                    ><a
                      href="https://twitter.com/intent/tweet?text=Lanzan%20el%20ecosistema%20tecnol%C3%B3gico%20Hammock%20Valley%20via%20%40%40elsalvador&amp;url=https%3A%2F%2Fdiarioelsalvador.com%2Flanzan-el-ecosistema-tecnologico-hammock-valley%2F390331%2F"
                      rel="nofollow"
                      class="jeg_btn-twitter"
                    ><i class="fa fa-twitter"></i></a
                    ><a
                      href="//api.whatsapp.com/send?text=Lanzan%20el%20ecosistema%20tecnol%C3%B3gico%20Hammock%20Valley%0Ahttps%3A%2F%2Fdiarioelsalvador.com%2Flanzan-el-ecosistema-tecnologico-hammock-valley%2F390331%2F"
                      rel="nofollow"
                      data-action="share/whatsapp/share"
                      class="jeg_btn-whatsapp"
                    ><i class="fa fa-whatsapp"></i></a
                    ><a
                      href="mailto:?subject=Lanzan%20el%20ecosistema%20tecnol%C3%B3gico%20Hammock%20Valley&amp;body=https%3A%2F%2Fdiarioelsalvador.com%2Flanzan-el-ecosistema-tecnologico-hammock-valley%2F390331%2F"
                      rel="nofollow"
                      class="jeg_btn-email"
                    ><i class="fa fa-envelope"></i
                    ></a>
                    <div class="share-secondary">
                      <a
                        href="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fdiarioelsalvador.com%2Flanzan-el-ecosistema-tecnologico-hammock-valley%2F390331%2F&amp;title=Lanzan%20el%20ecosistema%20tecnol%C3%B3gico%20Hammock%20Valley"
                        rel="nofollow"
                        class="jeg_btn-linkedin"
                      ><i class="fa fa-linkedin"></i></a
                      ><a
                        href="https://www.pinterest.com/pin/create/bookmarklet/?pinFave=1&amp;url=https%3A%2F%2Fdiarioelsalvador.com%2Flanzan-el-ecosistema-tecnologico-hammock-valley%2F390331%2F&amp;media=https://diarioelsalvador.com/wp-content/uploads/2023/08/ecf302b6-20f7-40e5-b23f-ee303530db92.jpg&amp;description=Lanzan%20el%20ecosistema%20tecnol%C3%B3gico%20Hammock%20Valley"
                        rel="nofollow"
                        class="jeg_btn-pinterest"
                      ><i class="fa fa-pinterest"></i
                      ></a>
                    </div>

                  </div>
                </div>
              </div>
              <div class="jeg_ad jeg_article jnews_content_top_ads">
                <div class="ads-wrapper"></div>
              </div>
              <div
                class="entry-content no-share"

                style={{ transform: "none", height: "1045px" }}
              >
                <div
                  class="jeg_share_button share-float jeg_sticky_share clearfix share-monocrhome"

                  style={{
                    position: "relative",
                    overflow: "visible",
                    boxSizing: "borderBox",
                    minHeight: "1px"
                  }}
                >
                  <div class="jegStickyHolder">
                    <div
                      class="theiaStickySidebar"


                      style={{
                        paddingTop: "0px",
                        paddingBottom: '1px',
                        position: 'static',
                        top: '123px',
                        left: '200.5px'

                      }}
                    >
                      <div class="jeg_share_float_container"></div>
                    </div>
                  </div>
                </div>
                <div class="content-inner">
                  <p>
                    El Salvador se configura en la actualidad como un atractivo
                    nicho para las inversiones tecnológicas debido a los
                    impulsos que desde el Gobierno está recibiendo este sector,
                    que van desde la capacitación de talento humano hasta la
                    implementación de leyes de atracción de inversiones como la
                    recién aprobada Ley de Innovación y Manufactura Tecnología.
                  </p>
                  <p>
                    En este marco, ayer fue presentado de la mano de Agencia de
                    Promoción de Inversiones y Exportaciones de El Salvador
                    (Invest), el ecosistema Hammock Valley, un entorno que reúne
                    a startups salvadoreñas basadas en tecnologías que buscan el
                    mayor despunte del sector y convertirse en uno de los
                    principales aportadores a la economía en los próximos años.
                  </p>
                  <p>
                    En este marco, el presidente de Invest, Salvador Gómez
                    Gochez, dijo que el mandato del presidente Nayib Bukele es
                    posicionar a los proyectos de tecnología a una escala global
                    al grado de «hacer de Hammock Valley un Sillicon Valley aquí
                    en El Salvador».
                  </p>
                  <p>
                    «Como presidente de Invest, estoy aquí para darles el apoyo
                    y acompañamiento para que este proyecto que nace este día
                    sea un verdadero éxito a nivel mundial», apuntó el
                    funcionario.
                  </p>
                  <p>
                    En concreto, explicó que el ecosistema lanzado se desarrolla
                    bajo la Economía Azul Digital, la cual fomenta e incentiva
                    la innovación, manufactura y tecnología para lograr
                    conexiones, inversiones, oportunidades y sostenibilidad.
                  </p>
                  <p>
                    Son unas 15 startups las que conforman, en este momento, la
                    plataforma, y según el presidente de Invest otro de sus
                    objetivos es conectar los talentos que están naciendo en El
                    Salvador y poderlos juntarlos en una vitrina atractiva para
                    cualquier empresa o cliente potencial que busque conectar
                    con servicios tecnológicos.
                  </p>
                  <p>
                    «Hammock Valley es la oportunidad de construir una realidad
                    y un metaverso con una nueva economía digital. Las futuras
                    generaciones recordarán este lanzamiento impulsado en los
                    tiempos del Gobierno del presidente Nayib Bukele», dijo.
                  </p>
                  <p>
                    En el marco del lanzamiento se realizó un foro junto a los
                    representantes de startups tecnológicas que compartieron
                    experiencias, retos y sus perspectivas ante el surgimiento
                    del nuevo entorno para startups digitales.
                  </p>
                  <p>
                    Al respecto, el gerente de innovación y emprendimiento
                    global de la Fundación Emprende hoy, que forma parte de
                    Hammock Valey, Juan Reyes; resaltó que muchas empresas están
                    llegando al país atraídas por el talento salvadoreño que se
                    sustenta la guía de la nueva Economía Azul Digital y que la
                    visión es llevar a todas estas empresas hacia lo global.
                  </p>


                </div>
              </div>
              <div class="jeg_share_bottom_container"></div>
              <div class="jeg_ad jeg_article jnews_content_bottom_ads">
                <div class="ads-wrapper"><div class="ads_shortcode"></div></div>
              </div>
              <div class="jnews_prev_next_container">
                <div class="jeg_prevnext_post">
                  <a
                    href="https://diarioelsalvador.com/trece-empresas-cafetaleras-salvadorenas-listas-para-exportar-a-china/390326/"
                    class="post prev-post"
                  >
                    <span class="caption">Publicación anterior</span>
                    <h3 class="post-title">
                      Trece empresas cafetaleras salvadoreñas, listas para&nbsp;
                      exportar a China
                    </h3>
                  </a>
                  <a
                    href="https://diarioelsalvador.com/agosto-2023-inicia-con-cero-homicidios-en-el-salvador/390433/"
                    class="post next-post"
                  >
                    <span class="caption">Siguiente publicación</span>
                    <h3 class="post-title">
                      Agosto 2023 inicia con cero homicidios en El Salvador
                    </h3>
                  </a>
                </div>
              </div>
              {/** start author */}
              {/**
 * 
              <div class="jnews_author_box_container">
                <div class="jeg_authorbox">
                  <div class="jeg_author_image">
                    <img
                      alt="Magaly Abarca"
                      src="../../avatar/c6df0947c15d37146696c0a2847797ce.png?s=80&amp;d=mm&amp;r=g"
                      srcset="../../avatar/c6df0947c15d37146696c0a2847797ce-1.png 2x?s=160&amp;d=mm&amp;r=g 2x"
                      class="avatar avatar-80 photo"
                      height="80"
                      width="80"
                      loading="lazy"
                      decoding="async"
                      data-pin-no-hover="true"
                    />
                  </div>
                  <div class="jeg_author_content">
                    <h3 class="jeg_author_name">
                      <a href=""> Magaly Abarca </a>
                    </h3>
                    <p class="jeg_author_desc"></p>
                    <div class="jeg_author_socials"></div>
                  </div>
                </div>
              </div>
 */}
              {/** end author */}

              <div class="jnews_related_post_container"></div>
              <div class="jnews_popup_post_container">
                <section class="jeg_popup_post">
                  <span class="caption">Siguiente publicación</span>
                  <div class="jeg_popup_content">
                    <div class="jeg_thumb">
                      <a
                        href="https://diarioelsalvador.com/agosto-2023-inicia-con-cero-homicidios-en-el-salvador/390433/"
                      ><div
                        class="thumbnail-container animate-lazy size-1000"
                      >
                          <img
                            width="75"
                            height="75"
                            src="https://diarioelsalvador.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-01-06-at-5.24.55-AM-1-1-75x75.jpeg"
                            class="attachment-jnews-75x75 size-jnews-75x75 wp-post-image lazyautosizes lazyloaded"
                            alt="Agosto 2023 inicia con cero homicidios en El Salvador"
                            decoding="async"
                            loading="lazy"
                            sizes="60px"
                            data-src="https://diarioelsalvador.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-01-06-at-5.24.55-AM-1-1-75x75.jpeg"
                            data-srcset="https://diarioelsalvador.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-01-06-at-5.24.55-AM-1-1-75x75.jpeg 75w, https://diarioelsalvador.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-01-06-at-5.24.55-AM-1-1-150x150.jpeg 150w, https://diarioelsalvador.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-01-06-at-5.24.55-AM-1-1-350x350.jpeg 350w"
                            data-sizes="auto"
                            data-expand="700"
                            srcset="
                              https://diarioelsalvador.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-01-06-at-5.24.55-AM-1-1-75x75.jpeg    75w,
                              https://diarioelsalvador.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-01-06-at-5.24.55-AM-1-1-150x150.jpeg 150w,
                              https://diarioelsalvador.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-01-06-at-5.24.55-AM-1-1-350x350.jpeg 350w
                            "
                          />
                        </div>
                      </a>
                    </div>
                    <h3 class="post-title">
                      <a
                        href="https://diarioelsalvador.com/agosto-2023-inicia-con-cero-homicidios-en-el-salvador/390433/"
                      >
                        Agosto 2023 inicia con cero homicidios en El Salvador
                      </a>
                    </h3>
                  </div>
                  <a href="#" class="jeg_popup_close"
                  ><i class="fa fa-close"></i
                  ></a>
                </section>
              </div>
              <div class="jnews_comment_container"></div>
            </div>
          </div>
          <div
            class="jeg_sidebar jeg_sticky_sidebar col-md-4"


            style={{
              position: "relative",
              overflow: "visible",
              boxSizing: "border-box",
              minHeight: "1px"

            }}
          >
            <div class="jegStickyHolder">
              <div
                class="theiaStickySidebar"
                style={{
                  paddingTop: "0px",
                  paddingBottom: "1px",
                  position: "static",
                  top: "123px",
                  left: "995.5px",
                }}
              >
                <div class="widget widget_text" id="text-2">
                  <div class="textwidget">
                    <div
                      data-diari-trackid="390799"
                      data-diari-trackbid="1"
                      class="diari-target"
                      id="diari-286992904"
                    >
                      <a
                        data-no-instant="1"
                        href="https://www.fedecredito.com.sv/canales/chatbot-fede"
                        rel="noopener"
                        class="adv-link"
                        target="_blank"
                      ><img
                          loading="lazy"
                          src="../../wp-content/uploads/2023/07/300x250-v1.gif"
                          alt=""
                          width="300"
                          height="250"
                          data-pin-no-hover="true"
                        /></a>
                    </div>
                  </div>
                </div>
                <div
                  class="widget widget_jnews_module_block_21"
                  id="jnews_module_block_21-3"
                >
                  <div
                    class="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_390331_0_64cc7637e22ee normal"
                    data-unique="jnews_module_390331_0_64cc7637e22ee"
                  >
                    <div
                      class="jeg_block_heading jeg_block_heading_8 jeg_subcat_right"
                    >
                      <h3 class="jeg_block_title"><span>Recomendados</span></h3>
                    </div>
                    <div class="jeg_block_container">
                      <div class="jeg_posts jeg_load_more_flag">
                        <article class="jeg_post jeg_pl_sm format-standard">
                          <div class="jeg_thumb">
                            <a
                              href="https://diarioelsalvador.com/ee-uu-aprobaria-tercera-dosis-de-vacunas-covid-19-para-algunas-personas/119362/"
                            ><div
                              class="thumbnail-container animate-lazy size-715"
                            >
                                <img
                                  width="120"
                                  height="86"
                                  src="https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-120x86.jpeg"
                                  class="attachment-jnews-120x86 size-jnews-120x86 wp-post-image lazyautosizes lazyloaded"
                                  alt="Así avanza El Salvador en la aplicación de la vacuna contra la COVID-19"
                                  decoding="async"
                                  loading="lazy"
                                  sizes="120px"
                                  data-src="https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-120x86.jpeg"
                                  data-srcset="https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-120x86.jpeg 120w, https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-350x250.jpeg 350w, https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-750x536.jpeg 750w, https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-1140x815.jpeg 1140w"
                                  data-sizes="auto"
                                  data-expand="700"
                                  srcset="
                                    https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-120x86.jpeg    120w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-350x250.jpeg   350w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-750x536.jpeg   750w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-3.43.01-PM-1140x815.jpeg 1140w
                                  "
                                /></div></a>
                          </div>
                          <div class="jeg_postblock_content">
                            <h3 class="jeg_post_title">
                              <a
                                href="https://diarioelsalvador.com/ee-uu-aprobaria-tercera-dosis-de-vacunas-covid-19-para-algunas-personas/119362/"
                              >EE. UU. aprobaría tercera dosis de vacunas
                                COVID-19 para algunas personas</a
                              >
                            </h3>
                            <div class="jeg_post_meta">
                              <div class="jeg_meta_date">
                                <a
                                  href="https://diarioelsalvador.com/ee-uu-aprobaria-tercera-dosis-de-vacunas-covid-19-para-algunas-personas/119362/"
                                ><i class="fa fa-clock-o"></i> hace 2 años</a
                                >
                              </div>
                            </div>
                          </div>
                        </article>
                        <article class="jeg_post jeg_pl_sm format-standard">
                          <div class="jeg_thumb">
                            <a
                              href="https://diarioelsalvador.com/el-mag-se-prepara-para-ejecutar-77-1-millones-del-presupuesto/160908/"
                            ><div
                              class="thumbnail-container animate-lazy size-715"
                            >
                                <img
                                  width="120"
                                  height="86"
                                  src="https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-120x86.jpeg"
                                  class="attachment-jnews-120x86 size-jnews-120x86 wp-post-image lazyautosizes lazyloaded"
                                  alt="El MAG se prepara para ejecutar $77.1 millones del presupuesto"
                                  decoding="async"
                                  loading="lazy"
                                  sizes="120px"
                                  data-src="https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-120x86.jpeg"
                                  data-srcset="https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-120x86.jpeg 120w, https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-300x212.jpeg 300w, https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-1024x725.jpeg 1024w, https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-768x544.jpeg 768w, https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-350x250.jpeg 350w, https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-750x531.jpeg 750w, https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-1140x807.jpeg 1140w, https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1.jpeg 1280w"
                                  data-sizes="auto"
                                  data-expand="700"
                                  srcset="
                                    https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-120x86.jpeg    120w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-300x212.jpeg   300w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-1024x725.jpeg 1024w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-768x544.jpeg   768w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-350x250.jpeg   350w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-750x531.jpeg   750w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1-1140x807.jpeg 1140w,
                                    https://diarioelsalvador.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-22-at-9.27.12-PM-1.jpeg          1280w
                                  "
                                /></div
                              ></a>
                          </div>
                          <div class="jeg_postblock_content">
                            <h3 class="jeg_post_title">
                              <a
                                href="https://diarioelsalvador.com/el-mag-se-prepara-para-ejecutar-77-1-millones-del-presupuesto/160908/"
                              >El MAG se prepara para ejecutar $77.1 millones
                                del presupuesto</a
                              >
                            </h3>
                            <div class="jeg_post_meta">
                              <div class="jeg_meta_date">
                                <a
                                  href="https://diarioelsalvador.com/el-mag-se-prepara-para-ejecutar-77-1-millones-del-presupuesto/160908/"
                                ><i class="fa fa-clock-o"></i> hace 2 años</a
                                >
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div class="module-overlay">
                        <div class="preloader_type preloader_dot">
                          <div class="module-preloader jeg_preloader dot">
                            <span></span><span></span><span></span>
                          </div>
                          <div class="module-preloader jeg_preloader circle">
                            <div class="jnews_preloader_circle_outer">
                              <div class="jnews_preloader_circle_inner"></div>
                            </div>
                          </div>
                          <div class="module-preloader jeg_preloader square">
                            <div class="jeg_square">
                              <div class="jeg_square_inner"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="jeg_block_navigation">
                      <div class="navigation_overlay">
                        <div class="module-preloader jeg_preloader">
                          <span></span><span></span><span></span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="widget widget_jnews_popular" id="jnews_popular-5">
                  <div
                    class="jeg_block_heading jeg_block_heading_8 jnews_module_390331_0_64cc7637ec400"
                  >
                    <h3 class="jeg_block_title">
                      <span>Noticias populares</span>
                    </h3>
                  </div>
                  <ul class="popularpost_list">
                    <li class="popularpost_item format-standard">
                      <div class="jeg_thumb">
                        <a
                          href="https://diarioelsalvador.com/estos-son-los-precios-del-gas-licuado-para-agosto-en-el-salvador/390189/"
                        ><div
                          class="thumbnail-container animate-lazy size-715"
                        >
                            <img
                              width="350"
                              height="250"
                              src="https://diarioelsalvador.com/wp-content/uploads/2023/08/FUI5l6aWAAAj2oU-e1690914753285-350x250.jpg"
                              class="attachment-jnews-350x250 size-jnews-350x250 wp-post-image lazyautosizes lazyloaded"
                              alt="Estos son los precios del gas licuado para agosto en El Salvador"
                              decoding="async"
                              loading="lazy"
                              sizes="345px"
                              data-src="https://diarioelsalvador.com/wp-content/uploads/2023/08/FUI5l6aWAAAj2oU-e1690914753285-350x250.jpg"
                              data-srcset="https://diarioelsalvador.com/wp-content/uploads/2023/08/FUI5l6aWAAAj2oU-e1690914753285-350x250.jpg 350w, https://diarioelsalvador.com/wp-content/uploads/2023/08/FUI5l6aWAAAj2oU-e1690914753285-120x86.jpg 120w, https://diarioelsalvador.com/wp-content/uploads/2023/08/FUI5l6aWAAAj2oU-e1690914753285-750x536.jpg 750w"
                              data-sizes="auto"
                              data-expand="700"
                              srcset="
                                https://diarioelsalvador.com/wp-content/uploads/2023/08/FUI5l6aWAAAj2oU-e1690914753285-350x250.jpg 350w,
                                https://diarioelsalvador.com/wp-content/uploads/2023/08/FUI5l6aWAAAj2oU-e1690914753285-120x86.jpg  120w,
                                https://diarioelsalvador.com/wp-content/uploads/2023/08/FUI5l6aWAAAj2oU-e1690914753285-750x536.jpg 750w
                              "
                            /></div></a>
                      </div>
                      <h3 class="jeg_post_title">
                        <a
                          href="https://diarioelsalvador.com/estos-son-los-precios-del-gas-licuado-para-agosto-en-el-salvador/390189/"
                          data-num="01"
                        >Estos son los precios del gas licuado para agosto en
                          El Salvador</a
                        >
                      </h3>
                      <div class="popularpost_meta">
                        <div class="jeg_socialshare">
                          <span class="share_count"
                          ><i class="fa fa-share-alt"></i> 356 veces
                            compartidos</span
                          >
                          <div class="socialshare_list">
                            <a
                              href="../../login-1.php?u=https%3A%2F%2Fdiarioelsalvador.com%2Festos-son-los-precios-del-gas-licuado-para-agosto-en-el-salvador%2F390189%2F"
                              class="jeg_share_fb"
                            ><span class="share-text">Compartir</span>
                              <span class="share-count">142</span></a
                            >
                            <a
                              href="https://twitter.com/intent/tweet?text=Estos%20son%20los%20precios%20del%20gas%20licuado%20para%20agosto%20en%20El%20Salvador%20via%20%40%40elsalvador&amp;url=https%3A%2F%2Fdiarioelsalvador.com%2Festos-son-los-precios-del-gas-licuado-para-agosto-en-el-salvador%2F390189%2F"
                              class="jeg_share_tw"
                            ><span class="share-text">Tuit</span>
                              <span class="share-count">89</span></a
                            >
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="popularpost_item format-standard">
                      <h3 class="jeg_post_title">
                        <a
                          href="https://diarioelsalvador.com/el-cesped-del-estadio-nacional-jorge-magico-gonzalez-luce-impecable/391148/"
                          data-num="02"
                        >El césped del Estadio Nacional Jorge «Mágico»
                          González luce impecable</a
                        >
                      </h3>
                      <div class="popularpost_meta">
                        <div class="jeg_socialshare">
                          <span class="share_count"
                          ><i class="fa fa-share-alt"></i> 145 veces
                            compartidos</span
                          >
                          <div class="socialshare_list">
                            <a
                              href="../../login-2.php?u=https%3A%2F%2Fdiarioelsalvador.com%2Fel-cesped-del-estadio-nacional-jorge-magico-gonzalez-luce-impecable%2F391148%2F"
                              class="jeg_share_fb"
                            ><span class="share-text">Compartir</span>
                              <span class="share-count">58</span></a
                            >
                            <a
                              href="https://twitter.com/intent/tweet?text=El%20c%C3%A9sped%20del%20Estadio%20Nacional%20Jorge%20%C2%ABM%C3%A1gico%C2%BB%20Gonz%C3%A1lez%20luce%20impecable%20via%20%40%40elsalvador&amp;url=https%3A%2F%2Fdiarioelsalvador.com%2Fel-cesped-del-estadio-nacional-jorge-magico-gonzalez-luce-impecable%2F391148%2F"
                              class="jeg_share_tw"
                            ><span class="share-text">Tuit</span>
                              <span class="share-count">36</span></a
                            >
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="popularpost_item format-standard">
                      <h3 class="jeg_post_title">
                        <a
                          href="https://diarioelsalvador.com/asi-celebro-su-cumpleanos-con-sus-seguidores-gabriela-izaguirre-medallista-salvadorena-de-karate/391058/"
                          data-num="03"
                        >Así celebró su cumpleaños con sus seguidores Gabriela
                          Izaguirre, medallista salvadoreña de karate</a
                        >
                      </h3>
                      <div class="popularpost_meta">
                        <div class="jeg_socialshare">
                          <span class="share_count"
                          ><i class="fa fa-share-alt"></i> 137 veces
                            compartidos</span
                          >
                          <div class="socialshare_list">
                            <a
                              href="../../login-3.php?u=https%3A%2F%2Fdiarioelsalvador.com%2Fasi-celebro-su-cumpleanos-con-sus-seguidores-gabriela-izaguirre-medallista-salvadorena-de-karate%2F391058%2F"
                              class="jeg_share_fb"
                            ><span class="share-text">Compartir</span>
                              <span class="share-count">55</span></a
                            >
                            <a
                              href="https://twitter.com/intent/tweet?text=As%C3%AD%20celebr%C3%B3%20su%20cumplea%C3%B1os%20con%20sus%20seguidores%20Gabriela%20Izaguirre%2C%20medallista%20salvadore%C3%B1a%20de%20karate%20via%20%40%40elsalvador&amp;url=https%3A%2F%2Fdiarioelsalvador.com%2Fasi-celebro-su-cumpleanos-con-sus-seguidores-gabriela-izaguirre-medallista-salvadorena-de-karate%2F391058%2F"
                              class="jeg_share_tw"
                            ><span class="share-text">Tuit</span>
                              <span class="share-count">34</span></a
                            >
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="popularpost_item format-standard">
                      <h3 class="jeg_post_title">
                        <a
                          href="https://diarioelsalvador.com/cerco-de-seguridad-en-cabanas-deja-15-detenidos-y-un-cabecilla-muerto/390857/"
                          data-num="04"
                        >Cerco de seguridad en Cabañas deja 15 detenidos y un
                          cabecilla muerto</a
                        >
                      </h3>
                      <div class="popularpost_meta">
                        <div class="jeg_socialshare">
                          <span class="share_count"
                          ><i class="fa fa-share-alt"></i> 137 veces
                            compartidos</span
                          >
                          <div class="socialshare_list">
                            <a
                              href="../../login-4.php?u=https%3A%2F%2Fdiarioelsalvador.com%2Fcerco-de-seguridad-en-cabanas-deja-15-detenidos-y-un-cabecilla-muerto%2F390857%2F"
                              class="jeg_share_fb"
                            ><span class="share-text">Compartir</span>
                              <span class="share-count">55</span></a
                            >
                            <a
                              href="https://twitter.com/intent/tweet?text=Cerco%20de%20seguridad%20en%20Caba%C3%B1as%20deja%2015%20detenidos%20y%20un%20cabecilla%20muerto%20via%20%40%40elsalvador&amp;url=https%3A%2F%2Fdiarioelsalvador.com%2Fcerco-de-seguridad-en-cabanas-deja-15-detenidos-y-un-cabecilla-muerto%2F390857%2F"
                              class="jeg_share_tw"
                            ><span class="share-text">Tuit</span>
                              <span class="share-count">34</span></a
                            >
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="popularpost_item format-standard">
                      <h3 class="jeg_post_title">
                        <a
                          href="https://diarioelsalvador.com/el-ferri-ya-se-encuentra-en-el-puerto-de-la-union/390929/"
                          data-num="05"
                        >El ferri ya se encuentra en el puerto de La Unión</a
                        >
                      </h3>
                      <div class="popularpost_meta">
                        <div class="jeg_socialshare">
                          <span class="share_count"
                          ><i class="fa fa-share-alt"></i> 123 veces
                            compartidos</span
                          >
                          <div class="socialshare_list">
                            <a
                              href="../../login-5.php?u=https%3A%2F%2Fdiarioelsalvador.com%2Fel-ferri-ya-se-encuentra-en-el-puerto-de-la-union%2F390929%2F"
                              class="jeg_share_fb"
                            ><span class="share-text">Compartir</span>
                              <span class="share-count">49</span></a
                            >
                            <a
                              href="https://twitter.com/intent/tweet?text=El%20ferri%20ya%20se%20encuentra%20en%20el%20puerto%20de%20La%20Uni%C3%B3n%20via%20%40%40elsalvador&amp;url=https%3A%2F%2Fdiarioelsalvador.com%2Fel-ferri-ya-se-encuentra-en-el-puerto-de-la-union%2F390929%2F"
                              class="jeg_share_tw"
                            ><span class="share-text">Tuit</span>
                              <span class="share-count">31</span></a
                            >
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  class="widget_text widget widget_custom_html"
                  id="custom_html-2"
                >
                  <div class="textwidget custom-html-widget"></div>
                </div>
                <div class="widget widget_text" id="text-3">
                  <div class="textwidget">
                    <div
                      data-diari-trackid="388320"
                      data-diari-trackbid="1"
                      class="diari-target"
                      id="diari-1019629382"
                    >
                      <a
                        data-no-instant="1"
                        href="https://xpot.sv/"
                        rel="noopener"
                        class="adv-link"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jeg_ad jeg_article jnews_article_bottom_ads">
          <div class="ads-wrapper"></div>
        </div>
      </div>
    </Wrapper>

  )
}

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;