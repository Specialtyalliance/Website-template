/*
# Create chatbot widget configuration table

1. New Tables
- `chatbot_config`
  - `id` (uuid, primary key)
  - `widget_token` (text, unique, not null) — token used in the embed script's data-token attribute
  - `persona_name` (text, not null) — name shown in the chat header
  - `practice_name` (text) — subtitle shown under persona name
  - `primary_color` (text) — main brand color for buttons and header
  - `accent_color` (text) — accent color for CTA buttons
  - `greeting_message` (text) — first message shown when widget loads
  - `booking_url` (text) — URL for the "Book Your Appointment" CTA
  - `is_active` (boolean, default true) — whether the widget is enabled
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

2. Security
- Enable RLS on `chatbot_config`.
- Allow anon + authenticated SELECT (the widget needs to read config without login).
- No INSERT/UPDATE/DELETE via API — config is managed server-side only.

3. Notes
- Seeded with the widget token `e9152a89-5b03-4844-9d10-d4ffd6ce023c`.
- Colors match the dental practice's teal theme.
*/

CREATE TABLE IF NOT EXISTS chatbot_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  widget_token text UNIQUE NOT NULL,
  persona_name text NOT NULL DEFAULT 'AI Assistant',
  practice_name text,
  primary_color text NOT NULL DEFAULT '#0D9E95',
  accent_color text NOT NULL DEFAULT '#0B8E86',
  greeting_message text NOT NULL DEFAULT 'Hi! How can I help you today?',
  booking_url text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE chatbot_config ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_chatbot_config" ON chatbot_config;
CREATE POLICY "anon_read_chatbot_config"
ON chatbot_config FOR SELECT
TO anon, authenticated
USING (true);

INSERT INTO chatbot_config (widget_token, persona_name, practice_name, primary_color, accent_color, greeting_message, booking_url, is_active)
VALUES (
  'e9152a89-5b03-4844-9d10-d4ffd6ce023c',
  'Dream Smile Assistant',
  'Dream Smile Dental',
  '#0D9E95',
  '#0B8E86',
  'Hi! Welcome to Dream Smile Dental. How can I help you today?',
  '/book-appointment',
  true
)
ON CONFLICT (widget_token) DO NOTHING;