import { LuSearch, LuArrowRight } from "react-icons/lu";
import {
  ActionIcon,
  TextInput,
  TextInputProps,
  useMantineTheme,
} from "@mantine/core";

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search questions"
      rightSectionWidth={42}
      leftSection={<LuSearch size={18} />}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <LuArrowRight size={18} />
        </ActionIcon>
      }
      {...props}
    />
  );
}
