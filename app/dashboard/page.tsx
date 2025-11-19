import { UserButton } from '@clerk/nextjs';

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to your Grok-4 SaaS</h1>
        <UserButton />
      </div>
      <p className="text-xl">Your AI is live. Start charging tomorrow.</p>
    </div>
  );
}
