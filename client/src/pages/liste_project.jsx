// Version clean à utiliser après tests
import React from 'react';
import { Link } from 'react-router-dom';

const ListeProject = () => {
  // Fonction pour obtenir le chemin de l'image avec fallback
  const getImagePath = (imageName) => {
    // Essayer plusieurs chemins possibles
    const paths = [
      `/images/${imageName}`,
      `./images/${imageName}`,
      `/dist/images/${imageName}`,
      `./dist/images/${imageName}`
    ];
    return paths[0]; // Commencer par le chemin principal
  };

  // Fonction pour gérer les erreurs d'images
  const handleImageError = (e, imageName) => {
    const paths = [
      `/images/${imageName}`,
      `./images/${imageName}`,
      `/dist/images/${imageName}`,
      `./dist/images/${imageName}`,
      `https://via.placeholder.com/400x300?text=Image+Non+Disponible`
    ];
    
    const currentSrc = e.target.src;
    const currentIndex = paths.findIndex(path => currentSrc.includes(path.split('/').pop()));
    
    if (currentIndex < paths.length - 1) {
      e.target.src = window.location.origin + paths[currentIndex + 1];
    }
  };

  // Exemple de données de projets
  const projets = [
    {
      id: 1,
      titre: "Site E-commerce Fitmode",
      image: "fitmode.png",
      description: "Une boutique en ligne moderne de vêtements et accessoires de sport, développée avec des technologies web avancées pour offrir une expérience d'achat fluide et responsive.",
      lien: "https://derroce.com/shopping-website/"
    },
    {
      id: 2,
      titre: "BigProjet",
      image: "bigProjetLogo.png",
      description: "Application de gestion complète pour les écoles et centres de formation. Système intégré permettant la gestion des étudiants, des cours, des inscriptions et du suivi pédagogique.",
      lien: "https://peru-ape-766379.hostingersite.com/login"
    },
    {
      id: 3,
      titre: "Projet 3",
      image: "image1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus placerat fringilla. Duis a elit et dolor laoreet volutpat.",
      lien: "/projet/3"
    },
    {
      id: 4,
      titre: "Projet 4",
      image: "image1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et diam eget libero egestas mattis sit amet vitae augue.",
      lien: "/projet/4"
    },
    {
      id: 5,
      titre: "Projet 5",
      image: "image1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem.",
      lien: "/projet/5"
    },
    {
      id: 6,
      titre: "Projet 6",
      image: "image1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, quis dignissim sem.",
      lien: "/projet/6"
    }
  ];

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 10
  };

  const contentStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 20
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '8px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    lineHeight: '1.2'
  };

  const descriptionStyle = {
    color: '#e5e5e5',
    textAlign: 'center',
    marginBottom: '16px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
    lineHeight: '1.4'
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-site">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 relative text-primary">
          Nos Projets
          <span className="block w-24 h-1 bg-primary-500 mx-auto mt-2"></span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet) => (
            <div 
              key={projet.id} 
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card"
            >
              <img 
                src={getImagePath(projet.image)}
                alt={projet.titre}
                className="w-full h-64 object-cover"
                onError={(e) => handleImageError(e, projet.image)}
                loading="lazy"
              />
              <div 
                style={overlayStyle}
                className="group-hover:opacity-100"
              ></div>
              <div 
                style={contentStyle}
                className="group-hover:opacity-100"
              >
                <h2 style={titleStyle}>
                  {projet.titre}
                </h2>
                <p style={descriptionStyle}>
                  {projet.description}
                </p>
                {projet.lien.startsWith('http') ? (
                  <a 
                    href={projet.lien}
                    className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
                    style={{
                      backgroundColor: '#1d4ed8',
                      color: '#ffffff',
                      padding: '8px 24px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s ease'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Découvrir le projet
                  </a>
                ) : (
                  <Link 
                    to={projet.lien}
                    className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
                    style={{
                      backgroundColor: '#1d4ed8',
                      color: '#ffffff',
                      padding: '8px 24px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    Découvrir le projet
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListeProject;
