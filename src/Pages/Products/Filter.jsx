import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Checkbox, Text, Heading, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Input, Flex, Button, Grid, MenuItem, Menu, MenuButton, MenuList, Image, List, ListItem } from '@chakra-ui/react'
import { BsCircleFill } from 'react-icons/bs'
import { StarIcon } from '@chakra-ui/icons'
import {ChevronDownIcon, ChevronUpIcon, CloseIcon} from '@chakra-ui/icons'


const country=[{img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png', name:'Europe'},
              {img:'https://flagcdn.com/w320/de.png',name:'Germany'},
              {img:'https://flagcdn.com/w320/gb.png',name:'United Kingdom'},
            ]

const Filter = ({ products }) => {

  const [searchParam, setSearchParams] = useSearchParams();
  const initialBrand = searchParam.getAll("brand")
  const initialpriceRange = searchParam.getAll("priceRange")
  const initialrating = searchParam.getAll("rating")
  const initialsort = searchParam.get("SortBy")
  const [brand, setBrand] = useState(initialBrand || '');
  const brands = Array.from(new Set(products.map(p => p.brand)))
  // const brands = ["OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO","OPPO"]
  // const [rating, setrating]=useState(initialrating||[])
  const [Sort, setSort]=useState(initialsort||'')
  const [selectedOption, setSelectedOption] = useState("Ship From");
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [showMore, setShowMore] = useState(false);
  const visibleBrands = showMore ? brands : brands.slice(0, 6);


  const handleValuesChange = (e,Ops) => {
    let arr=[]
    if(Ops==='min'){
      arr[0]=e.target.value
      arr[1]=1000000
    }else{
      arr[0]=0
      arr[1]=e.target.value
    }
    setValues(arr);
  };

  const handleSort=(e)=>{
    let newsort= e
    if(Sort==e){
      newsort=""
    }
    setSort(newsort)
  }

  const handlBrandChange = (e) => {
    let newbrand = e
    if(brand==e){
      newbrand=""
    }
    setBrand(newbrand)
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // const handlFilterChangestar = (e) => {
  //   const newrat = [...rating];
  //   if (newrat.includes(`${e}`)) {
  //     newrat.splice(newrat.indexOf(`${e}`), 1)
  //   } else {
  //     newrat.push(e)
  //   }
  //   setrating(newrat)
  // };


  useEffect(() => {
    const params = {};
    if(brand){
      params.brand = brand;
    }
    if(Sort){
      console.log(Sort)
      params.SortBy =Sort;
    }
    console.log(values)
    
    if(values.length>0 && values[0]>0||values[1]<1000000){
      params.priceRange = `${values[0]} ${values[1]}`;
    }

    setSearchParams(params)
  }, [brand, values, Sort, setSearchParams]);
  // rating ,

  return (
    <Flex>
      <Box border='1px solid' w='25%' p='5px' ml='1rem' h='300px'>
        <Flex justify='space-between' flexDir='column'>
          <Heading color='gray' size='sm' mb={3}>
            Catagary
          </Heading>
          <List spacing={3} pl='1rem'>
            <ListItem>
              Home
            </ListItem>
            <ListItem>
              Fashion
            </ListItem>
            <ListItem>
              Electronic
            </ListItem>
            <ListItem>
              Vahicals
            </ListItem>
          </List>
        </Flex>
      </Box>
      <Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' m="20px" p="30px" w='100%'  >
        <Flex justify='space-between'>
          <Heading color='gray' size='sm' mb={3}>
            Brands
          </Heading>
          {brands.length > 7 ? <Text color='blue.500' cursor='pointer' onClick={(e) => setShowMore(!showMore)}>{showMore ? "View less" : "View more"} {showMore ? <ChevronUpIcon /> : <ChevronDownIcon />} </Text> : ""}
        </Flex>
        <Grid templateColumns='repeat(6,1fr)' mb={4} gap={4}>
          {visibleBrands.map(el => (
            <Button
              key={el}
              onClick={() => handlBrandChange(el)}
              size='md'
              height='2.5rem'
              border='0.1rem solid #b4b4b4'
              m="3px"
              bg={brand === el ? '#046381' : 'transparent'}
              color={brand === el ? 'white' : 'black'}
            >
              <Text>{el}</Text>
            </Button>
          ))}
        </Grid>
        <Flex align='center' gap='1rem' mb='1rem'>
          <Text color='gray'>Filter :</Text>
          <Menu >
            <MenuButton as={Button} variant="outline" w='10rem' h='2rem' textAlign='left' mr="2">
              {selectedOption == 'Ship From' ? <Text bg='none' fontWeight='400' fontSize='sm'>{selectedOption}</Text> : <Flex align='center' gap='0.5rem'><Image w='1rem' src={selectedOption.img} alt={selectedOption.name} bg='none' />
                <Text bg='none' fontWeight='400' fontSize='sm'>{selectedOption.name}</Text></Flex>}
            </MenuButton>
            <MenuList minW='10rem' >
              <MenuItem display={selectedOption == 'Ship From' ? 'none' : 'block'} gap='1rem' onClick={() => handleOptionSelect("Ship From")}>Reset</MenuItem>
              {selectedOption == 'Ship From' ? country.map((e, i) => {
                return (<MenuItem key={i} display='flex' gap='1rem' onClick={() => handleOptionSelect(e)}>
                  <Image w='1rem' src={e.img} alt={e.name} bg='none' />
                  <Text bg='none' fontSize='sm' fontWeight='400' >{e.name}</Text>
                </MenuItem>)
              }) : ""}
            </MenuList>
          </Menu>
          <Checkbox m="3px">
            <Text fontSize='sm' fontWeight='400' >On Sale</Text>
          </Checkbox>
          <Checkbox m="3px">
            <Text fontSize='sm' fontWeight='400' >Free shipping only</Text>
          </Checkbox>
          <Text fontSize='sm' fontWeight='400' >Price :</Text>
          <Flex gap='1rem'>
            <Input placeholder='min' onChange={(e)=>handleValuesChange(e,"min")} w='5rem' height='2rem' />
            <Input placeholder='max' onChange={(e)=>handleValuesChange(e,"max")} w='5rem' height='2rem' />
            <Button height='2rem'>OK</Button>
          </Flex>
        </Flex>
        <Flex align='center' gap='1.5rem' >
          <Text color='gray'>Sort By: </Text>

          <Button
            onClick={() => handleSort("Best_Match")}
            size='sm'
            height='2.2rem'
            border='0.1rem solid #b4b4b4'
            m="3px"
            bg={Sort === "Best_Match" ? '#046381' : 'transparent'}
            color={Sort === "Best_Match" ? 'white' : 'black'}
          >
            <Text fontSize='sm' fontWeight='400' >Best Match </Text>
          </Button>
          <Button
            onClick={() => handleSort("New")}
            size='md'
            height='2.2rem'
            border='0.1rem solid #b4b4b4'
            m="3px"
            bg={Sort === "New" ? '#046381' : 'transparent'}
            color={Sort === "New" ? 'white' : 'black'}
          >
            <Text fontSize='sm' fontWeight='400' >New Arrival</Text>
          </Button>
          <Text fontSize='sm' fontWeight='400' >Price :</Text>
          <Button
            onClick={() => handleSort("High_to_Low")}
            size='md'
            height='2.2rem'
            border='0.1rem solid #b4b4b4'
            m="3px"
            bg={Sort === "High_to_Low" ? '#046381' : 'transparent'}
            color={Sort === "High_to_Low" ? 'white' : 'black'}
          >
            <Text fontSize='sm' fontWeight='400' >High to Low</Text>
          </Button>
          <Button
            onClick={() => handleSort("Low_to_High")}
            size='md'
            height='2.2rem'
            border='0.1rem solid #b4b4b4'
            m="3px"
            bg={Sort === "Low_to_High" ? '#046381' : 'transparent'}
            color={Sort === "Low_to_High" ? 'white' : 'black'}
          >
            <Text fontSize='sm' fontWeight='400' >Low to High</Text>
          </Button>
        </Flex>

      </Box>
    </Flex>
  )
}

export default Filter



{/* <Box display="flex" flexDir="column" mb={3}>
        <Heading as='h4' size='md' mb={3}>
          Rating
        </Heading>
        {Array(5).fill("").map((val, index) => (
          <Checkbox
            key={index}
            onChange={() => handlFilterChangestar(`${index+1}`)}
            isChecked={rating.includes(`${index+1}`)}
            m="3px"
          >
            <Text fontWeight="bold" >{index+1+" "}
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < index + 1 ? 'yellow.400' : 'gray.300'}
                    pr="2px"
                  />
                ))}
            </Text>
          </Checkbox>
        ))}
      </Box> */}
      {/* <Box alignItems="center" mb={3}>
        <Heading as='h4' size='md' mb={3}>
          Prices
        </Heading>
        <Flex gap="5" mb={3} align="center">
          <Text >min</Text>
          <Input type="number" fontSize="sm" value={values.length? values[0]:0} isReadOnly={true}></Input>
        </Flex>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={values.length? values: [0,1000000]}
          min={0}
          max={1000000}
          step={100}
          onChange={handleChange}
          mb={2}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} shadow="lg" ><BsCircleFill style={{ width: "9px" }} /></ RangeSliderThumb>
          <RangeSliderThumb index={1} shadow="lg" ><BsCircleFill style={{ width: "9px" }} /></ RangeSliderThumb>
        </RangeSlider>
        <Flex gap="5" align="center">
          <Text >max</Text>
          <Input type="number" fontSize="sm" value={values.length? values[1]:1000000} isReadOnly={true}></Input>
        </Flex>

      </Box> */}