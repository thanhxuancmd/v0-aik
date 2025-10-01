-- Insert agents
INSERT INTO agents (name, slug, description, category_id, pricing, source_type, website_url, github_url, demo_url, popularity, autonomy, users_count, rating, is_active) VALUES
('ChatGPT', 'chatgpt', 'AI chatbot mạnh mẽ từ OpenAI có khả năng trò chuyện tự nhiên và giải quyết nhiều vấn đề phức tạp', 1, 'freemium', 'closed_source', 'https://chat.openai.com', NULL, 'https://chat.openai.com', 95, 85, 100000000, 4.5, true),
('Claude', 'claude', 'AI assistant thông minh từ Anthropic với khả năng phân tích sâu và an toàn cao', 1, 'freemium', 'closed_source', 'https://claude.ai', NULL, 'https://claude.ai', 88, 82, 50000000, 4.4, true),
('GitHub Copilot', 'github-copilot', 'AI coding assistant giúp lập trình viên viết code nhanh hơn và hiệu quả hơn', 4, 'paid', 'closed_source', 'https://github.com/features/copilot', NULL, NULL, 92, 75, 5000000, 4.6, true),
('Midjourney', 'midjourney', 'AI tạo hình ảnh chất lượng cao từ mô tả văn bản với khả năng sáng tạo nghệ thuật', 5, 'freemium', 'closed_source', 'https://midjourney.com', NULL, NULL, 90, 70, 15000000, 4.7, true),
('Stable Diffusion', 'stable-diffusion', 'AI tạo hình ảnh mã nguồn mở với khả năng tùy chỉnh cao và chạy local', 5, 'free', 'open_source', 'https://stability.ai', 'https://github.com/Stability-AI/stablediffusion', NULL, 85, 65, 8000000, 4.3, true),
('Zapier', 'zapier', 'Nền tảng tự động hóa kết nối hàng nghìn ứng dụng và dịch vụ', 6, 'freemium', 'closed_source', 'https://zapier.com', NULL, 'https://zapier.com', 87, 90, 6000000, 4.5, true),
('Notion AI', 'notion-ai', 'AI assistant tích hợp trong Notion giúp viết, tóm tắt và tổ chức thông tin', 2, 'freemium', 'closed_source', 'https://notion.so', NULL, NULL, 83, 60, 30000000, 4.2, true),
('Grammarly', 'grammarly', 'AI kiểm tra ngữ pháp và cải thiện văn bản tiếng Anh', 2, 'freemium', 'closed_source', 'https://grammarly.com', NULL, 'https://grammarly.com', 89, 55, 30000000, 4.4, true),
('Jasper', 'jasper', 'AI marketing copywriter chuyên tạo nội dung quảng cáo và marketing', 2, 'paid', 'closed_source', 'https://jasper.ai', NULL, 'https://jasper.ai', 78, 70, 1000000, 4.1, true),
('Copy.ai', 'copy-ai', 'AI writing assistant giúp tạo nội dung marketing và bán hàng hiệu quả', 2, 'freemium', 'closed_source', 'https://copy.ai', NULL, 'https://copy.ai', 75, 68, 2000000, 4.0, true),
('Tableau GPT', 'tableau-gpt', 'AI phân tích dữ liệu tích hợp trong Tableau với khả năng insight tự động', 3, 'paid', 'closed_source', 'https://tableau.com', NULL, NULL, 72, 80, 500000, 4.3, true),
('DataRobot', 'datarobot', 'Nền tảng AI tự động hóa machine learning và phân tích dữ liệu', 3, 'paid', 'closed_source', 'https://datarobot.com', NULL, 'https://datarobot.com', 70, 85, 300000, 4.2, true),
('Figma AI', 'figma-ai', 'AI design assistant tích hợp trong Figma hỗ trợ thiết kế UI/UX', 5, 'freemium', 'closed_source', 'https://figma.com', NULL, NULL, 80, 50, 4000000, 4.1, true),
('Canva AI', 'canva-ai', 'AI design tools trong Canva giúp tạo thiết kế đồ họa chuyên nghiệp', 5, 'freemium', 'closed_source', 'https://canva.com', NULL, 'https://canva.com', 85, 45, 75000000, 4.3, true),
('Perplexity', 'perplexity', 'AI search engine kết hợp tìm kiếm và trả lời câu hỏi với nguồn tham khảo', 7, 'freemium', 'closed_source', 'https://perplexity.ai', NULL, 'https://perplexity.ai', 82, 75, 10000000, 4.4, true),
('Wolfram Alpha', 'wolfram-alpha', 'AI computational engine giải quyết các bài toán phức tạp và phân tích dữ liệu', 7, 'freemium', 'closed_source', 'https://wolframalpha.com', NULL, 'https://wolframalpha.com', 76, 88, 5000000, 4.5, true),
('Khan Academy AI', 'khan-academy-ai', 'AI tutor cá nhân hóa giúp học sinh học tập hiệu quả hơn', 8, 'free', 'closed_source', 'https://khanacademy.org', NULL, NULL, 79, 65, 120000000, 4.2, true),
('Duolingo AI', 'duolingo-ai', 'AI language learning assistant trong ứng dụng học ngoại ngữ Duolingo', 8, 'freemium', 'closed_source', 'https://duolingo.com', NULL, 'https://duolingo.com', 88, 60, 500000000, 4.4, true),
('Salesforce Einstein', 'salesforce-einstein', 'AI CRM assistant tích hợp trong Salesforce hỗ trợ bán hàng và marketing', 9, 'paid', 'closed_source', 'https://salesforce.com', NULL, NULL, 74, 78, 150000, 4.1, true),
('HubSpot AI', 'hubspot-ai', 'AI marketing và sales assistant trong nền tảng HubSpot', 9, 'freemium', 'closed_source', 'https://hubspot.com', NULL, 'https://hubspot.com', 77, 72, 100000, 4.0, true);

-- Update agent counts for categories
UPDATE categories SET agent_count = (
  SELECT COUNT(*) FROM agents WHERE category_id = categories.id AND is_active = true
);
