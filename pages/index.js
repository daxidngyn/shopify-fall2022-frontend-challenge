import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { CompletionContext } from "../util/frontend/CompletionContext";
import PromptController from "../components/PromptController";
import ConfigModal from "../components/ConfigModal";
import ResponseCard from "../components/ResponseCard";
import LoadingCard from "../components/LoadingCard";
import NoResponsesCard from "../components/NoResponsesCard";

export default function Home() {
  const [engine, setEngine] = useState("text-curie-001");
  const [temperatureVal, setTemperatureVal] = useState(0.5);
  const [presencePenaltyVal, setPresencePenaltyVal] = useState(0);

  const [completionData, setCompletionData] = useState([]);

  const { completions, dispatch } = useContext(CompletionContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!completions) return;

    const sorted = completions.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setCompletionData(sorted);
    setLoading(false);
  }, [completions]);

  const [configModalOpen, setConfigModalOpen] = useState(false);
  const toggleConfigModal = () => {
    setConfigModalOpen(!configModalOpen);
  };

  const clearResponses = () => {
    dispatch({
      type: "CLEAR_COMPLETIONS",
    });
  };

  return (
    <div className="flex-grow bg-slate-100 px-6 md:px-8">
      <Head>
        <title>David Nguyen | Shopify Fall2022 Frontend Intern Challenge</title>
        <meta
          name="description"
          content="Shopify Frontend Intern Challenge for the Fall 2022 period. Designed and developed by David Nguyen"
        />
      </Head>

      <div className="max-w-screen-xl mx-auto py-12">
        <h1 className="text-4xl font-semibold">Fun with GPT-3</h1>

        <PromptController
          engine={engine}
          temperature={temperatureVal}
          presencePenalty={presencePenaltyVal}
          toggleConfigModal={toggleConfigModal}
          setLoading={setLoading}
          loading={loading}
        />

        <section className="mt-12" aria-labelledby="responses-title">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-medium" id="responses-title">
              Responses
            </h2>

            <button type="button" onClick={clearResponses}>
              Clear
            </button>
          </div>

          <div className="mt-2 space-y-4">
            {loading && <LoadingCard />}
            {completionData.length > 0 ? (
              <>
                {completionData.map((completion) => (
                  <ResponseCard key={completion.id} completion={completion} />
                ))}
              </>
            ) : (
              <>{!loading && <NoResponsesCard />}</>
            )}
          </div>
        </section>
      </div>

      <ConfigModal
        isOpen={configModalOpen}
        toggleIsOpen={toggleConfigModal}
        engine={engine}
        setEngine={setEngine}
        temperature={temperatureVal}
        setTemperature={setTemperatureVal}
        presencePenalty={presencePenaltyVal}
        setPresencePenalty={setPresencePenaltyVal}
      />
    </div>
  );
}
