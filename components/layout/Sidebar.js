import { Accordion } from "@mantine/core";

export default function Sidebar() {
  return (
    <nav className="rounded-lg hidden lg:block">
      <Accordion multiple disableIconRotation>
        <Accordion.Item
          label="Customization"
          className="border-b-0"
          classNames={{ control: "hover:bg-primary-50 rounded" }}
        >
          Colors, fonts, shadows and many other parts are customizable to fit
          your design needs
        </Accordion.Item>

        <Accordion.Item
          label="Flexibility"
          className="border-b-0"
          classNames={{ control: "hover:bg-primary-50 rounded" }}
        >
          Configure components appearance and behavior with vast amount of
          settings or overwrite any part of component styles
        </Accordion.Item>

        <Accordion.Item
          label="No annoying focus ring"
          className="border-b-0"
          classNames={{ control: "hover:bg-primary-50 rounded" }}
        >
          With new :focus-visible pseudo-class focus ring appears only when user
          navigates with keyboard
        </Accordion.Item>
      </Accordion>
    </nav>
  );
}
