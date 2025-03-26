import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./splitView.css";
import ChatList from "../ChatList";
import ChatInterface from "../ChatInterface";

function SplitView() {
  return (
    <PanelGroup direction="horizontal" className="PanelGroup">
      <ChatList />

      <Panel defaultSize={30} minSize={30} className="left">
        <ChatInterface />
      </Panel>

      <PanelResizeHandle className="PanelResizeHandle" />

      <Panel defaultSize={30} minSize={30}>
        right
      </Panel>
    </PanelGroup>
  );
}
export default SplitView;
