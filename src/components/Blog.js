import React from 'react';
import '../styles/Blog.scss';
import '../styles/App.scss';
import article1 from "../assets/article1.jpg";
import article2 from "../assets/article2.jpg";
import article3 from "../assets/article3.jpg";
import Card from 'react-bootstrap/Card';

function Blog() {
  const articles = [
    {
      titre: "Le rétro, 10 ans que ça dure et toujours à la page !",
      imageUrl: article1,
      image: "Image rétro",
      auteur: "Céline Nebor",
      date: "14/06/21",
      description: "Les effets de mode connaissent toujours des pics de popularité gigantesques, puis un beau jour s'essoufflent, retombent et stagnent. C'est à ce moment que l'on commence à entendre l'une des phrases préférées de nos aînés : 'C'était mieux avant' ! Et il n'y a pas que les jeans à pattes d'éléphant qui refont surface, puisque la photographie prône encore et toujours le 'vintage'. Se nourrir des avancées technologiques pour revenir à des choses essentielles et retrouver ce 'cachet' d'antan, c'est ce vers quoi tendent certains constructeurs et inventeurs. Mais l'innovation photo 'vintage' idéale existe-t-elle réellement ? Le vintage est dans l’ère du temps. La nostalgie du numérique refait surface et les utilisateurs d’appareil photo souhaitent à nouveau ressentir ce frisson après chaque photographie prise. Sera-t-elle bonne, bien cadrée, bien exposée… Autant de questions que l’on ne se posait plus avec le numérique."
    },
    {
      titre: "Kodak, le phénix renaît de ses cendres",
      imageUrl: article2,
      image: "Pellicule Kodak",
      auteur: "Max Lebourgois",
      date: "02/03/21",
      description: 'Il y a une semaine jour pour jour, nous faisions une rétrospective sur l’usage des petits appareils jetable dont Kodak se targue d’être le leader du marché. L’entreprise de l’état de New York refait surface dans l’actualité photographique avec une nouvelle quelque peu déconcertante. Venez découvrir le tournant vintage que Kodak a annoncé lors de la CES de Las Vegas qui s’est tenue courant janvier. Attention, cet article est réservé aux personnes nées avant les 90… Amis fan d’Instagram, de Snapchat et de Facebook Live, vous risquez de trouver un vocabulaire digne d’un temps où “dacodac” et “un peu, mon n’veu” faisaient partie du verbiage courant de la jeunesse d’alors. Car oui, Kodak a annoncé la résurrection d’un de ses produits phare : l’ektachrome. Vous ne vous en souvenez pas ? Il s’agit d’une pellicule photo un peu particulière. En effet, Kodak a sorti son premier modèle dans les années 40 et n’a cessé de l’améliorer afin de rendre son utilisation de plus en plus facile. Ce sont ces petites diapositives que l’on avait l’habitude de regarder sur grand écran en classe, en famille ou au travail. Un préposé à la télécommande était toujours la même personne chargée de faire défiler les petites diapositives. La raison pour laquelle ces pellicules ont conquis le monde est simple :  dans l’univers argentique le développement et le stockage des photos est assez compliqué. Or, ces pellicules une fois développées conservent extrêmement bien les couleurs. C’est d’ailleurs la raison de son succès auprès des photoreporters et les professionnels de la mode. National Geographic, le fameux magazine de reportage photo sur la nature, dit-on, était friand de ces petites diapositives (des milliers, si ce n’est, des millions de pellicules dorment dans les archives du journal). Le magasine aime d’ailleurs ressortir ses anciens clichés qui s’entassent dans ses locaux. Abandonnée en 2012 au moment du dépôt de bilan de Kodak, la vague du tout numérique manqua de faire sombrer la pellicule et la mémoire de son concepteur dans l’oubli. Alors, pourquoi ce retour soudain de la marque rouge et jaune sur ce best seller d’un temps passé ?'
    }, 
    {
      titre: "New Old Stock : la banque d’image vintage",
      imageUrl: article3,
      image: "Photo vintage de New Island",
      auteur: "Véronique Meunier",
      date: "01/12/2020",
      description: 'À l’heure de l’explosion de nouvelles banques d’images gratuites, New Old Stock tire son épingle du jeu en proposant un contenu vraiment différent. Comme son nom le suggère, New Old Stock propose des photos vintages, libres de droit et issues d’archives publiques. Toutes les images sont sélectionnées à la main par le designer Cole Townsend grâce au fond Flickr Commons. Pour l’heure, le site est un Tumblr et ne dispose donc pas de moteur de recherche. Qu’importe, vous pouvez utiliser ces photos pour vos projets personnels et non-commerciaux. Ce n’est pas à vous que je vais l’écrire, mais pensez toujours à vérifier la licence de l’image avant de l’utiliser sur un projet. Dans la même veine, je vous conseille le site vintagestockphotos.com qui propose des milliers d’images (payantes mais utilisable pour des projets commerciaux). La British Library vient de publier récemment plus d’un million d’images issus de livres publiés avant 1900. Une incroyable collection à ne pas manquer !'
    }
  ]
  return (
    <div className="blog">
      <h1 className="blog__title">Ça vous intéresse ?</h1>
      <div className="blog__list">

      { articles.map(article => (
          <Card className="blog__article article" style={{width:'45%'}}>
            <Card.Img src={article.imageUrl} alt={article.image} className="article__img" />
            <Card.Body className="camera__body">
              <h2 className="article__title">{article.titre}</h2>
              <h3 className="article__infos">Par <span>{article.auteur}</span> - Publié le {article.date}</h3>
              <Card.Text className="article__text">{article.description}</Card.Text> 
            </Card.Body>
          </Card>
        )) }
        
      </div>
    </div>
  );
}

export default Blog;
