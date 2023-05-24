import React from "react";
import "./VeilleTech.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const VeilleTech = () => {
  const data = [
    {
      img:"https://media.istockphoto.com/id/1452604857/fr/photo/homme-daffaires-touchant-le-fonctionnement-du-cerveau-de-lintelligence-artificielle.jpg?b=1&s=170667a&w=0&k=20&c=GJJy5993_iChiZ1k-vYgxfnlZe9btudJz2aw9WnEGMc=",
      title:"L'adoption croissante de l'IA et du machine learning dans les applications de développement",
      des: "Cet article du site du gouvernement français présente l'intelligence artificielle (IA) comme une opportunité pour les entreprises de toutes tailles et de tous secteurs. Il met en avant les avantages de l'IA pour l'optimisation des processus, l'amélioration des produits et services, ainsi que la création de nouveaux modèles d'affaires.",
      link: "https://www.economie.gouv.fr/entreprises/intelligence-artificielle#",
    },
    {
      img:"https://img.freepik.com/vecteurs-libre/technologie-futuriste-vecteur-cercle-numerique-fond-circuit_53876-117800.jpg?w=2000",
      title: "L'utilisation croissante des conteneurs et de Kubernetes",
      des: "Kubernetes, une plateforme open-source de gestion de conteneurs qui permet aux développeurs de déployer, de gérer et de scaler des applications en conteneur de manière efficace et flexible. Il présente les principales  fonctionnalités de Kubernetes ainsi que ses avantages pour les entreprises qui souhaitent migrer leurs applications vers des environnements de cloud hybride.",
      link: "https://www.objetconnecte.com/tout-savoir-sur-kubernetes/",
    },
    {
      img:"https://image.slidesdocs.com/responsive-images/background/business-technology-display-high-tech-board-modern-powerpoint-background_2df39f3dac__960_540.jpg",
      title: "La montée en puissance des applications en temps réel",
      des: "Microsoft a mis au point un système de deep learning en temps réel pour améliorer la précision et l'efficacité de ses services cloud, notamment pour la reconnaissance vocale, la traduction automatique et la détection d'anomalies. Ce système est basé sur des réseaux de neurones convolutifs et utilise des technologies de traitement distribué pour gérer de grands volumes de données en temps réel.",
      link: "https://www.lemondeinformatique.fr/actualites/lire-microsoft-passe-au-deep-learning-temps-reel-69130.html",
    },
    {
      img:"https://img.freepik.com/photos-premium/dispositifs-techniques-icones-connectes-planete-terre-numerique_117023-449.jpg",
      title: "L'intelligence artificielle de Snapchat fait polémique",
      des: "L'intelligence artificielle de Snapchat a récemment fait polémique car elle utilise une technologie de \"race swap\"pour modifier l'apparence des utilisateurs en leur faisant adopter une autre apparence ethnique. Cette fonctionnalité a été critiquée pour sa potentielle contribution à la propagation des stéréotypes raciaux et à la discrimination.",
      link: "https://www.estrepublicain.fr/science-et-technologie/2023/05/07/on-vous-explique-pourquoi-l-intelligence-artificielle-de-snapchat-fait-polemique",
    },
    {
      img:"https://cdn-aakbk.nitrocdn.com/CjypjGnYsWSbzCQAiuRDJxKIUtdRMBUh/assets/images/optimized/rev-495ff4a/wp-content/uploads/2022/05/img-rtx-m-at-a-glance-375x211.jpg",
      title: "Développement Low-Code/No-Code",
      des: "L'IA générative est en train de révolutionner le développement low-code et no-code, en permettant aux développeurs et aux utilisateurs  non techniques de créer des applications en générant automatiquement du code à partir de modèles et de données. Cette technologie devrait rendre le développement d'applications plus rapide, plus facile et plus accessible à un plus grand nombre de personnes.",
      link: "https://www.lemondeinformatique.fr/actualites/lire-l-ia-generative-va-doper-le-developpement-low-code-et-no-code-90245.html",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" veilletech-section">
      <div className="section-title">
        <h5>Veille Technologique</h5>
        <span className="tech-line-vt"></span>
      </div>

      <div className="veilletech-slider" id="vt">
        <Slider{...settings} >

            {data.map((item,index) => (

               <div className="content-slider-main">
                 <div className="content-slider" key={index-1}>
                    <img src={item.img} alt="veille tech img" className="center-image" />
                    <p>{item.title} </p>
                    <p>{item.des} </p>
                    <a href={item.link} className="vp">Voir plus</a>
                </div>
               </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default VeilleTech;
