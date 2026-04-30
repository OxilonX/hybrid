import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  PaperClipIcon,
  ChevronDownIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/16/solid";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const FormUser = () => {
  const value = 50;
  const dummyData = {
    confidence: 53,
    prediction: "negative",
  };

  const getConfidenceColor = (score: number) => {
    if (score < 40) return "#ef4444";
    if (score < 70) return "#eab308";
    return "#05df72";
  };
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "positive":
        return "#05df72";
      case "negative":
        return "#ef4444";
      default:
        return "#000000";
    }
  };

  const statusColor = getStatusColor(dummyData.prediction);
  const confidenceColor = getConfidenceColor(dummyData.confidence);
  return (
    <div className="w-full h-full">
      <Card className="w-full min-h-[180px] flex flex-col justify-between dark:bg-card px-2 ">
        <CardContent className="pt-4 pb-2 ">
          <Textarea
            id="text"
            placeholder="Ask AI a question or make a request."
            className="
      border-none shadow-none text-lg md:text-xl px-0 focus-visible:ring-0 
      resize-none overflow-y-auto min-h-[3rem] max-h-[7rem]
      !bg-transparent
    "
          />
        </CardContent>
        <CardFooter className="pb-4 pt-0 bg-transparent border-0 dark:bg-card">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" className="rounded-full">
                <PaperClipIcon className="size-4 mr-2" />
                Attach
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                Writing Styles <ChevronDownIcon className="size-4 ml-1" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              {" "}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="cursor-pointer font-bold px-4 w-full ">
                    Analyse
                    <ArrowDownCircleIcon className="size-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="py-8 px-6 sm:max-w-md">
                  <DialogTitle className="sr-only">
                    Analysis Results
                  </DialogTitle>

                  <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60">
                        Prediction
                      </p>
                      <div
                        style={{ color: statusColor }}
                        className="uppercase flex items-center gap-2 text-3xl font-extrabold text-foreground"
                      >
                        {dummyData.prediction}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 w-full pt-6 border-t border-border/50">
                      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60">
                        Confidence Score
                      </p>
                      <div className="w-32 h-32">
                        <div className="w-32 h-32">
                          <CircularProgressbarWithChildren
                            value={dummyData.confidence}
                            strokeWidth={10}
                            styles={buildStyles({
                              pathColor: confidenceColor,
                              trailColor: `#262626`,
                              strokeLinecap: "butt",
                            })}
                            className="segmented-bar"
                          >
                            <div className="text-xl font-black text-foreground">
                              {dummyData.confidence}%
                            </div>
                          </CircularProgressbarWithChildren>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FormUser;
