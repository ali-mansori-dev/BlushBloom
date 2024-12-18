import { Container, Loader } from '@mantine/core';
import React from 'react'

const page = () => {
  return (
    <Container
      size={"xl"}
      className="flex flex-col items-center justify-center gap-12"
    >
      <div className="flex flex-col justify-center items-center gap-3 py-40">
        <Loader color="blue" />
        <div className="font-bold">Redirecting to Payment</div>
      </div>
    </Container>
  );
}

export default page