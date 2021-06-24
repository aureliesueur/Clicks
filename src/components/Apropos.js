import React from 'react';
import '../styles/Apropos.scss';
import '../styles/App.scss';

function Apropos() {
  return (
    <div className="apropos">
      <div className="apropos__atelier">
        <div className="apropos__box">
          <h1 className="apropos__title">L'Atelier</h1>
          <p>L'Atelier Clicks Vintage est une boutique installée à Paris depuis 2011, dans le quartier des Chardons, qui était historiquement le centre névralgique des premiers photographes professionnels, à la naissance de la photographie en chambre noire (photos de mariage, portraits de famille...).<br/>
          Nous chinons pour vous des stocks anciens de commerces, ateliers, usines dans toute la France. Ceux-ci sont ensuite entièrement restaurés dans notre atelier, par notre équipe composée de cinq ingénieurs passionnés et compétents.</p>
        </div>
      </div>
      <div className="apropos__rendu">
        <h2 className="apropos__subtitle">Le rendu "rétro"</h2>
        <p>Le rendu "rétro" est la première raison pour laquelle la mode du "vintage" photographique fonctionne toujours. Nostalgique du grain, des couleurs désaturées, des défauts optiques, des poussières, des déformations papier et autres, finalement ce que nous aimons, ce sont les imperfections. Fini les optiques toujours plus précises, les capteurs de plus en plus définis et les corrections d'aberrations qui assurent à ceux qui en ont besoin d'avoir confiance en leur matériel. Place au vignettage, au grain marqué, aux pellicules poussiéreuses, au flou, et laissons la magie opérer.</p>
      </div>
      <div className="apropos__look">
        <h2 className="apropos__subtitle">Le look "rétro"</h2>
        <p>Outre l'effet patiné recherché dans les images par les amateurs de rétro, le look des appareils photo est également un argument qui a fait ses preuves et qui perdure. Deux marques nous viennent immédiatement à l'esprit : Fujifilm et Olympus (nous pensons également à Panasonic), adeptes des robes anciennes sur leurs nouveaux appareils numériques. Loin des designs de certains nouveaux produits, tels que le Pentax K-S1 ou la caméra HTC Re, les deux marques optent encore et toujours pour une ergonomie et un design similaire à ceux des argentiques. Hormis l'effet de style, c'est également un moyen de revenir aux sources, de rendre nostalgiques les plus anciens grâce à une ergonomie, un toucher et une sensation retrouvée. En effet, parallèlement au fait que les écrans deviennent tactiles et orientables, à l'intégration du Wi-Fi ou du NFC pour le partage, les barillets et les molettes de contrôle directement accessibles sur le boîtier sont mis en avant et assurent une prise en main comme sur les anciens reflex ou argentiques.</p>
      </div>
      <quote className="apropos__quote">Click click, c'est dans la boite!</quote>
      <div className="apropos__calltoaction">
        <div className="apropos__box2">
            <h2 className="apropos__subtitle">A vous, amateurs ou amoureux du petit boitier noir vintage !</h2>
            <p>Zooms, trépieds, flashs d'occasion, objectifs, boitiers, pellicules rétro, vieux Polaroid ou appareils photos Leica d'hier...<br />
            Notre sélection va vous enchanter ! </p>
        </div>
      </div>
       
    </div>
  );
}

export default Apropos;
