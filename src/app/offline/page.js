"use client"

import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function OfflinePage() {
    const router = useRouter();
    return (
      <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontFamily={'Poppins'} flexDir={'column'} gap={'5rem'}>
        <Box textAlign={'center'}>
            <Text fontSize={'5rem'} fontWeight={'600'}>YOU'RE OFFLINE</Text>
            <Text fontSize={'1.5rem'} color={'#888'} fontWeight={'500'}>PLEASE CHECK YOUR INTERNET CONNECTION!!</Text>
        </Box>
        <Box>
            <Button fontSize={'1.5rem'} padding={'1.75rem 2.5rem'} colorScheme={'blue'} onClick={()=>{
                router.push("/");
            }}>TRY AGAIN</Button>
        </Box>
      </Box>
    );
  }
  