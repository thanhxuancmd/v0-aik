export function EcosystemHero() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Hệ Sinh Thái
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AI Agents
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
          Khám phá toàn cảnh động và toàn diện của hệ sinh thái AI agents, được cập nhật tính đến tháng 2/2025. Hệ sinh
          thái được tuyển chọn của chúng tôi giới thiệu đa dạng các công cụ AI agentic, framework, platform và agents.
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { label: "Danh mục", gradient: "from-purple-600 to-pink-600" },
            { label: "Nghề nghiệp", gradient: "from-blue-600 to-cyan-600" },
            { label: "Ngành công nghiệp", gradient: "from-green-600 to-emerald-600" },
            { label: "Thẻ", gradient: "from-orange-600 to-red-600" },
            { label: "Mô hình truy cập", gradient: "from-indigo-600 to-purple-600" },
            { label: "Mô hình giá cả", gradient: "from-pink-600 to-rose-600" },
          ].map((tag, index) => (
            <div
              key={tag.label}
              className="rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            >
              <span
                className={`group-hover:bg-gradient-to-r group-hover:${tag.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
              >
                {tag.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "AI Tools" },
            { number: "50+", label: "Categories" },
            { number: "100+", label: "Frameworks" },
            { number: "24/7", label: "Updates" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
