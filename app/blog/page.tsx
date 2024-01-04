import { Hammer } from 'lucide-react';

export default function BlogMainPage() {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-lg">Blog</h1>

      <div className="flex h-64 items-center justify-center gap-2 font-bold text-2xl">
        <Hammer />
        Under development!
      </div>
    </div>
  );
}
