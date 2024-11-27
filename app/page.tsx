import { Button, TextInput } from "@mantine/core";

export default function Home() {
  return (
    <div className="grid">
      <Button color="pink">Click me</Button>
      <Button>Click me</Button>
      <TextInput label="Input label" description="Input description" />
    </div>
  );
}
