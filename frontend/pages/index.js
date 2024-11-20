'use client'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from 'next/image';
import '../styles/component/test.scss';
import { HomeData } from "../lib/api/apiService";
import imgTokyoSeach from "../public/img/tokyo-magnifier-web.png";
import iconButton from '../public/img/icon.png'
import Accordion from "../components/organisms/Accordion";
import Contact from "../components/organisms/Contact";
import LoadingScreen from "../components/templates/LoadingScreen";
import CurtainAnimation from "../components/templates/CurtainAnimation";
export default function Home() {

  const [info, setData] = useState({}); // Initialiser à 'null'
  const [loading, setLoading] = useState(true); // Initialiser l'état de chargement à `true`
  const [services, setServices] = useState();
  const [Marketing, setMarketing] = useState();
  const [pocessus, setProcessus] = useState();
  const { locale, locales, push, pathname } = useRouter();
 const [isactive,setIsActive ] = useState();
 
  const switchLanguage = (lang) => {
    push(pathname, pathname, { locale: lang });
  };

  useEffect(() => {
    const fetchData = async () => {
      const datas = await HomeData(locale);
      // Vérifie la structure ici
      setData(datas.data['Hero']); // Accéder au tableau à l'intérieur de l'objet
      setServices(datas.data['Services']);
      setMarketing(datas.data['MarketingInfo']);
      setProcessus(datas.data['ProcessCard']);
      setTimeout(()=>{
  setLoading(false)
      },4500)
    
    };
    fetchData();
  }, [locale]);

  // const element = INFO.map((item,index) =>{
  //   return(
  //   <p key={item.id}> {item} </p>)
  // })
  // Vérifier si les données sont disponibles
  if (loading) {
    return <CurtainAnimation/>;
  }

  return (
    
    <div className="home container">
      <div className="hero">
        <div className="hero__left">
          {/* {element} */}
          <h1>{info.Headline}</h1>
          <p> {info.Text} </p>
          <a className="primary-btn">{info.btn.Text}</a>
        </div>
        <div className="hero__right">
          <img src={`http://localhost:1337${info.Image.url}`} />
        </div>
      </div>

      <div className="service">
        <div className="service__title">
          <h2>Service</h2>
          <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
        <div className="service__content">
          {services.map((item, index) => (

            <div className="service__card" key={index}>
              <div className="service__card_left">
                <h3> {item.Title}</h3>

                <a className="icon-btn" href={`${item.CTA.Url}`}> <span className="icon"><Image src={iconButton} width={30} height={30} /> </span> En apprendre plus </a>
              </div>


              <div className="service__card_right">

                <img className="" src={`${process.env.NEXT_PUBLIC_API_HOST}${item.image.url}`} width={210} height={166}></img>
              </div>
            </div>
          ))}

        </div>



      </div>
      <div className="marketing">

        <div className='marketing__card'>
          <div className="marketing__card_left">
            <h3> {Marketing.Headline}</h3>
            <p>{Marketing.Paragraphe}</p>

            <a className="primary-btn">{Marketing.Btn.Text}</a>
          </div>
          <div className="marketing__card_right">
            <img width={300} height={300} src={`${process.env.NEXT_PUBLIC_API_HOST}${Marketing.Image.url}`} ></img>
          </div>

        </div>

      </div>

      <div className="working">
        <div className="working__top">
          <h2> Nos Processus</h2>
          <p>Guide étape par étape pour atteindre vos objectifs commerciaux</p>
        </div>
          {pocessus.map((item,index) =>(
            <Accordion key={index} title={item.Headline} content={item.Description}/>
           ) )}
      </div>
      <Contact/>
    </div>
  );
}
