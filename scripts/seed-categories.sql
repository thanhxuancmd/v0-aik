-- Insert categories
INSERT INTO categories (name, slug, icon, description) VALUES
('Tất cả', 'all', 'Grid3X3', 'Tất cả các AI Agents'),
('Phát triển', 'development', 'Code', 'AI Agents hỗ trợ lập trình và phát triển phần mềm'),
('AI Assistant', 'ai-assistant', 'Brain', 'Trợ lý AI thông minh cho các tác vụ đa dạng'),
('Robotics', 'robotics', 'Zap', 'Robot và hệ thống tự động thông minh'),
('Nội dung', 'content', 'PenTool', 'Tạo và quản lý nội dung với AI'),
('Chatbot', 'chatbot', 'MessageSquare', 'Bot trò chuyện và hỗ trợ khách hàng'),
('Phân tích', 'analytics', 'BarChart3', 'Phân tích dữ liệu và business intelligence'),
('Tự động hóa', 'automation', 'Zap', 'Tự động hóa quy trình và workflow'),
('Thiết kế', 'design', 'Palette', 'Thiết kế đồ họa và sáng tạo với AI'),
('Âm thanh', 'audio', 'Music', 'Xử lý và tạo nội dung âm thanh'),
('Video', 'video', 'Video', 'Tạo và chỉnh sửa video với AI'),
('Thương mại', 'ecommerce', 'ShoppingCart', 'Giải pháp AI cho thương mại điện tử'),
('Kinh doanh', 'business', 'Briefcase', 'Công cụ AI cho quản lý kinh doanh')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  icon = EXCLUDED.icon,
  description = EXCLUDED.description,
  updated_at = CURRENT_TIMESTAMP;
