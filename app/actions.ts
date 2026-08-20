"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../lib/supabase/server";
import { scheduleData } from "../lib/schedule-data";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export async function addCapture(classId: string, captureDate: string) {
  if (!datePattern.test(captureDate) || !scheduleData.classes.some((item) => item.id === classId && item.trackable)) return { error: "Invalid class or date." };
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "You must be signed in." };
  const { data, error } = await supabase.from("captures").insert({ user_id: user.id, class_id: classId, capture_date: captureDate }).select("id,class_id,capture_date,created_at").single();
  if (error) return { error: error.code === "23505" ? "This class is already counted for that date." : "Unable to save the capture." };
  revalidatePath("/");
  return { capture: data };
}

export async function removeCapture(captureId: string) {
  if (!captureId || captureId.length > 80) return { error: "Invalid capture." };
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "You must be signed in." };
  const { error } = await supabase.from("captures").delete().eq("id", captureId).eq("user_id", user.id);
  if (error) return { error: "Unable to remove the capture." };
  revalidatePath("/");
  return { ok: true };
}
