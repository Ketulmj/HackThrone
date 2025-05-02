"use client"

import { toast as sonnerToast } from "sonner"

const TOAST_DURATION = 4000 // 4 seconds

// Wrapper for toast
function toast({ title, description, action, duration = TOAST_DURATION, ...rest }) {
  return sonnerToast(title || "", {
    description,
    duration,
    action,
    ...rest,
  })
}

export { toast }