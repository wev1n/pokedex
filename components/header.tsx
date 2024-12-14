import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { ModeToggle } from "./darkmode/mode-toggle";

export default function Header() {
  return (
    <header className="p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-4 mb-4">
          <span className="text-4xl font-bold flex items-center gap-2">
            Pokedex
          </span>
          <ModeToggle />
        </div>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search"
            className="w-full pl-4 pr-10 "
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
