import Image from 'next/image';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string | undefined;
  image: string;
}

export const ProjectCard = ({
  title,
  description,
  link,
  image,
}: ProjectCardProps) => {
  return (
    <Card className="w-full xl:w-96 h-64 flex flex-col">
      <CardHeader className="py-4">
        <CardTitle className="text-lg">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow overflow-hidden">
        <Image
          src={image}
          objectFit="cover"
          width={1887}
          height={1060}
          alt="project"
          className="rounded-sm"
        />
      </CardContent>

      <CardFooter className="text-sm py-4">{description}</CardFooter>
    </Card>
  );
};
