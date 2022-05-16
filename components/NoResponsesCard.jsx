import { BiBot } from "react-icons/bi";

const NoResponsesCard = () => {
  return (
    <article className="flex flex-col items-center justify-center bg-zinc-50 rounded-md shadow-md space-y-6 py-8">
      <h3 className="text-xl font-medium">
        Looks like you havn&apos;t messaged GPT-3 yet!
      </h3>
      <BiBot className="w-16 h-16" />
      <span className="opacity-60 max-w-lg text-center">
        To give it a try, type anything your heart desires in the prompt
        section. You can start a conversation or ask GPT-3 anything!
      </span>
    </article>
  );
};

export default NoResponsesCard;
