import { useEffect, useState } from "react";
import Container from "../Layout/Container";
import NewsCard from "../Layout/NewsCard";
import Row from './../Layout/Row';
import AxiosInstans from './../../api/AxiosInstans';

export default function Home() {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(()=>{
        AxiosInstans.get('top-headlines?country=us')
        .then((apiResponse)=>apiResponse.data)
        .then((news)=>news.articles)
        .then((articles)=>{            
            setNewsItems(articles);
        });
    },[]);

  return <>

  <Container>
    <Row>
        {newsItems&&newsItems.map((article,index)=><div key={index} className="col-md-4"><NewsCard article={article} /></div>)}
    </Row>
  </Container>

  </>
}
