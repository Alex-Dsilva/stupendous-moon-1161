import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Checkbox, Text, Heading, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Input, Flex } from '@chakra-ui/react'
import { BsCircleFill } from 'react-icons/bs'
import { StarIcon } from '@chakra-ui/icons'


const Filter = ({ products }) => {

  const [searchParam, setSearchParams] = useSearchParams();
  const initialCategory = searchParam.getAll("category")
  const initialpriceRange = searchParam.getAll("priceRange")
  const initialrating = searchParam.getAll("rating")
  const [category, setCategory] = useState(initialCategory || []);
  const brands = Array.from(new Set(products.map(p => p.brand)))
  const [rating, setrating]=useState(initialrating||[])
  const [values, setValues] = useState(initialpriceRange?.[0]?.split(" ")||[ 0, 1000000]);
  const handleChange = (values) => {
    console.log(values)
    setValues(values);
  };

  const handlFilterChange = (e) => {
    const newcat = [...category];
    if (newcat.includes(e)) {
      newcat.splice(newcat.indexOf(e), 1)
    } else {
      newcat.push(e)
    }
    setCategory(newcat)
  };

  const handlFilterChangestar = (e) => {
    const newrat = [...rating];
    if (newrat.includes(`${e}`)) {
      newrat.splice(newrat.indexOf(`${e}`), 1)
    } else {
      newrat.push(e)
    }
    setrating(newrat)
  };

  useEffect(() => {
    const params = {};
    params.category = category;
    if(values.length>0){
      params.priceRange = `${values[0]} ${values[1]}`;
    }
    params.rating = rating;
    setSearchParams(params)
  }, [category,values ,rating ,setSearchParams]);

  return (
    <Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w="25%" mt="25px" p="20px" ml="8px" >
      <Box display="flex" flexDir="column" mb={3}>
        <Heading as='h4' size='md' mb={3}>
          Brands
        </Heading>
        {brands.map(brand => (
          <Checkbox
            key={brand}
            onChange={() => handlFilterChange(brand)}
            isChecked={category.includes(brand)}
            m="3px"
          >
            <Text>{brand}</Text>
          </Checkbox>
        ))}
      </Box>
      <Box display="flex" flexDir="column" mb={3}>
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
            <Text fontWeight="bold" >0
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
      </Box>
      <Box alignItems="center" mb={3}>
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

      </Box>
    </Box>
  )
}

export default Filter