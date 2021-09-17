import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  FormControl,
  Button,
  // toast,
} from "@chakra-ui/react";
import axios from "axios";

const AdminPage = () => {
  const [img, setImage] = useState({});
  const [author, setAuthor] = useState({});
  const [body, setBody] = useState({});
  const [title, setTitle] = useState({});

  const send = () => {
    let formData = new FormData();
    formData.append("avatar", img);
    formData.append("author", author);
    formData.append("body", body);
    formData.append("title", title);
    axios
      .post("http://localhost:4000/uploadFile", formData, {
        img,
        body,
        title,
        author,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Box mx={40} h='100vh'>
      <br />
      <Text textAlign='center' fontWeight='700' fontSize='70px'>
        Admin :{" "}
      </Text>
      <Box textAlign='center'>
        <FormControl enctype='multipart/form-data'>
          <Input
            mt={10}
            textAlign='center'
            name='author'
            type='text'
            onChange={(e) => setAuthor(e.target.value)}
            placeholder='Author'
          />
          <Input
            mt={10}
            textAlign='center'
            type='text'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type='text'
            textAlign='center'
            onChange={(e) => setBody(e.target.value)}
            placeholder='Description'
            mt={10}
          />
          <Input
            type='file'
            textAlign='center'
            mt={10}
            name='avatar'
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Button onClick={send} mt={10}>
            SEND
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AdminPage;
