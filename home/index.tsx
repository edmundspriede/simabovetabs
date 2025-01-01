import React , { useState } from 'react';
import { Tabs } from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/system";

const NestedTabsExample = () => {
  const [outerTab, setOuterTab] = useState("tab1");
  const [innerTab1, setInnerTab1] = useState("innerTab1");
  const [innerTab2, setInnerTab2] = useState("innerTab2");

  return (
  
 
    <Tabs
      aria-label="Outer Tabs"
      onChange={(key) => setOuterTab(key)}
      selectedKey={outerTab}
    >
      <Tabs.Item key="tab1" title="Tab 1">
        <h3>Content for Tab 1</h3>
        <Tabs
          aria-label="Inner Tabs 1"
          onChange={(key) => setInnerTab1(key)}
          selectedKey={innerTab1}
        >
          <Tabs.Item key="innerTab1" title="Inner Tab 1">
            <p>Content for Inner Tab 1 under Tab 1</p>
          </Tabs.Item>
          <Tabs.Item key="innerTab2" title="Inner Tab 2">
            <p>Content for Inner Tab 2 under Tab 1</p>
          </Tabs.Item>
        </Tabs>
      </Tabs.Item>
      <Tabs.Item key="tab2" title="Tab 2">
        <h3>Content for Tab 2</h3>
        <Tabs
          aria-label="Inner Tabs 2"
          onChange={(key) => setInnerTab2(key)}
          selectedKey={innerTab2}
        >
          <Tabs.Item key="innerTab1" title="Inner Tab 1">
            <p>Content for Inner Tab 1 under Tab 2</p>
          </Tabs.Item>
          <Tabs.Item key="innerTab2" title="Inner Tab 2">
            <p>Content for Inner Tab 2 under Tab 2</p>
          </Tabs.Item>
        </Tabs>
      </Tabs.Item>
    </Tabs>
	
  );
};

export default NestedTabsExample;
