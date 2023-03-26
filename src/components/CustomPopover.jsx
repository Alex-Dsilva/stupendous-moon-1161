import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';

const CustomPopover = ({ trigger, height, children, br }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover
        isOpen={isOpen}
        placement='bottom-end'
        onClose={() => setIsOpen(false)}
        trigger="click"
        allowAutoFocus={false}
      >
         
        <PopoverTrigger>
          <Box
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {trigger}
          </Box>
        </PopoverTrigger>
        <PopoverContent 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)} 
            width="fit-content"
            outline="none"
        >
            <PopoverArrow />
            <PopoverBody 
            maxH={height}
            outline="none"
            sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  height: "2px",
                  marginRight:'-5px'
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "gray.400",
                  borderRadius: "50%",
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-button": {
                  display: "none",
                },
                outline: "none",
              }} 
            overflowY="auto">
                {children}
            </PopoverBody>
        </PopoverContent>
      </Popover>
    )
}

export default CustomPopover