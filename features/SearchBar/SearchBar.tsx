import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [value, setValue] = React.useState("");

  const router = useRouter();

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    console.log(inputValue);
  };

  const onSubmitHandler = () => {
    const query = new URLSearchParams("");
    query.set("query", value);
    router.replace("?" + query.toString());
  };
  {
    return (
      <Box
        w="100%"
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={10}
        mt={25}
        mb={25}
      >
        <FormControl id="email" onSubmit={onSubmitHandler}>
          <FormLabel>Type movie name:</FormLabel>
          <Input type="email" value={value} onChange={handleInputChange} />
        </FormControl>
        <Button mt={5} onClick={onSubmitHandler}>
          Show reviews
        </Button>
      </Box>
    );
  }
}
