export function EcosystemHero() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-gray-200/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-black">
          Hệ Sinh Thái
          <br />
          <span className="text-gray-800">AI Agents</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Khám phá toàn cảnh động và toàn diện của hệ sinh thái AI agents, được cập nhật tính đến tháng 2/2025. Hệ sinh
          thái được tuyển chọn của chúng tôi giới thiệu đa dạng các công cụ AI agentic, framework, platform và agents.
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { label: "Danh mục" },
            { label: "Nghề nghiệp" },
            { label: "Ngành công nghiệp" },
            { label: "Thẻ" },
            { label: "Mô hình truy cập" },
            { label: "Mô hình giá cả" },
          ].map((tag, index) => (
            <div
              key={tag.label}
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              {tag.label}
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
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
