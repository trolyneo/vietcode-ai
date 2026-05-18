# Intake backend notes

Supabase target table expected by `submitIntakeBrief`:

- table: `intake_briefs`
- columns:
  - `business_name` text
  - `industry` text
  - `target_audience` text
  - `current_offer` text
  - `brand_tone` text nullable
  - `goals` text
  - `deliverables` text
  - `desired_timeline` text
  - `contact_name` text
  - `email` text
  - `phone_or_zalo` text
  - `reference_code` text unique
  - `source` text
  - `status` text

Current behavior is fail-soft:
- no Supabase env -> demo mode success
- Supabase configured but table/policy missing -> demo mode success
- insert succeeds -> real success state
