import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Code,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Select, CreatableSelect, AsyncSelect } from "chakra-react-select";
import { groupedOptions, colorOptions, groupedCountries } from "./docs/data";

class MultipleSearch extends React.Component {
  state = {};

  render() {
    return (
      <FormControl p={4}>
        <FormLabel>
          Multi Select with <Code>selectedOptionStyle="check"</Code>
        </FormLabel>
        <Select
          isMulti
          options={groupedOptions}
          placeholder="Select some colors..."
          closeMenuOnSelect={false}
          selectedOptionStyle="check"
          hideSelectedOptions={false}
        />
      </FormControl>
    );
  }
}

export default MultipleSearch;
