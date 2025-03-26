import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./splitView.css";
import ChatList from "../ChatList";
import ChatInterface from "../ChatInterface";

function SplitView() {
  return (
    <PanelGroup direction="horizontal" className="PanelGroup">
      
      <Panel defaultSize={30} minSize={20}className="left">
        <ChatInterface/>
        {/* <ChatList/> */}
      </Panel>

      <PanelResizeHandle className="PanelResizeHandle" />


      <Panel defaultSize={30} minSize={40}>
        right
      </Panel>

    </PanelGroup>
  );
}
export default SplitView;
