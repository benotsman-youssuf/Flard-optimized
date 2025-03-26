import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
const ChatList = () => {
  return (
    <Drawer.Root placement="start" colorPalette="teal">
      <Drawer.Trigger asChild>
        {/* <Button variant="outline" size="sm"> */}
        <TbLayoutSidebarLeftExpandFilled
          size={30}
          className="text-gray-600 hover:text-teal-600 transition-colors cursor-pointer m-[10px]"
        />
        {/* </Button> */}
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Context>
              {(store) => (
                <Drawer.Body pt="6" spaceY="3">
                  <p>Drawer is open: {store.open ? "true" : "false"}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button onClick={() => store.setOpen(false)}>sdjk</button>
                </Drawer.Body>
              )}
            </Drawer.Context>
            <Drawer.CloseTrigger asChild>
              <TbLayoutSidebarLeftCollapseFilled
                size={30}
                className="text-gray-600 hover:text-teal-600 transition-colors cursor-pointer m-[10px]"
              />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
export default ChatList;
