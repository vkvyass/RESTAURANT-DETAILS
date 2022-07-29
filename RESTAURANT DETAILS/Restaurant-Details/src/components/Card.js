import { Heading,HStack ,Image,Text,Box,
    Flex, Spacer,Divider,
ButtonGroup,Button} from "@chakra-ui/react"

 export default function Card(props){
    var i =0
     return(
        <>
        <Box p='1%'
        border={'2px'}
        _hover={{ fontWeight: 'semibold'}}
         borderRadius='7px'
         borderColor={'blackAlpha.400'}
        
        w='400px' h="180px" >
        <HStack>
            <Image h='100px' w='100px'src={props.x.img}/>
            <Box>
               <Flex w='270px'>
                <Heading fontSize={'20px'}>
                {props.x.name}
                </Heading>
<Spacer></Spacer>
                
<Box>
    {/* {console.log(props.x.img,i++)} */}
    <Text  fontSize='sm'>{
        props.x.totalvote
    }
    </Text>
    <Text fontSize={'sm'}>
    {props.x.reviews}
    </Text>
</Box>



                </Flex>
                <Box textAlign={'left'}>
                <Text> Cost {props.x.price*2 +" "}for one</Text>
                <Text> Min rs     {props.x.price +" "}
* Upto 30 Mint</Text>
                <Text>{props.x.paymethod.cash?"Cash on delivery":"Accepts online payment Only"}</Text>
                
                </Box>


            </Box>

        </HStack>
      <Divider></Divider>
        <Button w='200px'  variant={'outline'} ml='185px'>  Order online > </Button>
        </Box>
        </>
     )
 }