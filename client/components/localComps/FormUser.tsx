import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
// Use curly braces for all icon imports
import {
  PaperClipIcon,
  ArrowUpIcon,
  TrashIcon,
  ChevronDownIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/16/solid";
const FormUser = () => {
  return (
    <div className="w-full h-full">
      <Card className="w-full min-h-[180px] flex flex-col justify-between dark:bg-card">
        <CardContent className="pt-4 pb-2">
          <Textarea
            id="text"
            placeholder="Ask AI a question or make a request."
            className="
      border-none shadow-none text-lg md:text-xl px-0 focus-visible:ring-0 
      resize-none overflow-y-auto min-h-[3rem] max-h-[7rem]
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
              <Button className="cursor-pointer font-bold px-4 w-full ">
                Analyse
                <ArrowDownCircleIcon className="size-4" />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FormUser;
