import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";

const ChatList = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-full min-h-[300px]">
      <Sidebar collapsed={collapsed} transitionDuration={300} backgroundColor="#18181b">
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>

      <main style={{ padding: 10 }}>
        <div>
          <Button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <TbLayoutSidebarLeftExpandFilled />
            ) : (
              <TbLayoutSidebarLeftCollapseFilled />
            )}
          </Button>
        </div>
      </main>
      
    </div>
  );
};
export default ChatList;
