import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";
import Dashboard from "./dashboard";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const { data } = await supabase.from("captures").select("id,class_id,capture_date,created_at").order("capture_date", { ascending: false });
  return <Dashboard initialCaptures={(data || []) as { id: string; class_id: string; capture_date: string; created_at: string }[]} />;
}
