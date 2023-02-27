import { Box, Flex } from '@chakra-ui/react';
import Select from 'react-select';

const CustomSelectOption = ({ children, isSelected, isDisabled, innerProps }) => {
  return (
    <Box
      as="li"
      px="4"
      py="2"
      bg={isSelected ? 'gray.100' : 'white'}
      color={isDisabled ? 'gray.400' : isSelected ? 'black' : 'gray.600'}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      _hover={{ bg: 'gray.100' }}
      {...innerProps}
    >
      <Flex alignItems="center" justifyContent="space-between">
        {children}
        {isSelected && (
          <Box as="span" fontSize="md" color="gray.400" ml="2">
            &#10003;
          </Box>
        )}
      </Flex>
    </Box>
  );
};



const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    padding: 0,
  }),
};

const CustomSelect = () => {
  return (
    <Select
      options={options}
      styles={customStyles}
      components={{ Option: CustomSelectOption }}
    />
  );
};

export default CustomSelect;