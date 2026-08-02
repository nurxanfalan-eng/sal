-- =============================================
-- Sotto Sushi - Supabase Orders Table
-- Supabase SQL Editor-da bu kodu işlədin
-- =============================================

-- orders cədvəlini yarat
CREATE TABLE IF NOT EXISTS public.orders (
  id                BIGSERIAL PRIMARY KEY,
  customer_name     TEXT,
  customer_phone    TEXT,
  product_name      TEXT NOT NULL,
  quantity          INTEGER NOT NULL DEFAULT 1,
  price             NUMERIC(10,2) NOT NULL DEFAULT 0,
  total_price       NUMERIC(10,2) NOT NULL DEFAULT 0,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  page_url          TEXT,
  source            TEXT,
  campaign          TEXT,
  medium            TEXT,
  referrer          TEXT,
  device            TEXT,
  browser           TEXT,
  operating_system  TEXT
);

-- RLS (Row Level Security) aktiv et
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Anon key ilə INSERT icazəsi ver (sifariş yazmaq üçün)
CREATE POLICY "Allow anon insert orders"
  ON public.orders
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Authenticated istifadəçilər SELECT edə bilsin (admin panel üçün)
CREATE POLICY "Allow authenticated select orders"
  ON public.orders
  FOR SELECT
  TO authenticated
  USING (true);

-- Index-lər (performans üçün)
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_source ON public.orders (source);
CREATE INDEX IF NOT EXISTS idx_orders_campaign ON public.orders (campaign);

-- Cədvəl hazırdır!
-- Qeyd: service_role key istifadə edilmir, yalnız anon key ilə yazılır
