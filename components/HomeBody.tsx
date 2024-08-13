import { toast } from "sonner";
import { Button } from "./ui/button";

const HomeBody: React.FC = () => {
  return (
    <div>
      return (
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Home
      </Button>
      )
    </div>
  );
};

export default HomeBody;
