import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const supabaseUrl = "https://hsglqjvavhhdgqjzqzo.supabase.co";
const supabaseKey = "sb_publishable_YSoOTNaYX-q0MYwNf3uy4A_R6-Qp1sT";
export const supabase = createClient(supabaseUrl, supabaseKey);