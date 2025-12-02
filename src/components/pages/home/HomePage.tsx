import { useState } from "react";
import { RiAdminFill, RiUser2Fill, RiCodeSSlashFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [selected, setSelected] = useState<"left" | "middle" | "right" | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (side: "left" | "middle" | "right") => setSelected(side);

  const handleGo = () => {
    if (selected === "left") navigate("/docs/user");
    else if (selected === "right") navigate("/docs/admin");
    else if (selected === "middle") navigate("/docs/dev");
  };

  const GRADIENT_CLASSES_MAP = {
    default: "from-purple-500/10 via-indigo-500/10",
    left: "from-cyan-500/10 via-green-500/10",
    middle: "from-fuchsia-500/10 via-purple-500/10",
    right: "from-green-500/10 via-cyan-500/10",
  };

  const GLOW_CLASSES = {
    left: "hover:shadow-[0_0_35px_5px_rgba(34,197,94,0.4)] hover:border-green-400",
    middle: "hover:shadow-[0_0_35px_5px_rgba(192,132,252,0.4)] hover:border-fuchsia-400",
    right: "hover:shadow-[0_0_35px_5px_rgba(34,211,238,0.4)] hover:border-cyan-400",
  };

  const getGradientClasses = () => {
    if (!selected) return GRADIENT_CLASSES_MAP.default;
    return GRADIENT_CLASSES_MAP[selected];
  };

  return (
    <div className="bg-zinc-900 text-white min-h-full flex flex-col items-center justify-center gap-4 relative overflow-visible px-4 sm:px-6 md:px-8">
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[80%] pointer-events-none z-0 transition-all">
        <div
          key={selected}
          className={`absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t ${getGradientClasses()} to-transparent`}
        />
      </div>

      {/* Top Section */}
      <section className="w-full max-w-7xl flex flex-col justify-center items-center z-10 py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-white drop-shadow-lg">
          <code>xami</code> Documentation Hub
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 text-center mb-10 max-w-3xl px-2">
          Welcome to the official documentation for <code>xami</code> — your all-in-one media platform.
          Whether you're a casual user, a power admin, or a curious developer looking to dive into the code,
          we've got everything you need to make your xami experience smooth and delightful.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
          {(["left", "middle", "right"] as const).map((side) => (
            <div
              key={side}
              onClick={() => handleCardClick(side)}
              className={`
                w-full sm:w-1/3 h-52 rounded-2xl bg-zinc-800 p-6 cursor-pointer transition-all duration-300 
                border border-transparent flex flex-col items-center justify-center text-center gap-2 
                ${GLOW_CLASSES[side]} ${selected === side ? `ring-2 ${GLOW_CLASSES[side].split(" ").find(c => c.startsWith("ring-"))}` : ""}
              `}
            >
              {side === "left" ? (
                <RiUser2Fill className="text-3xl text-green-400" />
              ) : side === "right" ? (
                <RiAdminFill className="text-3xl text-cyan-400" />
              ) : (
                <RiCodeSSlashFill className="text-3xl text-fuchsia-400" />
              )}
              <h2 className="text-xl sm:text-2xl font-semibold mt-2 capitalize">
                {side === "left" ? "user" : side === "middle" ? "developer" : "admin"}
              </h2>
              <p className="text-zinc-400 text-sm">
                {side === "left"
                  ? "Need help using xami features or the interface?"
                  : side === "middle"
                  ? "Build with us! APIs, integrations, and source-level insights await."
                  : "Looking to configure, manage, or deploy xami?"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full max-w-7xl bg-zinc-800 rounded-2xl p-6 shadow-inner flex flex-col justify-between z-10 mb-10">
        <div className="overflow-y-auto flex-grow mb-4">
          {selected === null && (
            <p className="text-zinc-400 text-center my-4">Click a card above to get started with xami.</p>
          )}
          {selected === "left" && (
            <div>
              <h3 className="text-xl font-bold mb-2">User Documentation</h3>
              <p className="text-zinc-300 leading-relaxed">
                Learn how to make the most of xami as an end user. From playing media to customizing your settings,
                this guide will walk you through everything you need to know.
              </p>
            </div>
          )}
          {selected === "right" && (
            <div>
              <h3 className="text-xl font-bold mb-2">Admin Documentation</h3>
              <p className="text-zinc-300 leading-relaxed">
                Manage your xami server with confidence. Setup, configuration, maintenance — all here for sysadmins or technical leads.
              </p>
            </div>
          )}
          {selected === "middle" && (
            <div>
              <h3 className="text-xl font-bold mb-2">Developer Documentation</h3>
              <p className="text-zinc-300 leading-relaxed">
                Dive into our developer resources: core architecture, APIs, plugins, and more to extend or integrate xami.
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
              Let’s go!
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
