import { useState } from "react";
import { RiAdminFill, RiUser2Fill } from "react-icons/ri";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [selected, setSelected] = useState<"left" | "right" | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (side: "left" | "right") => {
    setSelected(side);
  };

  const handleGo = () => {
    if (selected === "left") navigate("/chats");
    else if (selected === "right") navigate("/tickets");
  };

  const GRADIENT_CLASSES_MAP = {
    default: "from-purple-500/10 via-indigo-500/10",
    left: "from-cyan-500/10 via-green-500/10",
    right: "from-green-500/10 via-cyan-500/10",
  };

  const GLOW_CLASSES = {
    left: "hover:shadow-[0_0_35px_5px_rgba(34,197,94,0.4)] hover:border-green-400",
    right: "hover:shadow-[0_0_35px_5px_rgba(34,211,238,0.4)] hover:border-cyan-400",
  };

  const getGradientClasses = () => {
    if (!selected) return GRADIENT_CLASSES_MAP.default;
    return GRADIENT_CLASSES_MAP[selected];
  };

  return (
    <div className="bg-zinc-900 text-white min-h-full flex flex-col items-center justify-center gap-4 relative overflow-hidden">
      {/* Uniform Bottom Gradient Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[80%] pointer-events-none z-0 transition-all">
        <div
          key={selected}
          className={`absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t ${getGradientClasses()} to-transparent`}
        />

      </div>


      {/* Top Section */}
      <section className="w-[80%] h-1/2 flex flex-col justify-center items-center z-10">
        <h1 className="text-4xl font-bold mb-4 text-center"><code>xami</code> documentation</h1>
        <p className="text-lg text-zinc-400 text-center mb-8 max-w-2xl">
          Welcome to the official xami docs! Here you can find all the information you need to use, run and develop xami.
          To get started, please choose the type of documentation you want to read:
        </p>
        <div className="flex justify-center items-center gap-6 w-full">
          {(["left", "right"] as const).map((side) => (
            <div
              key={side}
              onClick={() => handleCardClick(side)}
              className={`
                  flex-1 h-48 rounded-2xl bg-zinc-800 p-6 cursor-pointer transition-all duration-300 
                  border border-transparent flex flex-col items-center justify-center text-center gap-2 
                  ${GLOW_CLASSES[side]} ${selected === side ? `ring-2 ${GLOW_CLASSES[side].split(" ").find(c => c.startsWith("ring-"))}` : ""}
              `}
            >
              {side === "left" ? (
                <RiUser2Fill className="text-3xl text-green-400" />
              ) : (
                <RiAdminFill className="text-3xl text-cyan-400" />
              )}
              <h2 className="text-2xl font-semibold mt-2">
                {side === "left" ? "user" : "admin"}
              </h2>
              <p className="text-zinc-400">
                {side === "left"
                  ? "Having problems using xami?"
                  : "Need help managing, running or configuring xami?"}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Bottom Info Section */}
      <section className="w-[80%] h-1/2 bg-zinc-800 rounded-2xl p-6 shadow-inner flex flex-col justify-between z-10">
        <div className="overflow-y-auto flex-grow mb-4">
          {selected === null && (
            <p className="text-zinc-400 text-center my-4 items-center">Click a card to get started.</p>
          )}
          {selected === "left" && (
            <div>
              <h3 className="text-xl font-bold mb-2">user docs</h3>
              <p className="text-zinc-300">
                Read this documentation if you need help using xami as an end user. For example: Problems with the media player or another feature. 
              </p>
            </div>
          )}
          {selected === "right" && (
            <div>
              <h3 className="text-xl font-bold mb-2">admin docs</h3>
              <p className="text-zinc-300">
                Are you running the xami server? Then this documentation is the right place for you: Get need setting something up, 
                installing modules or just generally with any problem with the server-side of things :)
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          {selected && (
            <button
              onClick={handleGo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition cursor-pointer"
            >
              Let's go!
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;