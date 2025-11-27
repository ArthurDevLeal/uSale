import { X } from "lucide-react";
import Button from "../ui/button";

export default function SideImage({ side }: { side: "left" | "right" }) {
  switch (side) {
    case "right":
      return (
        <div className="grid grid-cols-[1fr_100px] grid-rows-[100px_1fr] rounded-4xl">
          <div className="bg-accent rounded-t-4xl"></div>
          <div className="flex bg-accent">
            <div className="flex items-center justify-center h-full w-full bg-background rounded-bl-4xl">
              <Button size={"iconlg"}>
                <X size={24} />
              </Button>
            </div>
          </div>
          <div className="bg-accent rounded-bl-4xl"></div>
          <div className="bg-accent rounded-br-4xl rounded-tr-4xl"></div>
        </div>
      );
    case "left":
      return (
        <div className="grid grid-cols-[100px_1fr] grid-rows-[100px_1fr] rounded-4xl">
          <div className="flex bg-accent">
            <div className="flex items-center justify-center h-full w-full bg-background rounded-br-4xl">
              <Button size={"iconlg"}>
                <X size={24} />
              </Button>
            </div>
          </div>
          <div className="bg-accent rounded-t-4xl"></div>
          <div className="bg-accent rounded-bl-4xl rounded-tl-4xl"></div>
          <div className="bg-accent rounded-br-4xl "></div>
        </div>
      );
  }
}
