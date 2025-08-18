import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sự kiện AIK - Workshop và Webinar về AI",
  description: "Tham gia các sự kiện, workshop và webinar về AI agents và công nghệ mới nhất",
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "AI Agents Workshop",
      date: "15/02/2024",
      time: "14:00 - 17:00",
      type: "Workshop",
      location: "Online",
    },
    {
      title: "Future of AI Webinar",
      date: "22/02/2024",
      time: "19:00 - 20:30",
      type: "Webinar",
      location: "Online",
    },
    {
      title: "AIK Community Meetup",
      date: "01/03/2024",
      time: "18:00 - 21:00",
      type: "Meetup",
      location: "Hà Nội",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Sự kiện AIK</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tham gia các workshop, webinar và meetup để học hỏi về AI agents và kết nối với cộng đồng.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Sự kiện sắp tới</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-blue-600 font-medium mb-2">{event.type}</div>
                <h3 className="text-xl font-semibold text-black mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600 mb-6">
                  <div>📅 {event.date}</div>
                  <div>🕐 {event.time}</div>
                  <div>📍 {event.location}</div>
                </div>
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Đăng ký tham gia
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Loại sự kiện</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Workshop</h3>
              <p className="text-gray-600">Học thực hành với AI agents</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Webinar</h3>
              <p className="text-gray-600">Chia sẻ kiến thức và xu hướng</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Meetup</h3>
              <p className="text-gray-600">Gặp gỡ và networking</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
