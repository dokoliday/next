import React from "react";
import { notFound } from "next/navigation";
type TPropsParams = {
  params: { contentid: string };
};
const fetchContent = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 30 },
  }).then((response) => response.json());
  return res;
};

const Content = async ({ params: { contentid } }: TPropsParams) => {
  const content: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  } = await fetchContent(contentid);

  if (!content.id) {
    notFound();
  }
  return (
    <div className=" bg-amber-400 m-5 border-solid rad rounded-md border-2 p-5 border-slate-800">
      <p className="text-red-900">id: {content.id}</p>
      <p className="text-red-900">title: {content.title}</p>
    </div>
  );
};

export default Content;

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

  const content: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[] = await res.json();

  const partialcontent = content.slice(0, 6);

  return partialcontent.map((e) => ({ contentid: e.id.toString() }));
}
