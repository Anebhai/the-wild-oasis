import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://niuwunfutjylyntkardg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdXd1bmZ1dGp5bHludGthcmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2OTY1NzcsImV4cCI6MjAxMzI3MjU3N30.Z-MazdJel4YN3PCDk9vQ2MwdZMsukA23vUvzEpRRh5Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
