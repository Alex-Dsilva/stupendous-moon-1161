import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';

const CustomPopover = ({ trigger, height, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover
        isOpen={isOpen}
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
        <PopoverContent width="fit-content">
            <PopoverArrow />
            <PopoverBody maxH={height} overflowY="auto">
                {children}
            </PopoverBody>
        </PopoverContent>
      </Popover>
    )
}

export default CustomPopover