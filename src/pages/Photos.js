import { useContext } from "react";
import { Context } from "../Context";
import Image from '../components/Image'
import {getClass} from '../utils/getClass'

export default function Photos() {
  const {allPhotos} = useContext(Context);
  
  const photos = allPhotos.map((item,index)=>{
    return <Image key={item.id} img={item} className={getClass(index)}/>
  })


  return (
    <main className='photos'>
      {photos}
    </main>
  );
}
