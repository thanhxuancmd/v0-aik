-- Insert categories
INSERT INTO categories (name, slug, description, color, icon) VALUES
('AI Assistant', 'ai-assistant', 'Trợ lý AI thông minh cho cuộc sống hàng ngày', '#3B82F6', 'MessageCircle'),
('Development', 'development', 'Công cụ AI hỗ trợ lập trình và phát triển phần mềm', '#10B981', 'Code'),
('Content Writing', 'content-writing', 'AI tạo nội dung và viết lách chuyên nghiệp', '#8B5CF6', 'PenTool'),
('Design', 'design', 'AI tạo hình ảnh và thiết kế sáng tạo', '#F59E0B', 'Palette'),
('Video', 'video', 'AI chỉnh sửa và tạo video', '#EF4444', 'Video'),
('Analytics', 'analytics', 'AI phân tích dữ liệu và báo cáo', '#06B6D4', 'BarChart'),
('Automation', 'automation', 'AI tự động hóa quy trình công việc', '#84CC16', 'Zap'),
('Search', 'search', 'AI tìm kiếm và nghiên cứu thông tin', '#6366F1', 'Search'),
('E-commerce', 'e-commerce', 'AI hỗ trợ thương mại điện tử', '#EC4899', 'ShoppingCart'),
('Chatbots', 'chatbots', 'AI-powered conversational agents and virtual assistants', '#3B82F6', '💬'),
('Content Creation', 'content-creation', 'AI tools for writing, editing, and content generation', '#10B981', '✍️'),
('Image Generation', 'image-generation', 'AI tools for creating and editing images', '#F59E0B', '🎨'),
('Code Assistant', 'code-assistant', 'AI tools to help with programming and development', '#84CC16', '💻'),
('Data Analysis', 'data-analysis', 'AI tools for analyzing and processing data', '#06B6D4', '📊'),
('Productivity', 'productivity', 'AI tools to enhance workflow and productivity', '#84CC16', '⚡'),
('Research', 'research', 'AI tools for research and information gathering', '#6366F1', '🔍'),
('Education', 'education', 'AI tools for learning and educational purposes', '#EC4899', '📚')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  color = COALESCE(categories.color, EXCLUDED.color),
  icon = EXCLUDED.icon,
  updated_at = CURRENT_TIMESTAMP;
