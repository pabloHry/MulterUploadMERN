import React, { useEffect, useState } from "react";
import { Box, Text, Image, Flex, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/image", {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <Box h='100vh'>
      <br />
      <Text textAlign='center' fontWeight='700' fontSize='70px'>
        Vitrine :{" "}
      </Text>
      <Grid
        mt={10}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
        justifyContent='center'
        mx={40}>
        {data.map((item) => {
          console.log(item);
          return (
            <GridItem
              colSpan={2}
              boxShadow='-2px 5px 15px 5px rgba(0,0,0,0.32)'
              key={item.img}
              id={item.img}
              borderBottomRadius='5px'
              bg='#F7F7F7'
              mt={10}
              textAlign='center'>
              <Image
                src={require(`../server/public/images/${item.img}`).default}
                w='600px'
                h='400px'
              />
              <br />
              <Box borderBottom='1px solid ' />
              <Box p={4}>
                <Text>Author : {item.author}</Text>
                <Text>Title: {item.title}</Text>
                <Text>Description : {item.body}</Text>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
