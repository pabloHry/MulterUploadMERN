import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  FormControl,
  Button,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const Contact = () => {
  const [msg, setMsg] = useState();
  const [prenom, setPrenom] = useState();
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();

  const send = async () => {
    axios
      .post("http://localhost:4000/contact", {
        msg,
        prenom,
        nom,
        email,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Box mx={40} h='100vh'>
      <br />
      <Text textAlign='center' fontWeight='700' fontSize='70px'>
        Contact :{" "}
      </Text>
      <Box textAlign='center'>
        <FormControl enctype='multipart/form-data'>
          <Input
            mt={10}
            textAlign='center'
            type='text'
            onChange={(e) => setPrenom(e.target.value)}
            placeholder='Prenom'
          />
          <Input
            mt={10}
            textAlign='center'
            type='text'
            placeholder='Nom'
            onChange={(e) => setNom(e.target.value)}
          />
          <Input
            type='text'
            textAlign='center'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            mt={10}
          />
          <Textarea
            type='text'
            textAlign='center'
            placeholder='Message'
            mt={10}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button onClick={send} mt={10}>
            SEND
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Contact;
