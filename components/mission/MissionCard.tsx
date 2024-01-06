import { Card, CardContent } from "@/components/ui/card";
import MissionStatement from "./MissionStatement";

function MissionCard() {
  return (
    <Card className="bg-foreground text-primary w-8/12 h-72 p-3 lg:overflow-hidden overflow-y-scroll">
      <CardContent className="text-xs leading-snug lg:text-base lg:leading-snug">
        <MissionStatement />
      </CardContent>
    </Card>
  );
}

export default MissionCard;
