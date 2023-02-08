import axios from 'axios';
import {Button,Box,Text,SimpleGrid,Image,Heading,Container} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
import { addCart } from '../redux/Cart/CartAction';
import { useDispatch, useSelector } from 'react-redux';
const Loading=()=>{
    return(
      <Container>
        <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
      </Container>
      
    )
   }
const Clearance=()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [data,setData]=useState([]);
    const [page, setPage] = useState(1);
    const {search}=useSelector((store)=>store.product)
    const getData=()=>{
        setIsLoading(true)
        axios.get(`https://api-pathak-database.vercel.app/Clearance?_page=${page}&_limit=20`)
        .then((res)=>{
            setData(res)
            setIsLoading(false)
          console.log(res.data)
        })
        .catch((error)=>{
            setIsLoading(false)
            console.log(error)
        })
      }
      useEffect(()=>{
        getData(page);
      },[page])
     
      const dispatch=useDispatch()

    return(isLoading ? ( <Loading/>) : (
        <Box>
        <Box boxShadow='md' display='flex' justifyContent='center' alignItems='center' w='100%' h='100px'><Heading>Featured Outlet Deals</Heading></Box>
         <Box align='center' bg=' #f1f6fd' >
        <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 5 }} spacing={6} w='90%'>
              {data?.data?.map((el) => (
             <Box
              className='eachBox'
               mt='20px'
               align='center'
               key={el.ProductId}
               style={{
                 background:'white',
                 fontFamily: "Open Sans",
                 display: "flex",
                 padding:'10px',
                 flexDirection: "column",
                 alignItems: "center"
               }}
             >
          
            <Image src={el.PicPath}></Image>
            <Box
          mt='1'
          
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
       {el.ProductionName}
        </Box>
            
             <Text fontWeight='600' fontSize='large'>${el.SalePrice}</Text>
             <Text fontSize='large'>${el.CSSalesPrice}</Text>
             <Button onClick={()=>dispatch(addCart(el))} colorScheme="whatsapp" display={"block"} margin={"auto"} mt={"1"}>Add To Cart</Button>
          </Box>
        ))}
        
    </SimpleGrid>
    </Box>
    <Box align="center" mb='10px'bg=' #f1f6fd' padding='0px'>
    <Button   colorScheme='teal' variant='outline' disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </Button>
      <Button colorScheme='blue' m='20px'>{page}</Button>
      <Button colorScheme='teal' variant='outline' disabled={page >= 2} onClick={() => setPage(page + 1)}>
        NEXT
      </Button>
    </Box>
</Box>
  
    )
 )
}
export default Clearance;



