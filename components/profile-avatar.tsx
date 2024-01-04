import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AvatarProfile = ({ className }: { className?: string }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src="https://github.com/gabrielluizep.png" alt="profile" />
      <AvatarFallback>Test</AvatarFallback>
    </Avatar>
  );
};
