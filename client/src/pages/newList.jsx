import React, { useState, useEffect } from "react";
import newApi from "../api/TranferMarketApi/newApi";

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await newApi.getAll();
        setNews(response.news);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className='mt-[60px] px-[120px]'>
      <div className='bg-[#ED1639] text-4xl text-white w-[250px] text-center'>
        Latest News
      </div>
      <div className='flex gap-7 w-full h-[500px] '>
        <div className='w-[75%] bg-gradient-to-tl from-red-700 text-[#666] h-[500px] text-center rounded-lg '>
          {news
            .filter((item, index) => {
              return index < 1;
            })
            .map((item) => (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.newsFirstImage})` }}
                className='pt-[400px] h-1/2 bg-contain bg-center bg-no-repeat	'
              >
                <li className='list-none text-black text-center text-xl'>
                  {item.newsHeadline}
                </li>
              </div>
            ))}
        </div>
        <div className='w-[25%] overflow-auto rounded-lg '>
          <ul className=''>
            {news
              .filter((item, index) => {
                return index > 0;
              })
              .map((item) => (
                <div
                  className='font-semibold mt-0 mb-3 px-4 bg-[#f1f1f1]'
                  key={item.id}
                >
                  <li className=''>{item.newsHeadline}</li>
                  <img src={item.newsFirstImage} />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
