import Modal from "react-modal";
import { HiX } from "react-icons/hi";

Modal.setAppElement("#__next");

const engines = [
  "text-curie-001",
  "text-davinci-002",
  "text-babbage-001",
  "text-ada-001",
];

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.375rem",
    padding: "2rem 2rem 2rem 2rem",
    border: "none",
    maxHeight: "80vh",
    width: "90%",
    maxWidth: 530,
    backgroundColor: "#ffffff",
  },
};

const ConfigModal = ({
  isOpen,
  toggleIsOpen,
  engine,
  setEngine,
  temperature,
  setTemperature,
  presencePenalty,
  setPresencePenalty,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Completion Configuration Modal"
      style={modalStyles}
    >
      <div className="relative">
        <h2 className="text-xl">Completion Config</h2>
        <span className="text-sm opacity-60">
          Configure settings used for completing each prompt here.
        </span>

        <button
          className="absolute top-0 right-0 pt-1"
          type="button"
          onClick={toggleIsOpen}
        >
          <HiX className="w-5 h-5 opacity-70 hover:opacity-100 transition duration-300 ease-in-out" />
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <label id="temperatureEditor">Temperature</label>
            <span className="">{temperature}</span>
          </div>
          <p className="text-sm opacity-60 mt-0.5">
            What sampling temperature to use. Higher values means the model will
            take more risks. Try 0.9 for more creative applications, and 0 for
            ones with a well-defined answer.
          </p>

          <input
            type="range"
            id="temperatureEditor"
            min="0"
            max="0.9"
            step="0.1"
            defaultValue={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full mt-2 accent-emerald-400 appearance-none bg-emerald-100 h-2 rounded-full ring-1 ring-emerald-300"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="presencePenaltyEditor">Presence penalty</label>
            <span className="">{presencePenalty}</span>
          </div>
          <p className="text-sm opacity-60 mt-0.5">
            Number between -2.0 and 2.0. Positive values penalize new tokens
            based on whether they appear in the text so far, increasing the
            model's likelihood to talk about new topics.
          </p>
          <input
            type="range"
            id="presencePenaltyEditor"
            min="-2.0"
            max="2.0"
            step="0.5"
            defaultValue={presencePenalty}
            onChange={(e) => setPresencePenalty(e.target.value)}
            className="w-full mt-2 accent-emerald-400 appearance-none bg-emerald-100 h-2 rounded-full ring-1 ring-emerald-300"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <label htmlFor="selectEngine">Select an Engine:</label>
          <select
            name="selectEngine"
            id="selectEngine"
            required
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
            className="bg-zinc-100 rounded-md pr-2 py-1 px-1 focus:outline-none focus:ring-2 ring-emerald-500"
          >
            {engines.map((engine) => (
              <option value={engine} key={engine}>
                {engine}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Modal>
  );
};

export default ConfigModal;
