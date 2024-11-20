
const api_url = process.env.NEXT_PUBLIC_API_URL;
const token = '8eec51f7f8bb98d277f49e44633c5b7b221a0b3c44a712f2c462497f46539e4ab7392c43c1b6d19a37ecaf329e7f8ae1d63b39a99d912ec4c7ee7abd85bf11cc1fe2817eb105626d365cb135427e935d34e1832799e15b670015251e5f02da902195dc08b679ce92fb00be2647c9289ddb1714324f8e4182fae5e46f1ded6507'

export const HomeData = async(locale) =>{

const response = await fetch(`${api_url}/api/home-page?populate[Hero][populate]=*&populate[MarketingInfo][populate]=*&populate[Services][populate]=*&populate[ProcessCard][populate]=*&locale=${locale}`,{
    headers:{
        'Authorization': `Bearer ${token}`, // Add the token here
        
    }
})

const data = response.json();
await new Promise((resolve) => setTimeout(resolve, 4000));
return data

}

const FooterData = async(locale)=>{

    const response = await fetch(`${api_url}/api/Footer?populate[FooterLinks][populate]=*`,{

        headers:{
            'Authorization': `Berer ${token}`,
        }
        

    })
 
    const data = response.json();   
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return data;

}


const GetData = async(url)=>{

const response = await fetch(`${api_url}${url}`,{

    headers:{
        'Authorization': `Berer ${token}`,
    }

})
const data = response.json();
return data;


}