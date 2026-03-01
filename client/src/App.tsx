import { Terminal, Video, MonitorPlay, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-teal-500/30 selection:text-white">
      {/* Background with Dot Grid & Blur Orbs */}
      <div className="fixed inset-0 z-[-1] bg-black bg-dot-pattern">
        {/* Soft glowing orbs behind content */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-teal-600/20 blur-[100px] rounded-full [animation:var(--animate-float)]" />
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full [animation:var(--animate-float)]" style={{ animationDelay: '-4s' }} />
        <div className="absolute -bottom-[20%] left-[40%] w-[700px] h-[700px] bg-cyan-600/10 blur-[150px] rounded-full [animation:var(--animate-float)]" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Navbar Minimalist */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/5 mx-auto max-w-[1440px]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter cursor-pointer">
            <span className="text-teal-400 italic font-mono">&lt;cn/&gt;</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="text-white border-b-2 border-teal-500 pb-1">Home</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm font-mono">
          <span className="hidden md:inline text-gray-400">join our discord community!</span>
          <button className="bg-white/90 hover:bg-white text-black px-4 py-1.5 font-medium transition-colors">
            beta access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="border border-white/10 bg-black/50 backdrop-blur-sm px-4 py-1.5 inline-flex items-center gap-3 text-xs md:text-sm font-mono tracking-wide text-gray-300 mb-8 cursor-pointer hover:bg-white/5 transition-colors">
          <span className="bg-teal-500 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold tracking-wider">NEW</span>
          <span>180x Faster Evaluation Process</span>
          <ArrowRight size={14} className="text-gray-500" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-display leading-[1.1] mb-8 tracking-tight max-w-[900px]">
          MAKE EVERY TECHNICAL <br /> <span className="text-white">INTERVIEW SEAMLESS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-[700px] mb-12 font-mono leading-relaxed">
          Automatically evaluate candidates with AI so your team can hire, interview, and decide with ease. Get real-time analysis, collaborative whiteboarding, and a full IDE directly in the browser—all without the hassle of setting up local environments.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mb-20">
          <button className="bg-white text-black font-bold font-mono px-6 py-3 hover:bg-gray-200 transition-colors">
            Get Started
          </button>
          <button className="border border-white/20 bg-black/40 text-white font-bold font-mono px-6 py-3 hover:bg-white/10 backdrop-blur-sm transition-colors">
            Watch Demo
          </button>
        </div>

        {/* Dashboard Mockup (Matching Screenshot 1 bottom) */}
        <div className="w-full max-w-[1000px] bg-[#0E0E11] border border-white/10 shadow-2xl overflow-hidden text-left relative z-10 rounded-sm">
          {/* Header tab */}
          <div className="flex items-center bg-[#151518] border-b border-white/5 px-4 py-2 font-mono text-xs text-gray-400 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-teal-400 font-bold italic">&lt;cn/&gt;</span>
              <span className="text-gray-600">/</span>
              <span>Dashboard/interview</span>
            </div>
          </div>

          {/* Main workspace mockup */}
          <div className="flex flex-col md:flex-row h-[400px]">
            {/* Sidebar */}
            <div className="w-full md:w-64 border-r border-white/5 bg-[#0E0E11] p-4 font-mono text-xs flex flex-col gap-6">
              <div>
                <div className="text-white mb-2 font-bold flex items-center justify-between">
                  <span>codenexus</span>
                  <span className="text-[10px] border border-white/10 px-1 py-0.5 rounded text-gray-500">Live</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mb-1 hover:text-white cursor-pointer"><span className="text-blue-400">TS</span> algorithm.ts</div>
                <div className="flex items-center gap-2 text-gray-500 mb-1 hover:text-white cursor-pointer"><span className="text-yellow-400">JS</span> utils.js</div>
                <div className="flex items-center gap-2 text-gray-500 hover:text-white cursor-pointer"><span className="text-teal-400">MD</span> instructions.md</div>
              </div>

              <div className="border border-white/10 bg-black/50 p-3 rounded-sm">
                <div className="text-gray-400 mb-2">Performance Analysis...</div>
                <div className="w-full bg-white/5 h-1 mb-2"><div className="bg-teal-500 h-full w-[33%]"></div></div>
                <div className="flex justify-between text-gray-500">
                  <span>Progress: tests passing</span>
                  <span>33%</span>
                </div>
              </div>
            </div>

            {/* Main Editor */}
            <div className="flex-1 bg-[#0A0A0C] p-6 font-mono text-sm leading-loose overflow-hidden">
              <div className="flex gap-6 mb-4 border-b border-white/5 pb-2 text-xs">
                <span className="text-white border-b border-teal-500 pb-2 -mb-[9px]">code</span>
                <span className="text-gray-500">whiteboard</span>
                <span className="text-gray-500">video</span>
                <span className="text-gray-500">analysis</span>
              </div>

              <p><span className="mockup-keyword">import</span> {'{ useMemo }'} <span className="mockup-keyword">from</span> <span className="mockup-string">'react'</span>;</p>
              <br />
              <p>&nbsp;&nbsp;<span className="mockup-comment">// Optimize the two-pointer solution</span></p>
              <p><span className="mockup-keyword">export const</span> <span className="mockup-function">findPair</span> = (arr: <span className="text-yellow-500">number</span>[], target: <span className="text-yellow-500">number</span>) {'=> {'}</p>
              <p>&nbsp;&nbsp;<span className="mockup-keyword">let</span> left = <span className="text-orange-400">0</span>;</p>
              <p>&nbsp;&nbsp;<span className="mockup-keyword">let</span> right = arr.<span className="mockup-function">length</span> - <span className="text-orange-400">1</span>;</p>
              <br />
              <p>&nbsp;&nbsp;<span className="mockup-keyword">while</span> (left &lt; right) {'{'}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="mockup-keyword">const</span> sum = arr[left] + arr[right];</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="mockup-keyword">if</span> (sum === target) <span className="mockup-keyword">return</span> [left, right];</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="mockup-keyword">if</span> (sum &lt; target) left++;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="mockup-keyword">else</span> right--;</p>
              <p>&nbsp;&nbsp;{'}'}</p>
              <p>&nbsp;&nbsp;<span className="mockup-keyword">return</span> [];</p>
              <p>{'};'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Divider */}
      <div className="w-full border-y border-white/5 py-3 overflow-hidden bg-black flex whitespace-nowrap opacity-70">
        <div className="animate-[marquee_30s_linear_infinite] flex gap-12 text-sm font-mono tracking-widest text-gray-500 font-bold uppercase min-w-max">
          <span>simplify your technical interviews with codenexus</span>
          <span>simplify your technical interviews with codenexus</span>
          <span>simplify your technical interviews with codenexus</span>
          <span>simplify your technical interviews with codenexus</span>
          <span>simplify your technical interviews with codenexus</span>
        </div>
        <div className="animate-[marquee_30s_linear_infinite] flex gap-12 text-sm font-mono tracking-widest text-gray-500 font-bold uppercase min-w-max ml-12">
          <span>simplify your technical interviews with codenexus</span>
          <span>simplify your technical interviews with codenexus</span>
          <span>simplify your technical interviews with codenexus</span>
          <span>simplify your technical interviews with codenexus</span>
          <span>simplify your technical interviews with codenexus</span>
        </div>
      </div>

      {/* Clock Quote Section (Screenshot 2 equivalent) */}
      <section className="relative py-32 px-4 text-center border-b border-white/5 flex flex-col items-center justify-center overflow-hidden min-h-[60vh]">
        {/* Background Clock Graphic abstraction */}
        <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] border-[2px] border-teal-500/20 rounded-full flex items-center justify-center relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-teal-500/50 to-transparent"></div>
            <div className="absolute left-0 right-0 top-1/2 h-[2px] w-full bg-gradient-to-r from-transparent to-teal-500/50"></div>
            <div className="w-4 h-4 rounded-full bg-teal-500"></div>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold max-w-[900px] leading-tight mb-12 uppercase tracking-wide">
          EVERY BAD INTERVIEW COSTS YOU HOURS BEFORE YOU EVEN HIRE
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base max-w-[600px] leading-relaxed">
          Most teams lose 20-40% of their engineering time just conducting unstructured technical interviews. Evaluation can take days before any real calibration begins. The cost is latent: you spend hours not properly testing, but hunting for signals that should have been obvious.
        </p>
      </section>

      {/* Features Bento Grid (Screenshot 3 equivalent) */}
      <section id="features" className="py-32 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold font-display uppercase tracking-tight mb-4">
            BUILT TO UNDERSTAND CANDIDATES <br /> INSTANTLY
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-base max-w-[600px] mx-auto">
            CodeNexus turns chaotic interviews into lucid, navigable signals. It generates the context you need, keeps it updated automatically, and gives your team a shared understanding without extra work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="border border-white/10 bg-[#0A0A0C] flex flex-col h-[500px]">
            <div className="flex-1 p-6 relative overflow-hidden flex items-center justify-center border-b border-white/5">
              {/* Graphic Mockup */}
              <div className="text-gray-400 font-mono text-xs flex flex-col gap-2">
                <div className="flex items-center gap-2"><span className="text-teal-400">└─</span> <span>src</span></div>
                <div className="ml-4 flex items-center gap-2"><span className="text-teal-400">└─</span> <span className="text-white font-bold">components</span></div>
                <div className="ml-8 flex items-center gap-2"><MonitorPlay size={14} className="text-blue-400" /> <span>Whiteboard.tsx</span></div>
                <div className="ml-8 flex items-center gap-2 bg-white/5 px-2 py-1 rounded"><Terminal size={14} className="text-yellow-400" /> <span className="text-white">IDE.tsx</span></div>
                <div className="ml-8 flex items-center gap-2"><Video size={14} className="text-green-400" /> <span>VideoCall.ts</span></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-display mb-4">Integrated Tooling</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                CodeNexus provides an all-in-one environment with video, whiteboard, and a fully functional IDE - no manual screen sharing, no context switching. Pick your tools and evaluate faster with clarity built in.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="border border-white/10 bg-[#0A0A0C] flex flex-col h-[500px]">
            <div className="flex-1 p-6 relative overflow-hidden flex items-center justify-center border-b border-white/5 bg-gradient-to-br from-[#0A0A0C] to-[#150A20]">
              {/* Node Graph Mockup */}
              <div className="relative w-full h-full flex items-center justify-center opacity-80">
                <div className="w-2 h-2 rounded-full bg-teal-500 absolute top-1/4 left-1/4 shadow-[0_0_10px_teal]"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500 absolute bottom-1/3 left-1/3 shadow-[0_0_10px_blue]"></div>
                <div className="w-2 h-2 rounded-full bg-pink-500 absolute right-1/4 top-1/3 shadow-[0_0_10px_pink]"></div>
                <div className="w-4 h-4 rounded-full bg-white absolute outline outline-2 outline-white/20 outline-offset-4"></div>

                <svg className="absolute inset-0 w-full h-full stroke-white/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M25,25 L50,50 L33,66" fill="none" />
                  <path d="M50,50 L75,33" fill="none" />
                </svg>

                <div className="absolute text-[10px] font-mono text-gray-500 top-[20%] left-[20%]">logic.ts</div>
                <div className="absolute text-[10px] font-mono text-gray-500 bottom-[28%] left-[28%]">api.py</div>
                <div className="absolute text-[10px] font-mono text-gray-500 right-[20%] top-[28%]">schema.go</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-display mb-4">Real-time Analysis</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                Index your candidate's session and explore it through natural analytics. Get insights into time and space complexity instantly, and always see the exact execution trace behind every evaluation.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="border border-white/10 bg-[#0A0A0C] flex flex-col h-[500px]">
            <div className="flex-1 p-6 relative overflow-hidden flex items-center justify-center border-b border-white/5">
              {/* Team graphic */}
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 border border-white/10 bg-white/5 flex items-center gap-2 rounded-sm"><span className="w-3 h-3 bg-green-500 rounded-sm"></span> <span className="font-mono text-sm">Public</span></div>
                </div>
                <div className="flex mt-4 relative">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-black z-30 shadow-xl flex items-center justify-center">👤</div>
                  <div className="w-16 h-16 rounded-full bg-gray-700 border-2 border-black z-20 -ml-6 shadow-xl flex items-center justify-center">👤</div>
                  <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-black z-10 -ml-6 shadow-xl flex items-center justify-center">👤</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-display mb-4">Team Calibration</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                Generate interview reports, publish candidate scorecards, and share them anywhere. Onboard interviewers quickly with a single, always-in-sync source of truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language / Stack Section (Screenshot 4) */}
      <section className="py-24 border-y border-white/5 relative bg-black/50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Graphic Map */}
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="text-6xl text-teal-400 font-display italic font-bold relative z-10">&lt;cn/&gt;</div>

            {/* Lines radiating out */}
            <svg className="absolute inset-0 w-full h-full stroke-white/20" style={{ fill: 'none' }}>
              <path d="M 50% 50% L 20% 20%" />
              <path d="M 50% 50% L 80% 20%" />
              <path d="M 50% 50% L 10% 50%" />
              <path d="M 50% 50% L 90% 50%" />
              <path d="M 50% 50% L 20% 80%" />
              <path d="M 50% 50% L 80% 80%" />
            </svg>

            {/* Tech Nodes (Abstracted using pure CSS/Text for now to match structure) */}
            <div className="absolute top-[15%] left-[15%] bg-[#0A0A0C] border border-white/10 p-2 font-bold text-[#E34F26]">HTML5</div>
            <div className="absolute top-[15%] right-[15%] bg-[#0A0A0C] border border-white/10 p-2 font-bold text-[#3178C6]">TS</div>
            <div className="absolute top-[45%] left-[5%] bg-[#0A0A0C] border border-white/10 p-2 font-bold text-[#F7DF1E]">JS</div>
            <div className="absolute top-[45%] right-[5%] bg-[#0A0A0C] border border-white/10 p-2 font-bold text-[#3776AB]">Python</div>
            <div className="absolute bottom-[15%] left-[15%] bg-[#0A0A0C] border border-white/10 p-2 font-bold text-[#00ADD8]">Go</div>
            <div className="absolute bottom-[15%] right-[15%] bg-[#0A0A0C] border border-white/10 p-2 font-bold text-[#B07219]">Java</div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-wider mb-8">
              A SINGLE POINT OF CLARITY FOR EVERY LANGUAGE IN YOUR STACK
            </h2>
            <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed mb-6">
              CodeNexus maps execution, evaluation, and logic across all major languages and frameworks, removing manual grading and lost context.
            </p>
            <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed">
              Everything converges into one consistent, navigable view.
            </p>
          </div>
        </div>
      </section>

      {/* Footer (Screenshot 5) */}
      <footer className="pt-32 pb-12 px-4 text-center border-t border-white/5 bg-[#0B0B0E] relative flex flex-col items-center">
        <div className="text-7xl md:text-[8rem] text-teal-400 font-display italic font-bold mb-12">&lt;cn/&gt;</div>
        <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-widest max-w-[800px] mb-12">
          YOU BUILD THE PRODUCT <br /> WE'LL BUILD THE UNDERSTANDING
        </h2>
        <button className="bg-white text-black font-bold font-mono px-8 py-4 mb-32 hover:bg-gray-200 transition-colors tracking-wide text-lg">
          Get Started
        </button>

        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-end text-left border-t border-white/10 pt-8 mt-12 gap-8 md:gap-0">
          <div>
            <div className="text-2xl font-bold mb-2">CodeNexus</div>
            <div className="text-gray-600 font-mono text-xs">© 2026 CodeNexus — All Rights Reserved</div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4 mb-2">
              <a href="#" className="text-gray-500 hover:text-white font-mono font-bold transition-colors">PL</a>
              <a href="#" className="text-gray-500 hover:text-white font-mono font-bold transition-colors">X</a>
              <a href="#" className="text-gray-500 hover:text-white font-mono font-bold transition-colors">IG</a>
              <a href="#" className="text-gray-500 hover:text-white font-mono font-bold transition-colors">MAIL</a>
            </div>
            <div className="border border-green-500/30 bg-green-500/10 text-green-400 font-mono text-xs px-3 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              All systems operational
            </div>
            <div className="text-gray-600 font-mono text-xs flex gap-4 mt-2">
              <a href="#" className="hover:text-gray-300">PRIVACY POLICY</a>
              <a href="#" className="hover:text-gray-300">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
