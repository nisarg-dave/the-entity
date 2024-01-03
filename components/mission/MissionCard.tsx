import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MissionStatement from "./MissionStatement";

function MissionCard() {
  return (
    <Card className="bg-foreground text-primary w-8/12 h-72 p-3 lg:overflow-hidden overflow-y-scroll">
      <CardContent>
        <MissionStatement />
      </CardContent>
    </Card>
  );
}

export default MissionCard;
