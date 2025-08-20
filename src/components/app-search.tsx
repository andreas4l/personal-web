"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <form className="flex max-w-md items-center gap-2">
      <div className="relative flex">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
        <div>
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 relative z-10
              focus-visible:ring-0 focus-visible:border-[#0938FE] border-[#9078FF]"
          />
        </div>
      </div>
    </form>
  );
}
