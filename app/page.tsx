
"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Tabs,   Tab } from "@nextui-org/tabs";
import { Card , CardBody} from "@nextui-org/card";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/system";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";



const NestedTabsExample = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [innerTab1, setInnerTab1] = useState("innerTab1");
  const [innerTab2, setInnerTab2] = useState("innerTab2");

  const handleTabChange = (e) => {
        setActiveTab(e.tabKey);
    };

  return (
     <div className="flex w-full flex-col">
   
   <Tabs aria-label="Options"  >
        <Tab key="photos" title="Photos"
		    value={activeTab} // Controlled by state
            onChange={handleTabChange} // Updates state when tab change
		  
		>
          <Card>
            <CardBody>
			   <Tabs>
				  <Tab key="innerTab1" title="Inner Tab 1">
				     <Card>
                        <CardBody>
					         <p>Content for Inner Tab 1 under Tab 1</p>
					    </CardBody>
                     </Card>						
				  </Tab>
				  <Tab key="innerTab2" title="Inner Tab 2">
					<Card>
                        <CardBody>
					         <p>Content for Inner Tab 2</p>
					    </CardBody>
                     </Card>	
				  </Tab>
				</Tabs>
            
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
            <Tabs>
				  <Tab key="innerTab1" title="Inner Tab 1">
				     <Card>
                        <CardBody>
					         <p>Content for Inner Tab 1 under Tab 1</p>
					    </CardBody>
                     </Card>						
				  </Tab>
				  <Tab key="innerTab2" title="Inner Tab 2">
					<Card>
                        <CardBody>
					         <p>Content for Inner Tab 2</p>
					    </CardBody>
                     </Card>	
				  </Tab>
				</Tabs>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
        <NextUIProvider>
		    <NestedTabsExample />
      	</NextUIProvider>
		   
        </div>
      </div>
     
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
