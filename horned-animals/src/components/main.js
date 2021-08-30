import React from 'react';
import HorendBeasts from './HorendBeasts';
import array  from '../assest/data.json';


let newarr=array.map(

(elemnt)=>{
return <HorendBeasts
title={elemnt.title}
image_url={elemnt.image_url}
description={elemnt.description}

/>
}
)

class Main extends React.Component {

    render() {

        return (
         <main>
            {newarr}
         </main>
        )
    }
}

export default Main;