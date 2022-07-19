import React, { Component } from 'react';
import { Stack ,Select, } from '@chakra-ui/react'


  class MutileSearch extends Component {
    state = {  } 
    render() { 
        return (
<Stack spacing={3}>
  <Select variant='outline' placeholder='Outline' />
  <Select variant='outline' placeholder='Filled' />
  <Select variant='outline' placeholder='Flushed' />
  <Select variant='outline' placeholder='Unstyled' />
</Stack>
        );
    }
  }
   
  export default MutileSearch;