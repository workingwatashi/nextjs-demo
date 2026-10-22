"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    // <div className="flex flex-col items-center gap-4">
    //   <p className="text-lg font-medium">Count: {count}</p>
      <button
        // className="rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        onClick={() => setCount(count + 1)}>
            clicked {count} times
                                                                                                                                                                                                                                                                                            
      </button>
    // </div>
  );
}
