import { useQuery } from '@tanstack/react-query'
import './App.css'
import axios from 'axios'

import cat from './img/th.jpg'

const BASE_URL = 'https://api.jikan.moe/v4/anime?_limit=4'

const instance = axios.create({ baseURL: BASE_URL })



function App() {


  const fetchList = () => {

    return instance.get('').then((res) => res.data.data);
  }

  const { data } = useQuery({
    queryKey: ['lists'],
    queryFn: fetchList,

  })

  console.log(data);


  return (



    <div className='w-[800px] h-auto  bg-gray-500 grid grid-cols-5 grid-rows-1 gap-3.5 p-2.5' >

      {data ? data.map((list) => (
        <div className='  p-2' key={list.mal_id} >
          <div className='relative w-auto h-auto' >
            <img className='object-fit h-48 w-96 rounded-lg' src={list.images.jpg.image_url} />
            <p className='absolute bottom-0 left-0 bg-violet-500 rounded text-sm px-0.5' >Ep {list.episodes}</p>
          </div>

          <p>{list.title}</p>

        </div>
      )) : null}

      {/* <div className='relative  p-2' >

        <img className='object-contain h-48 w-96 rounded-3xl' src='https://cdn.myanimelist.net/images/anime/4/19644.jpg' />
        <p> Cowboy Bebop</p>
        <p className='absolute bottom-8 left-2 bg-violet-500 rounded-md' >Ep 26</p>
      </div> */}

    </div>






  )
}

export default App


{/* <div>
        {data ? data.map((list) => (< div key={list.mal_id} > <h1>{list.mal_id}</h1></div>)) : <div>ALAWS</div>}

      </div > */}