
import { useRouter } from "next/router";

import Image from 'next/image';
import '../styles/component/test.scss';
import { HomeData } from "../../lib/api/apiService";
import imgTokyoSeach from "../../public/img/tokyo-magnifier-web.png";
import iconButton from '../../public/img/icon.png'
import Accordion from "../components/organisms/Accordion";
import Contact from "../components/organisms/Contact";
import LoadingScreen from "../components/templates/LoadingScreen";
import CurtainAnimation from "../components/templates/CurtainAnimation";



export async function getServerSideProps(context) {
  const locale = context.locale || 'en'; // Récupère la locale (ou définit une valeur par défaut)
  const {hero,services,marketing,processes} = await HomeData(locale);

  return {
    props: {
      hero, // Passe les données en tant que props à la page
      services,
      marketing,
      processes
    
    },
  };
}

export default function Home({hero,services,marketing,processes}) {


  console.log(hero)


 
  const switchLanguage = (lang) => {
    push(pathname, pathname, { locale: lang });
  };

 

  // const element = INFO.map((item,index) =>{
  //   return(
  //   <p key={item.id}> {item} </p>)
  // })
  // Vérifier si les données sont disponibles

  return (
    
    <div className="home container">
      <div className="hero">
        <div className="hero__left">
          {/* {element} */}
        <h1>{hero.Headline}</h1>
          <p> </p>
          <a className="primary-btn">{hero.btn.Text}</a>
        </div>
        <div className="hero__right">
          <img src={`${process.env.NEXT_PUBLIC_API_HOST}${hero.Image.url}`}  />
        </div>
      </div>

      <div className="service">
        <div className="service__title">
          <h2>Service</h2>
          <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
        <div className="service__content">
       
{services.map((item)=>(
            <div className="service__card" key={2}>
              <div className="service__card_left">
                <h3>{item.Title} </h3>

                <a className="icon-btn" href='#'> <span className="icon"><Image src={iconButton} width={30} height={30} /> </span> En apprendre plus </a>
              </div>


              <div className="service__card_right">

                <img className="" src={`${process.env.NEXT_PUBLIC_API_HOST}${item.image.url}`}  width={210} height={166}></img>
              </div>
            </div>
        ))} 
        </div>



      </div>
      <div className="marketing">

        <div className='marketing__card'>
          <div className="marketing__card_left">
            <h3> {marketing.Headline} </h3>
            <p>{marketing.Paragraphe}</p>

            <a className="primary-btn"></a>
          </div>
          <div className="marketing__card_right">
            <img width={300} height={300} src={`${process.env.NEXT_PUBLIC_API_HOST}${marketing.Image.url}`} ></img>
          </div>

        </div>

      </div>

      <div className="working">
        <div className="working__top">
          <h2> Nos Processus</h2>
          <p>Guide étape par étape pour atteindre vos objectifs commerciaux</p>
      
        </div>
          {processes.map((item,index)=>(
         <Accordion key={index} title={item.Headline} content={item.Description}/>

          ))}
      </div>
      <Contact/>
    </div>
  );
}
