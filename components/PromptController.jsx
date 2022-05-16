import { useContext, useState } from "react";
import axios from "axios";
import { CompletionContext } from "../util/frontend/CompletionContext";
import { HiCog, HiOutlineRefresh } from "react-icons/hi";

const PromptController = ({
  engine,
  temperature,
  presencePenalty,
  toggleConfigModal,
  loading,
  setLoading,
}) => {
  const { dispatch } = useContext(CompletionContext);

  const [prevQuery, setPrevQuery] = useState("");
  const [query, setQuery] = useState("");

  const fetchCompletion = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      setLoading(true);
      console.log(process.env.NEXT_PUBLIC_OPENAI_SECRET);

      await axios
        .post(
          `https://api.openai.com/v1/engines/${engine}/completions`,
          {
            prompt: query,
            max_tokens: 64,
            temperature: parseFloat(temperature),
            top_p: 1.0,
            presence_penalty: parseFloat(presencePenalty),
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_SECRET}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setPrevQuery(query);
            const answer = res.data.choices[0].text;

            dispatch({
              type: "ADD_COMPLETION",
              completion: {
                id: res.data.id,
                createdAt: Date.now(),
                prompt: query,
                answer: answer.trim(), // .trim() removes the leading whitespace
                engine: engine,
              },
            });

            setQuery("");
          } else {
            throw new Error(res.text());
          }
        });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={fetchCompletion} className="mt-8">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1.5">
            <label htmlFor="prompt" className="uppercase text-sm font-medium">
              Prompt
            </label>
            <button type="button" onClick={() => setQuery(prevQuery)}>
              <HiOutlineRefresh className="opacity-70 hover:animate-spin" />
            </button>
          </div>

          <button
            onClick={toggleConfigModal}
            type="button"
            className="flex items-center text-sm text-emerald-600 font-medium hover:text-emerald-500 transition duration-300 ease-in-out"
          >
            <HiCog
              className="w-4 h-4"
              style={{ marginBottom: "0.1rem", marginRight: "0.1rem" }}
            />
            <span>Config</span>
          </button>
        </div>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Start a conversation or ask GPT-3 anything..."
          className="w-full focus:outline-none rounded-md mt-1 p-2 focus:ring-2 ring-emerald-500 transition duration-150 ease-in-out"
          rows={5}
          id="prompt"
          name="prompt"
        />
      </div>

      <div className="text-right mt-1">
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "opacity-50" : "hover:bg-emerald-500"
          } bg-emerald-600 text-white px-6 py-2 rounded-md shadow-md transition duration-300 ease-in-out`}
        >
          Fetch response
        </button>
      </div>
    </form>
  );
};

export default PromptController;
