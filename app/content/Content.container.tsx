import Link from "next/link";
import React from "react";

const fetchContent = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    // next: { revalidate: 60 },
  }).then((response) => response.json());

  return res;
};

export const Content = async () => {
  const content: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[] = await fetchContent();

  return (
    <div className="flex mt-10 justify-center">
      <div className="grid grid-cols-2 gap-4">
        {content.map((e, index) => {
          return (
            <Link
              key={index}
              href={`content/${e.id.toString()}`}
              className="border-amber-400 border-solid rounded-md border-2 bg-slate-800 p-6"
            >
              <p className="text-slate-100 text-center">content id {e.id}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
