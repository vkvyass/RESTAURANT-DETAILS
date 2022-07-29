import data from './data.json';
import Cards from './Card';
import { Stack,Grid,ButtonGroup, Button} from "@chakra-ui/react";
import { useState } from 'react';
// import { ButtonGroup } from 'react-bootstrap'

export default function Home(){
     const [item,seritem]=useState(data.data)
    //  console.log(data)


     const fill=(star)=>{
        var neew_list=data.data.filter(element=>element.reviews>=star)
        seritem(neew_list)
     }
     const fily=(star)=>{
    if(star==='cash')
        var neew_list=data.data.filter(element=>element.paymethod.cash)
        else if('online')
        var neew_list=data.data.filter(element=>element.paymethod.card)
        else
        var neew_list=data.data

        seritem(neew_list)
     }
 return(
<>

<ButtonGroup>
 <Button onClick={()=>{fill(4)}}>
 ★★★★


 </Button>
 <Button onClick={()=>{fill(3)}}>
 ★★★


 </Button>
 <Button onClick={()=>{fill(2)}}>
 ★★


 </Button>
 <Button onClick={()=>{fill(1)}}>
 ★


 </Button>
 <Button onClick={()=>{fily('cash')}}>
 Cash only


 </Button>
 <Button onClick={()=>{fily("online")}}>
 Online only 


 </Button>
 <Button onClick={()=>{fily('all')}}>
 all


 </Button>

</ButtonGroup>
<Grid templateColumns='repeat(3, 1fr)' gap={6}>
 {
    item.map((e,i)=><Cards x ={e} key={i}/>)
}
</Grid>

</>

 )


}