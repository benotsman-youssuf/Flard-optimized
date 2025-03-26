import {
  Box,
  VStack,
  HStack,
  Input,
  Button,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import ChatList from "./ChatList";

const ChatInterface = () => {
  return (
    <Box h="100vh" bg="gray.900" position="relative">
      <ChatList />
      <VStack h="100%" justify="center" p={8}>
        <Box >
          <Heading
            fontSize="50px"
            color="teal.400"
            fontWeight="500"
            lineHeight="1.2"
          >
            Hello, User
          </Heading>
          <Heading
            fontSize="40px"
            color="white"
            fontWeight="400"
            lineHeight="1.2"
          >
            How can I help you today?
          </Heading>
        </Box>

        {/* Chat Input */}
        <HStack
          position="absolute"
          bottom="0"
          w="80%"
          h="70px"
          bg="gray.800"
          borderRadius="20px"
          p={4}
          // spacing={4}
          marginBottom={8}
        >
          <Input
            placeholder="Ask me anything..."
            fontSize="24px"
            color="white"
            border="none"
            _placeholder={{ color: "gray.400" }}
            _focus={{ boxShadow: "none" }}
          />

          <Button>
            <IoSend />
          </Button>

        </HStack>

      </VStack>
    </Box>
  );
};

export default ChatInterface;
