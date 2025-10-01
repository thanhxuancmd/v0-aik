-- Insert categories
INSERT INTO categories (slug, name, description, icon) VALUES
('chatbots', 'Chatbots & Assistants', 'AI chatbots và trợ lý ảo thông minh', '🤖'),
('coding', 'Coding & Development', 'Công cụ AI hỗ trợ lập trình và phát triển', '💻'),
('writing', 'Writing & Content', 'AI hỗ trợ viết lách và tạo nội dung', '✍️'),
('image-generation', 'Image Generation', 'Tạo hình ảnh và nghệ thuật bằng AI', '🎨'),
('video-audio', 'Video & Audio', 'Xử lý video, âm thanh và tạo media', '🎬'),
('data-analysis', 'Data Analysis', 'Phân tích dữ liệu và machine learning', '📊'),
('productivity', 'Productivity', 'Công cụ AI tăng năng suất làm việc', '⚡'),
('research', 'Research & Search', 'Nghiên cứu và tìm kiếm thông tin', '🔍'),
('automation', 'Automation', 'Tự động hóa quy trình và tác vụ', '🔄')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  updated_at = CURRENT_TIMESTAMP;
