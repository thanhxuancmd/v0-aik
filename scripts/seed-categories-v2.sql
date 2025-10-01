-- Insert categories
INSERT INTO categories (slug, name, description, icon) VALUES
('chatbots', 'Chatbots', 'AI-powered conversational agents', '💬'),
('writing', 'Writing', 'AI tools for content creation and writing assistance', '✍️'),
('coding', 'Coding', 'AI assistants for programming and development', '💻'),
('image-generation', 'Image Generation', 'AI tools for creating and editing images', '🎨'),
('video-audio', 'Video & Audio', 'AI tools for video and audio processing', '🎬'),
('data-analysis', 'Data Analysis', 'AI tools for data processing and analytics', '📊'),
('productivity', 'Productivity', 'AI tools to enhance workflow and productivity', '⚡'),
('research', 'Research', 'AI assistants for research and information gathering', '🔍'),
('automation', 'Automation', 'AI tools for task automation and workflows', '🤖')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  updated_at = CURRENT_TIMESTAMP;
